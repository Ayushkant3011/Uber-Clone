import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './Context/userContext.jsx';
import CaptainContext from './Context/CaptainContext.jsx';
import SocketProvider from './Context/SocketContext.jsx'; // Import SocketProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocketProvider> {/* Wrap the app with SocketProvider */}
      <CaptainContext>
        <UserContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContext>
      </CaptainContext>
    </SocketProvider>
  </StrictMode>,
);
