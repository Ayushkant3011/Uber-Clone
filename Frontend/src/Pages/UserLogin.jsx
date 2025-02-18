import React, { useState } from 'react'
import UberLogo from '../Components/Logo/uberLogo'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const [userData, setuserData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log(email, password)
    setuserData({
      email: email,
      password: password
    });
    console.log(userData);

    setEmail('');
    setpassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <div className='w-16 mb-10'><UberLogo/></div>
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
          onChange={(e) => setpassword(e.target.value)}
          type='password' 
          placeholder='Password'
          />

          <button 
          className='bg-[#111] text-white font-semibold mb-3 rounded-sm px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>

          <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600 '>Create New Account</Link></p>
        </form>
      </div>

      <div>
        <Link
        to='/captain-login'
        className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-sm px-4 py-2 w-full text-lg placeholder:text-base'
        >
          Sign in as Captain 
        </Link>
      </div>
    </div>
  )
}

export default UserLogin



// 2hr 27min