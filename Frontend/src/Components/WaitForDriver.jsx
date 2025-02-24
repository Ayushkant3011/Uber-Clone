import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0'  onClick={() =>{
        props.waitingForDriver(false);
        }}>
          <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
        </h5>
        
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
        </div>
    </div>
  )
}

export default WaitForDriver