import React from 'react'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center h-[80px] bg-white fixed inset-x-0 top-0 sm:items-center sm:justify-between '>
        
        <img src= {logo} alt='nav-icon' className='h-[80px] w-[150px] sm:ml-[50px]'/>
        <p className='hidden sm:block mr-[240px] text-[#47494E] text-[20px]'>Traceability Information</p>

    </div>
  )
}

export default Navbar