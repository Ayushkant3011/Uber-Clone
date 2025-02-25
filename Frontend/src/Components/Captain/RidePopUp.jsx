import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0'  onClick={() =>{
        props.setRidePopupPanel(false);
        }}>
          <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
        
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-10 rounded-full object-cover w-10' src='https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg'/>
                <h2 className='text-lg font-medium'>Harshi Kumari</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>        
           
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2 '>
                    <i className="ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>

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

            <button
                onClick={()=>{
                    props.setVehicleFound(true);
                    props.setConfirmRidePanel(false);
                }}
                className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'
            >
                    Acecpt
            </button>

            <button
                onClick={()=>{
                    props.setRidePopupPanel(false);
                 }}
                className='w-full mt-5 bg-gray-400 text-gray-700 font-semibold p-2 rounded-lg'
            >
                    Ignore
            </button>
        </div>
    </div>
  )
}

export default RidePopUp