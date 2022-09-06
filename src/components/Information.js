import React, { useEffect, useState } from 'react'
import image1 from '../Assets/image-1.png'
import line from '../Assets/Line.png'
import purchased from '../Assets/purchased.png'
import axios from 'axios'

function Information() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://wb3test.afexnigeria.com/WB3/api/v1/traceability/info/TQC-001-89b940001f')
            .then(res => {
                setList(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    console.log(list)

    return (
        <div className='lg:h-full lg:w-[45%] 2xl:w-[32%] font-muli lg:overflow-y-auto'>

            <div id="TQC" className=" z-10  top-0 flex lg:flex  flex-col px-[20px]">

                <div className="flex-1 flex bg-white lg:w-[100%] lg:mx-auto lg:mt-[25px] flex-col h-[556px] p-[20px] rounded-3xl">

                    {/*TQC */}
                    <div className='mb-4 border-b-2 '>
                        <div className='bg-[#76AD94] text-white text-center py-2 font-semibold text-[16px] max-w-[220px] h-[38px] mb-[30px] rounded-xl'> <p>{list.qr_code}</p></div>
                        <p className='text-[#54565B] text-[14px] mb-4 font-semibold'>Purchased on <span className='font-normal'>{list.purchased_on}</span></p>
                        <p className=' text-[#54565B] text-[14px] mb-4 font-semibold'>Purchased at <span className='font-normal'>{list.purchased_at}</span></p>

                    </div>

                    <div className='mb-4 border-b-2 '>
                        <p className='text-[#7C827D] text-[12px] mb-[25px] '>Commodity</p>
                        <p className='text-[#47494E] text-[14px] mb-4 font-semibold'>{list.commodity}</p>

                    </div>

                    <div className='mt-[30px] mb-4'>

                        <p className='text-[#7C827D] text-[12px]'>Farmer(s)</p>

                        {
                            list?.farmers?.map((item, index) => {
                                return (
                                    <div key={index} className='w-[232px] h-[71px] shadow p-3 flex items-center mt-[20px] rounded-xl'>
                                        <img src={image1} alt='profilepic' />
                                        <p className='text-[#47494E] text-[16px] ml-5 font-semibold'>{item.first_name} {item.last_name}<br /> <span className='text-[#707673] text-[12px]'>{item.age} years &nbsp; | &nbsp;  {item.gender}</span></p>
                                    </div>
                                )
                            })
                        }



                    </div>


                </div>



            </div>




            <div id="Activity" className=" top-0 flex lg:flex flex-shrink-0 flex-col px-[20px] transition-width duration-75">

                <div className="flex-1 flex bg-white lg:w-[100%] lg:mx-auto mt-[25px] mb-5 flex-col  h-[900px] p-[22px] rounded-3xl ">

                    <p className='text-[#54565B] font-semibold text-[16px]'>ACTIVITY</p>

                    {list?.activities?.map((item, index) =>

                        <div key={index} className='flex justify-between text-[#7C827D] 2xl:px-5 mb-2 mt-4 text-[11px] md:text-[14px]'>

                            <div className='flex gap-2 2xl:gap-4 lg:gap-4 md:gap-10'>

                                <div className='flex flex-col items-center'>
                                    <img src={purchased} alt='recp' />
                                    <img src={line} alt='lne' className='h-[60px]'/>

                                </div>
                                <div className='2xl:w-[200px] lg:w-[180px] md:w-[270px] w-[130px]' >
                                    <p className='font-semibold'>{item.action} </p>
                                    <span className='text-[#7C827D] text-[10px] md:text-[10px]'>{item.description}</span> 
                                </div>
                               


                            </div>
                            <p className='text-[#76AD94] text-[10px] 2xl:text-[13px] lg:text-[11px]'> <span>{item.created}</span> </p>

                        </div>
                    )}






                </div>





            </div>


        </div>);
}

export default Information
