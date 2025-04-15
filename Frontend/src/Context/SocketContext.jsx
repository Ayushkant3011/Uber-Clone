import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io(import.meta.env.VITE_BASE_URL, {
      transports: ['websocket'], // Use WebSocket transport
    });

    newSocket.on('connect', () => {
      console.log('Connected to socket server:', newSocket.id);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });

    setSocket(newSocket);


  }, []);

  // Function to send a message to a specific event
  const sendMessage = (eventName, data) => {
    if (socket) {
      socket.emit(eventName, data);
    } else {
      console.error('Socket is not connected');
    }
  };

  // Function to listen for messages from a specific event
  const receiveMessage = (eventName, callback) => {
    if (socket) {
      socket.on(eventName, callback);
    } else {
      console.error('Socket is not connected');
    }
  };

  return (
    <SocketContext.Provider value={{ sendMessage, receiveMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;