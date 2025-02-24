import React, { useRef, useState } from 'react'
import UberLogo from '../Components/Logo/uberLogo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../Components/LocationSearchPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmRide from '../Components/ConfirmRide';
import WaitForDriver from '../Components/WaitForDriver';
import LookingForDriver from '../Components/LookingForDriver';

const Home= () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const conrfirmRidePanelRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const waitingForDriverRef= useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [VehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])


  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(conrfirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(conrfirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(VehicleFound){
      gsap.to(VehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(VehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[VehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <div className='w-16 absolute left-5 top-5'><UberLogo /></div>

      <div className='h-screen w-screen'>
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
            <div className='line absolute h-15 w-1 top-[37%] left-10 bg-gray-600 rounded-full '></div>
            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-2'
              type='text' 
              placeholder='Enter Pickup Location'
            />
            
            <input 
              onClick={()=>{
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-2'
              type='text' 
              placeholder='Enter Dropoff Location'  
            />
            
            <button 
              className='bg-[#111] text-white font-semibold mt-3 rounded-sm px-4 py-1 w-[33%] text-base placeholder:text-base'>
                Find a Trip
            </button>
          </form>
        </div>

        <div ref={panelRef} className=' bg-white h-0'>
              <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={conrfirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={VehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12'>
        <WaitForDriver waitingForDriver={waitingForDriver}/>
      </div>
    </div>
  )
}

export default Home;
