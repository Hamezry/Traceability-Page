import React from 'react'
import logo from '../Assets/logo.svg'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center lg:justify-none h-[90px] bg-white sticky font-muli  z-30  top-0 lg:items-center'>
        
        <img src= {logo} alt='nav-icon' className='h-[80px] w-[188px] lg:ml-[50px]'/>
        <p className='hidden lg:block text-[#47494E] font-semibold  text-[20px]'>Traceability Information</p>

    </div>
  )
}

export default Navbar