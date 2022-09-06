import React from 'react'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center h-[90px] bg-white sticky font-muli  z-30  top-0 lg:items-center lg:justify-between '>
        
        <img src= {logo} alt='nav-icon' className='h-[80px] w-[150px] lg:ml-[50px]'/>
        <p className='hidden lg:block mr-[320px] text-[#47494E] font-semibold  text-[20px]'>Traceability Information</p>

    </div>
  )
}

export default Navbar