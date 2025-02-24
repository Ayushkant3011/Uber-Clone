import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '>
           <i className="text-lg font-bold ri-home-5-line"></i>
        </Link>
        <div className='h-1/2 '>
            <img className='h-full w-full object-fill' src='https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif' alt='Temp Map Image'/>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png' loading='lazy'/>

                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Ayush</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>BR 06AB 3119</h4>
                        <p className='text-sm text-gray-600'>Silver Suzuki S-Presso VXI+</p>
                    </div>
                </div>
        
                <div className='flex gap-2 justify-between flex-col items-center'>        
                
                    <div className='w-full mt-5'>

                        <div className='flex items-center gap-5 p-3 border-b-2 '>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>Gate No.6</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Motera Stadium, Ahemdabad</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-3'>
                            <i className="text-lg ri-currency-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹193.20</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Riding