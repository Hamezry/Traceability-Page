import React from 'react'
import map from '../Assets/Map.png'
import map2 from '../Assets/map2.png'

function Sidemap() {
  return (
    
    <div class="lg:h-[calc(100vh-90px)] lg:w-[68%]">

        <div className='lg:hidden mt-8 lg:mt-[100px]'>
           <img src={map2} alt='mpn2' className='md:w-[760px] md:object-cover md:object-center'/>
        </div>

      <div class="hidden lg:block w-full h-[100%]">
        <img src={map} alt='crd-icon' className='object-cover object-center lg:h-[100%] lg:w-full'/>
      </div>

      </div>
       
  )
}

export default Sidemap
