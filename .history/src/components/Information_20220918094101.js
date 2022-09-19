import React, { useEffect, useState } from 'react'
import image1 from '../Assets/image-2.png'
import purchased from '../Assets/purchase.svg'
import axios from 'axios'
import { useLocation } from 'react-router-dom'



function Information() {

    const [list, setList] = useState([])
    const search = useLocation().search;
    const qr_code = new URLSearchParams(search).get('qr_code')
    
    useEffect(() => {
        axios.get(`https://wb3test.afexnigeria.com/WB3/api/v1/traceability/info/${qr_code}`)
            .then(res => {
                setList(res.data.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [qr_code])


    return (
        <div className='lg:h-full  lg:w-[30%] font-muli lg:overflow-y-auto'>

            <div id="TQC" className=" z-10  top-0 flex lg:flex  flex-col px-[20px]">

                <div className="flex-1 flex bg-white lg:w-[100%] lg:mx-auto lg:mt-[25px] flex-col h-[556px] p-[20px] rounded-3xl">

                    {/*TQC */}
                    <div className='mb-4 border-b-2 border-b-gray-100 '>
                        <div className='bg-[#76AD94] text-white text-center py-2 font-semibold text-[16px] max-w-[220px] h-[38px] mb-[30px] rounded-xl'> <p>{list.qr_code}</p></div>
                        <p className='text-[#54565B] text-[14px] mb-4 font-semibold'>Purchased on <span className='font-normal'>{list.purchased_on}</span></p>
                        <p className=' text-[#54565B] text-[14px] mb-4 font-semibold'>Purchased at <span className='font-normal'>{list.purchased_at}</span></p>

                    </div>

                    <div className='mb-4 border-b-2  border-b-gray-100 '>
                        <p className='text-[#7C827D] text-[12px] mb-[25px] '>Commodity</p>
                        <p className='text-[#47494E] text-[14px] mb-4 font-medium '>{list.commodity}</p>

                    </div>

                    <div className='mt-[30px] mb-4'>

                        <p className='text-[#7C827D] text-[12px]'>Farmer(s)</p>

                        {
                            list?.farmers?.map((item, index) => {
                                return (
                                    <div key={index} className='w-[232px] h-[71px] shadow p-3 flex items-center mt-[20px] rounded-xl'>
                                        <img src={image1} alt='profilepic' />
                                        <p className='text-[#47494E] text-[16px] ml-5  font-medium '>{item.first_name} {item.last_name}<br /> <span className='text-[#707673] text-[12px]'>{item.age} years &nbsp; | &nbsp;  {item.gender}</span></p>
                                    </div>
                                )
                            })
                        }



                    </div>


                </div>



            </div>




            <div id="Activity" className=" top-0 flex lg:flex flex-shrink-0 flex-col px-[20px]">

                <div className="flex-1 flex bg-white lg:w-[100%] lg:mx-auto mt-[25px] mb-5 flex-col  h-[900px] p-[22px] rounded-3xl ">

                    <p className='text-[#54565B] mb-5 font-semibold text-[16px]'>Activity</p>

                    {list?.activities?.map((item, index) =>

                        <div key={index} className='flex justify-between stroke-amber-50 text-[#7C827D] 2xl:px-5 lg:px-0 text-[11px]'>

                            <div className='flex gap-2 xl:gap-2 md:gap-8'>

                                <div className='flex flex-col items-center'>
                                    <img src={purchased} alt='recp' />
                                    <div className='border border-dotted border-[#7C827D] min-h-[100px] max-h-[120px] w-[1px]'></div>

                                </div>
                                <div className='flex flex-col lg:w-[150px] md:w-[270px] w-[130px]' >
                                    <p className='font-semibold mt-2 lg:text-[13px]'>{item.action} </p>
                                    <span className='text-[#7C827D] text-[9px] mt-2 lg:text-[11px]'>{item.description}</span>
                                </div>



                            </div>
                            <p className='text-[#76AD94] text-[9px] mt-2 xl:text-[10px]'> <span>{item.created}</span> </p>

                        </div>
                    )}






                </div>





            </div>


        </div>);
}

export default Information
