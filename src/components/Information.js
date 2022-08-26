import React from 'react'
import image1 from '../Assets/image-1.png'
import image2 from '../Assets/image-2.png'
import reciept from '../Assets/reciept.png'
import line from '../Assets/Line.png'
import recieved from '../Assets/recieved.png'

function Information() {
  return (
    <div class='lg:h-[100vh] lg:h-[1400px] lg:mt-5 lg:ml-[1270px] lg:overflow-y-auto'>

        <div id="TQC" class=" z-10  top-0 flex lg:flex flex-shrink-0 flex-col px-[20px] transition-width duration-75">

          <div class="flex-1 flex bg-white lg:mt-[25px] flex-col lg:w-[470px] h-[556px] p-[20px] rounded-3xl">

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

              <div className='mt-[30px] mb-4'>

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

                    

        </div>

        


        <div id="Activity" class=" top-0 flex lg:flex flex-shrink-0 flex-col px-[20px] transition-width duration-75">

          <div class="flex-1 flex bg-white mt-[25px] mb-5 flex-col lg:w-[470px] h-[900px] p-[20px] rounded-3xl ">

              <p className='text-[#54565B] text-[15px]'>ACTIVITY</p>

              <div className='flex pl-4 text-[#7C827D] mb-2 mt-4 text-[11px] md:text-[14px]'>

                  <div className='flex flex-col items-center mr-2 md:mr-[20px]'> 
                      <img src={reciept} alt='recp'/>
                      <img src={line} alt='lne'className='mt-1'/>

                  </div>
                  <p className='mr-[30px] md:mr-0'>Purchased <br/> <span className='text-[#7C827D] text-[10px] md:text-[12px]'>300 Bags, Kaduna</span> </p>
                  <p className='text-[#76AD94] text-[9px]  md:text-[13px] mt-2  md:ml-[80px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

              </div>

              <div className='flex pl-4 md:px-4 text-[#7C827D]  mb-2 text-[10px] md:text-[14px]'>

                  <div className='flex flex-col items-center mr-2 md:mr-[20px]'> 
                      <img src={recieved} alt='recp'/>
                      <img src={line} alt='lne'className='mt-1'/>

                  </div>
                  <p className='mr-[10px] md:mr-0'>Received at Warehouse <br/> <span className='text-[#7C827D] text-[9px] md:text-[12px]'>300 Bags, Kaduna</span> </p>
                  <p className='text-[#76AD94] text-[9px] md:text-[13px] mt-2  md:ml-[40px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

              </div>

              <div className='flex pl-4 text-[#7C827D] mt-3 text-[11px] md:text-[14px]'>

                  <div className='flex flex-col items-center mr-2 md:mr-[20px]'> 
                      <img src={reciept} alt='recp'/>
                      <img src={line} alt='lne'className='mt-1'/>

                  </div>
                  <p className='mr-[14px] md:mr-0'>Receipt Generated</p>
                  <p className='text-[#76AD94] text-[9px] md:text-[13px] mt-2  md:ml-[70px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

              </div>

              <div className=' flex pl-4 text-[#7C827D] mt-3  mb-2 text-[10px] md:text-[14px]'>

                  <div className='flex flex-col items-center mr-2 md:mr-[20px]'> 
                      <img src={reciept} alt='recp'/>
                      <img src={line} alt='lne'className='mt-1'/>

                  </div>
                  <p className='mr-[10px] md:mr-0'>Farmer Balance Paid</p>
                  <p className='text-[#76AD94] text-[9px] md:text-[13px] mt-2  md:ml-[60px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

              </div>

              <div className='flex pl-4 text-[#7C827D]  mb-2 text-[11px] md:text-[14px]'>

                  <div className='flex flex-col items-center mr-2 md:mr-[20px]'> 
                      <img src={reciept} alt='recp'/>
                      <img src={line} alt='lne'className='mt-1'/>

                  </div>
                  <p className='mr-[10px] md:mr-0'>Product Rebagged <br/> <span className='text-[#7C827D] text-[10px] md:text-[12px]'>3 Bags into 2 Bags</span> </p>
                  <p className='text-[#76AD94] text-[9px] md:text-[13px] mt-2  md:ml-[70px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

              </div>

              <div className=' flex pl-4 text-[#7C827D]  mb-2 text-[11px] md:text-[14px]'>

                  <div className='flex flex-col items-center mr-2 md:mr-[20px]'> 
                      <img src={reciept} alt='recp'/>
                      <img src={line} alt='lne'className='mt-1'/>

                  </div>
                  <p className='mr-[10px] md:mr-0'>Product Transferred <br/> <span className='text-[#7C827D] text-[10px] sm:text-[12px]'>To: Ibadan Warehouse</span> </p>
                  <p className='text-[#76AD94] text-[9px] md:text-[13px] mt-2  md:ml-[60px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

              </div>

              <div className=' flex  pl-4 text-[#7C827D] text-[11px] md:text-[14px]'>

                  <div className='flex flex-col items-center mr-2  md:mr-[20px]'> 
                        <img src={reciept} alt='recp'/>
                        <img src={line} alt='lne'className='mt-1'/>

                  </div>
                  <p>Product Dispatched <br/> <span className='text-[#7C827D] text-[10px] md:text-[12px]'>To: Abayomi Kingsley<br/> Address: 14, Kingsway  <br/> Avenue, Idumota Lagos.</span> </p>
                  <p className='text-[#76AD94] text-[10px] md:text-[13px] mt-2  md:ml-[60px]'> <span>Jun 22, 2022, 04:00 PM</span> </p>

              </div>
                          
  </div>

              
                
            

  </div>


    </div> );
}

export default Information
