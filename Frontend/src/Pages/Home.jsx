import React, { useRef, useState } from 'react'
import UberLogo from '../Components/Logo/uberLogo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

const Home= () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative'>
      <div className='w-16 absolute left-5 top-5'><UberLogo /></div>

      <div className='h-screen object-cover'>
        {/* Image for Temporary Basis */}
        <img className='h-full w-full object-fill' src='https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif' alt='Temp Map Image'/>
      </div>

      <div className='flex flex-col justify-end h-screen absolute w-full top-0'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false);
          }} className='absolute opacity-0 top-6 right-6 text-2xl '>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold '>Find a Trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e);
          }}>
            <div className='line absolute h-16 w-1 top-[43%] left-10 bg-gray-600 rounded-full '></div>
            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={()=>{
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type='text' 
              placeholder='Enter Pickup Location'
            />
            
            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={destination}
              onChange={()=>{
                setDestination(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              type='text' 
              placeholder='Enter Dropoff Location'  
            />
            
            <button>Find a Trip</button>
          </form>
        </div>

        <div ref={panelRef} className=' bg-red-500 h-0'>

        </div>
      </div>

    </div>
  )
}

export default Home;