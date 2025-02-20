import {React,useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import UberCaptainLogo from '../assets/Uber-driver.png';
import { CaptainDataContext } from '../Context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const {captain, setCaptain} = useContext(CaptainDataContext);

  const submitHandler = async(e) =>{
    e.preventDefault();
    // console.log(email, password)
    const captainData = {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    // console.log(captainData);

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(res.status === 201){
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain/home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }


  return (
    <div className='px-5 py-5 flex flex-col justify-between h-screen'>
      <div>
        <div className='w-16 mb-2'><img src={UberCaptainLogo} alt='Uber Captain Logo'/></div>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-base font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-4 mb-3'>  
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
          className='bg-[#eeeeee] mb-3 rounded-sm px-4 py-2 border w-full text-base placeholder:text-sm' 
          type='email' 
          required 
          placeholder='Email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
          className='bg-[#eeeeee] mb-3 rounded-sm px-4 py-2 border w-full text-base placeholder:text-sm'
          required 
          type='password' 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-3'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded-sm px-4 py-2 border text-base placeholder:text-sm'
              type='text'
              required
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />

            <input
              className='bg-[#eeeeee] w-1/2 rounded-sm px-4 py-2 border text-base placeholder:text-sm'
              type='text'
              required
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className='flex gap-4 mb-5'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded-sm px-4 py-2 border text-base placeholder:text-sm'
              type='number'
              required
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />

            <select
              className='bg-[#eeeeee] w-1/2 rounded-sm px-4 py-2 border text-base placeholder:text-sm'
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value='' disabled>Select Vehicle Type</option>
              <option value='car'>Car</option>
              <option value='auto'>Auto</option>
              <option value='moto'>Moto</option>
            </select>
          </div>


          <button 
          className='bg-[#111] text-white font-semibold mb-3 rounded-sm px-4 py-2 w-full text-lg placeholder:text-base'>
            Create Captain Account
          </button>

          <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600 '>SignIn Here</Link></p>
        </form>
      </div>

      <div className='flex flex-col gap-2.5 mt-8'>
        <p className='text-[8px] leading-tight'>
          By proceeding, you consent to get advertisements, promotional and marketing communications,
          including by automated means, from Uber and its affiliates to the email provided.
        </p>

        <p className='text-[8px] leading-tight mb-2 mt-0'>
          This site is protected by reCAPTCHA and the <span className='underline text-blue-400'>Google Privacy Policy </span> 
          and <span className='underline text-blue-400'> Terms of Service apply.</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup