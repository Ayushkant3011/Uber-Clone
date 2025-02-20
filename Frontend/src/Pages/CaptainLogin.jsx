import React, { useState, useContext } from 'react'
import UberLogo from '../Components/Logo/uberLogo';
import { Link } from 'react-router-dom';
import UberCaptainLogo from '../assets/Uber-driver.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../Context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async(e) =>{
    e.preventDefault();
    // console.log(email, password)
    const captain ={
      email: email,
      password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain/home');
    }

    // console.log(userData);

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <div className='w-16 mb-4'><img src={UberCaptainLogo} alt='Uber Captain Logo'/></div>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
          className='bg-[#eeeeee] mb-7 rounded-sm px-4 py-2 border w-full text-lg placeholder:text-base' 
          type='email' 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
          className='bg-[#eeeeee] mb-7 rounded-sm px-4 py-2 border w-full text-lg placeholder:text-base'
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password' 
          placeholder='Password'
          />

          <button 
          className='bg-[#111] text-white font-semibold mb-3 rounded-sm px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>

          <p className='text-center'>Join a Fleet? <Link to='/captain-signup' className='text-blue-600 '>Register as Captain</Link></p>
        </form>
      </div>

      <div>
        <Link
        to='/login'
        className='bg-[#f3c164] flex items-center justify-center text-white font-semibold mb-5 rounded-sm px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign in as User 
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin