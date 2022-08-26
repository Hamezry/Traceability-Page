import React from 'react'
import map from '../Assets/Map.png'
import map2 from '../Assets/map2.png'

function Sidemap() {
  return (
    
    <div class="lg:h-[100vh]">

        <div className='lg:hidden mt-8 lg:mt-[100px]'>
           <img src={map2} alt='mpn2' className='md:w-[760px] md:object-cover md:object-center'/>
        </div>

      <div class="hidden fixed lg:block w-[1250px] h-[100%]">
        <img src={map} alt='crd-icon' className='object-cover object-center lg:h-[100%] lg:w-[1400px]'/>
      </div>

      </div>
       
  )
}

export default Sidemap
