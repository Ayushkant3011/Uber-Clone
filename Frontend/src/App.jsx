import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StartPage from './Pages/StartPage';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './Pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './Pages/Home';
import UserProtectWrapper from './Pages/UserProtectWrapper';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App