import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import UberCaptainLogo from '../assets/Uber-driver.png';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log(email, password)
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
    });

    // console.log(userData);

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <div className='w-16 mb-4'><img src={UberCaptainLogo} alt='Uber Captain Logo'/></div>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-base font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-4 mb-5'>  
            <input
            className='bg-[#eeeeee] w-1/2 rounded-sm px-4 py-2 border text-base placeholder:text-sm' 
            type='text' 
            required 
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />

            <input
            className='bg-[#eeeeee] w-1/2 rounded-sm px-4 py-2 border text-base placeholder:text-sm' 
            type='text' 
            required 
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          
          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input
          className='bg-[#eeeeee] mb-5 rounded-sm px-4 py-2 border w-full text-base placeholder:text-sm' 
          type='email' 
          required 
          placeholder='Email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
          className='bg-[#eeeeee] mb-5 rounded-sm px-4 py-2 border w-full text-base placeholder:text-sm'
          required 
          type='password' 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button 
          className='bg-[#111] text-white font-semibold mb-3 rounded-sm px-4 py-2 w-full text-lg placeholder:text-base'>
            Sign Up
          </button>

          <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600 '>SignIn Here</Link></p>
        </form>
      </div>

      <div className='flex flex-col gap-7'>
        <p className='text-[8px] leading-tight'>
          By proceeding, you consent to get advertisements, promotional and marketing communications,
          including by automated means, from Uber and its affiliates to the email provided.
        </p>

        <p className='text-[8px] leading-tight mb-0'>
          This site is protected by reCAPTCHA and the <span className='underline text-blue-400'>Google Privacy Policy </span> 
          and <span className='underline text-blue-400'> Terms of Service apply.</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup