import React from 'react'
import map from '../Assets/Map.png'
import map2 from '../Assets/map2.png'
import image1 from '../Assets/image-1.png'
import image2 from '../Assets/image-2.png'
import reciept from '../Assets/reciept.png'
import line from '../Assets/Line.png'
import recieved from '../Assets/recieved.png'

function Overview() {
  return (
    <div className=' w-full mt-[100px] sm:flex'>  
      
      <div className='sm:hidden'>
        <img src={map2} alt='mpn2'/>
      </div>

      {/*<div className='hidden sm:block w-[70%] sm:h-[100vh] bg-center bg-stretch bg-green-500 bg-no-repeat bg-cover' style={{backgroundImage: `url(${map})`}}>
          <div className='flex flex-col items-center mt-[200px]'>

            <img src={card} alt='card-icon'/>
          </div>
          
      </div>*/}

      <div className='hidden sm:block sm:w-[70%] sm:h-[100vh]'>
        <img src={map} alt='crd-icon' className='object-cover object-center sm:h-[100%] sm:w-[1400px]'/>
      </div>
        
  

     {/*TRACEABILITY SECTION */}

     <div className='sm:h-[100vh] p-4'>
        {/*TRACEABILITY INFO*/}
        <div className='bg-white sm:w-[455px] sm:overflow sm:h-[556px] p-[30px] rounded-3xl'>

          {/*TQC */}
          <div className='mb-4 border-b-2 '>
            <div className='bg-[#76AD94] text-white text-center p-2 w-[163px] h-[38px] mb-[30px] rounded-xl'> <p>TQC-0f5e696fb8</p></div>
            <p className='text-[#54565B] text-[14px] mb-4'>Purchased on Jun 12, 2022 • 4:03pm</p>
            <p className=' text-[#54565B] text-[14px] mb-4'>Purchased at Saminaka Warehouse</p>

          </div>

          <div className='mb-4 border-b-2 '>
            <p className='text-[#7C827D] text-[12px] mb-[25px] '>Commodity</p>
            <p className='text-[#47494E] text-[14px] mb-4'>	Maize Feed Grade - White</p>

          </div>

          <div className='mt-[30px]'>
            <p className='text-[#7C827D] text-[12px]'>Farmer(s)</p>

            <div className='w-[232px] h-[71px] shadow p-3 flex items-center mt-[20px] rounded-xl'>
              <img src={image1} alt='profilepic'/>
             <p className='text-[#47494E] text-[16px] ml-5'>Adegbemile Frank <br/> <span className='text-[#707673] text-[12px]'>28 years Male</span></p>
            </div>

            <div className='w-[232px] h-[71px] shadow p-3 flex items-center mt-[25px] rounded-xl'>
              <img src={image2} alt='profilepic2'/>
             <p className='text-[#47494E] text-[16px] ml-5'>Collins Gabriel<br/> <span className='text-[#707673] text-[12px]'>34 years Male</span></p>
            </div>

          </div>
          
          
          


        </div>
         
         {/*ACTIVITY SECTION */}
        <div className='bg-white sm:w-[455px] text-[#54565B] text-[16px] mt-[40px] px-4 py-4 rounded-3xl'>

          <p>ACTIVITY</p>

          <div className='flex p-4 text-[#7C827D] text-[12px] sm:text-[14px]'>

            <div className='flex flex-col items-center mr-[10px] sm:mr-[20px]'> 
              <img src={reciept} alt='recp'/>
              <img src={line} alt='lne'className='mt-1'/>

            </div>
            <p>Purchased <br/> <span className='text-[#7C827D] text-[10px] sm:text-[12px]'>300 Bags, Kaduna</span> </p>
            <p className='text-[#76AD94] text-[10px]  sm:text-[13px] mt-2 ml-[30px] sm:ml-[80px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

          </div>

          <div className='flex px-4 text-[#7C827D] text-[12px] sm:text-[14px]'>

            <div className='flex flex-col items-center mr-[8px] sm:mr-[20px]'> 
              <img src={recieved} alt='recp'/>
              <img src={line} alt='lne'className='mt-1'/>

            </div>
            <p>Received at Warehouse <br/> <span className='text-[#7C827D] text-[10px] sm:text-[12px]'>300 Bags, Kaduna</span> </p>
            <p className='text-[#76AD94] text-[9px] sm:text-[13px] mt-2 ml-[10px] sm:ml-[40px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

          </div>

          <div className='flex px-4 text-[#7C827D] mt-3 text-[12px] sm:text-[14px]'>

            <div className='flex flex-col items-center mr-[8px] sm:mr-[20px]'> 
              <img src={reciept} alt='recp'/>
              <img src={line} alt='lne'className='mt-1'/>

            </div>
            <p>Receipt Generated</p>
            <p className='text-[#76AD94] text-[9px] sm:text-[13px] mt-2 ml-[40px] sm:ml-[70px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

          </div>

          <div className='sm:hidden flex px-4 text-[#7C827D] mt-3 text-[12px] sm:text-[14px]'>

            <div className='flex flex-col items-center mr-[9px] sm:mr-[20px]'> 
              <img src={reciept} alt='recp'/>
              <img src={line} alt='lne'className='mt-1'/>

            </div>
            <p>Farmer Balance Paid</p>
            <p className='text-[#76AD94] text-[9px] sm:text-[13px] mt-2 ml-[30px] sm:ml-[40px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

          </div>
          
          <div className='sm:hidden flex p-4 text-[#7C827D] text-[12px] sm:text-[14px]'>

            <div className='flex flex-col items-center mr-[10px] sm:mr-[20px]'> 
              <img src={reciept} alt='recp'/>
              <img src={line} alt='lne'className='mt-1'/>

            </div>
            <p>Product Rebagged <br/> <span className='text-[#7C827D] text-[10px] sm:text-[12px]'>3 Bags into 2 Bags</span> </p>
            <p className='text-[#76AD94] text-[9px] sm:text-[13px] mt-2 ml-[35px] sm:ml-[40px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

          </div>

          <div className='sm:hidden flex p-4 text-[#7C827D] text-[12px] sm:text-[14px]'>

            <div className='flex flex-col items-center mr-[10px] sm:mr-[20px]'> 
              <img src={reciept} alt='recp'/>
              <img src={line} alt='lne'className='mt-1'/>

            </div>
            <p>Product Transferred <br/> <span className='text-[#7C827D] text-[10px] sm:text-[12px]'>To: Ibadan Warehouse</span> </p>
            <p className='text-[#76AD94] text-[9px] sm:text-[13px] mt-2 ml-[30px] sm:ml-[40px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

          </div>

          <div className='sm:hidden flex  justify-evenly p-4 text-[#7C827D] text-[12px] sm:text-[14px]'>

            <div className='flex flex-col items-center mr-[8px] sm:mr-[20px]'> 
              <img src={reciept} alt='recp'/>
              <img src={line} alt='lne'className='mt-1'/>

            </div>
            <p>Product Dispatched <br/> <span className='text-[#7C827D] text-[10px] sm:text-[12px]'>To: Abayomi Kingsley<br/> Address: 14, Kingsway  <br/> Avenue, Idumota Lagos.</span> </p>
            <p className='text-[#76AD94] text-[10px] sm:text-[13px] mt-2 ml-[10px] sm:ml-[40px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

          </div>
          
          

        </div>

      </div>

    </div>
    
  )
}

export default Overview
