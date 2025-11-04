import SidebarProducts from '@/components/SidebarProducts'
import Link from 'next/link'
import React from 'react'

const getQoutes = () => {
  return (
    <div>
  
        <div className=' left-0 
        2xl:absolute 2xl:top-[80%] 2xl:left-0'>
          <Link href='/get-quotes'>
            <img 
              src="https://www.tolirwa.com/wp-content/uploads/2014/06/get-aquote.png"
              alt="Get a quote"
            />
          </Link>
        </div>


          <div className="about_cvr w-full h-auto p-5 bg-[#EEEE] 
            md:bg-white md:flex md:items-center md:justify-center
            ">
                <div className="about_content w-full flex flex-col items-center justify-center gap-5
                md:flex-row md:w-[80%]  md:items-start
                lg:w-[80%]
                xl:w-[55%]
                ">

                    <div className="about_col_1 w-full shadow-custom_box p-3 rounded bg-white 
                    md:shadow-none lg:w-[70%] lg:pe-8 ">
                        <div className="about_head">
                            <p className='font-Helvetica text-[20px] font-bold text-[#56565A] mb-5
                            md:text-[30px]'>Get A Qoutes</p>
                        </div>
                        <div className="getQuotesFields">

                        <div > 
                        <p>Please submit the details of query, We will contact you soon,</p>


                        <div className='flex flex-col w-full gap-3 mt-4
                         sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Name of the company (required)</label>
                            <input type='text' className='border-[1px] border-black rounded-sm h-[30px]'></input>
                            </div>   

                            <div className='flex flex-col w-full gap-3 mt-4
                            sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Contact Person (required)</label>
                            <input type='text' className='border-[1px] border-black rounded-sm h-[30px]'></input>
                            </div>   

                            <div className='flex flex-col w-full gap-3 mt-4
                            sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Contact Number (required)</label>
                            <input type='text' className='border-[1px] border-black rounded-sm h-[30px]'></input>
                            </div>   

                           <div className='flex flex-col w-full gap-3 mt-4
                            sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Mobile Number (required)</label>
                            <input type='text' className='border-[1px] border-black rounded-sm h-[30px]'></input>
                            </div>   

                            <div className='flex flex-col w-full gap-3 mt-4
                            sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Mobile Number (required)</label>
                            <input type='text' className='border-[1px] border-black rounded-sm h-[30px]'></input>
                            </div>   

                             <div className='flex flex-col w-full gap-3 mt-4
                            sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Email(required)</label>
                            <input type='text' className='border-[1px] border-black rounded-sm h-[30px]'></input>
                            </div>   

                            <div className='flex flex-col w-full gap-3 mt-4
                            sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Subject</label>
                            <input type='text' className='border-[1px] border-black rounded-sm h-[30px]'></input>
                            </div>

                             <div className='flex flex-col w-full gap-3 mt-4
                            sm:w-[50%] md:w-full lg:w-[50%]'>
                            <label className=' text-sm'>Enquiry Details</label>
                            <textarea className="border border-black rounded-sm p-2 h-32 resize-none"></textarea>
                            </div>   


                            <div className=' w-[50%] mt-10 flex items-center justify-center text-white'>
                                <button className='w-full bg-[#ef3713] hover:bg-[#ff2c02e0] p-2 rounded-md font-extrabold'>Submit</button>
                            </div>


                        </div>
                        
                        </div>
                        <div className="about_text text-[14px] text-[#56565A] leading-[24px] font-[Source Sans Pro', sans-serif]">
                            <p className='text-[14px] mt-5 font-source_Sans
                            md:mt-1'> </p>
                        </div>
                    </div>

                <div className="about_Col_2 w-full shadow-custom_box 
                md:flex md:items-center md:justify-center md:shadow-none md:mt-2
                lg:w-[28%] ">
                    <SidebarProducts/>
                </div>
            </div>

          </div>

 

    </div>
  )
}

export default getQoutes
