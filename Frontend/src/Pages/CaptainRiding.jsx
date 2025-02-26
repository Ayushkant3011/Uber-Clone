import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import UberCaptainLogo from '../assets/Uber-driver.png'
import FinishRide from '../Components/Captain/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[finishRidePanel])

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src={UberCaptainLogo} />
          <Link to={'/captain-login'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>

        <div className='h-4/5 '>
            <img className='h-full w-full object-fill' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='Temp Map Image'/>
        </div>
        
        <div className='h-1/5 p-6 relative flex items-center justify-between bg-yellow-400'>
          <h5 className='p-1 text-center w-[95%] absolute top-0'  
          onClick={() =>{
            setFinishRidePanel(true);
          }}>
            <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-xl font-semibold'>4 KM Away</h4>
          <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
        </div>

        <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 -translate-y-full bg-white px-3 py-10 pt-12'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div>
    </div>
  )
}

export default CaptainRiding