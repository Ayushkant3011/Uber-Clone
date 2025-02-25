import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
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
        
        <div className='h-1/5 p-6'>

        </div>
    </div>
  )
}

export default CaptainRiding