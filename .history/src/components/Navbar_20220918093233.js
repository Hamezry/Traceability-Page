import React from 'react'
import logo from '../Assets/logo.svg'

const Navbar = () => {
  return (
    <div className='w-full flex  h-[90px] bg-white sticky font-muli  z-30  top-0 lg:items-center'>
      <div className='w-[70%]'>
        <img src={logo} alt='nav-icon' className='h-[80px] w-[188px] lg:ml-[50px]' />
      </div>

      <div>
        <p className='hidden lg:block  text-[#47494E] font-semibold  text-[20px]'>Traceability Information</p>

      </div>



    </div>
  )
}

export default Navbar