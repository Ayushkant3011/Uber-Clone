import React from 'react'

const LocationSearchPanel = () => {

  // Sample Array for loaction

  const location =[
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "A-59,1st cross Avenue,Block B Road, Block A, Alpha 1",
    "NRI City, Near Pari Chowk Metro Station, Greater Noida",
    "Roshni Egg Roll Corner, Jagat Farm Market, Gamma 1",
    "Noida Institute of Engineering and Technology, Plot-19, KP-II"
  ]

  return (
    <div>
      {/* This is just a sample data */}
      {
        location.map((function(element){
          return (
            <div className='flex gap-4 border-2 p-2 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center' ><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{element}</h4>
            </div>    
          );
        }))
      }

      
      
    </div>
  )
}

export default LocationSearchPanel