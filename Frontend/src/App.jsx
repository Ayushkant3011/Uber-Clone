import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StartPage from './Pages/StartPage';
import UserLogin from './Pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './Pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './Pages/Home';
import UserProtectWrapper from './Pages/UserProtectWrapper';
import UserLogout from './Pages/UserLogout';
import CaptainHome from './Pages/CaptainHome';
import CaptainProtectWrapper from './Pages/CaptainProtectWrapper';
import Riding from './Pages/Riding';
import CaptainRiding from './Pages/CaptainRiding';
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<UserLogin />} />

        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" 
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />

        <Route path='/user/logout' 
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          } />

        <Route path='/captain/home' 
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }/>
      </Routes>
    </div>
  )
}

export default App