const { Server } = require('socket.io');
const userModel = require('./Models/User');
const captainModel = require('./Models/Captain.model');

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: '*', // Allow all origins, adjust this for production
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        socket.on('join', async (data) => {
            const {userId, userType} = data;

            if(userType === 'user'){
                await userModel.findByIdAndUpdate(userId, {
                    socketId: socket.id
                });
            } else if(userType === 'captain'){
                await captainModel.findByIdAndUpdate(userId, {
                    socketId: socket.id
                });
            }
        });


        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });
};

const sendMessageToSocketId = (socketId, message) => {
    if (io) {
        io.to(socketId).emit('message', message);
    } else {
        console.error('Socket.io is not initialized');
    }
};

module.exports = {
    initializeSocket,
    sendMessageToSocketId
};