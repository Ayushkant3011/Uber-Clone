import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
            <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber Logo'/>
            <div className='bg-white py-5 px-10'>
                <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
                <button className='w-full bg-black text-white py-3'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage