import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WHM = () => {
  return (
    <section className='bg-[#F2F4F7] py-[103px] mt-[155px]'>
        <div className="container">
            <div className="WHM-row flex justify-between items-center">
                <div className="WHM-col relative">
                    <img src="/images/WHMpic.png" alt="" />
                    <Image alt='raiyan hossain Raiyan Hossain RaiyanHossain' width={300} height={600} className='absolute bottom-[0] rounded-b-[60px] left-[50%] translate-x-[-50%]' src={'/images/raiyan.png'} />
                </div>
                <div className="WHM-col flex flex-col gap-[47px]">
                  <h2 className='text-[#344054] text-[64px]'>Why <span className='text-primary'>Hire me</span>?</h2>
                  <p className='text-[20px] text-[#98A2B3] w-[444px]'>I build web applications that don’t just work—they perform, engage, and grow your business. With expertise in the MERN stack and a passion for clean, efficient code, I’m ready to bring your ideas to life.</p>
                  <div className='flex gap-[98px]'>
                    <div>
                      <h3 className='text-[36px] text-[#1D2939] font-medium'>22+</h3>
                      <p className='text-[20px] text-[#667085]'>Frontend Project Completed</p>
                    </div>
                    <div>
                      <h3 className='text-[36px] text-[#1D2939] font-medium'>4+</h3>
                      <p className='text-[20px] text-[#667085]'>Heavy Backend Project Completed</p>
                    </div>
                  </div>
                  <Link href={'/contact'} className='text-[30px] transition-all duration-150 hover:bg-primary hover:border-primary hover:text-white text-[#151515] py-[20px] px-[40px] rounded-[32px] border-[#151515] w-fit border-[1px]'>Hire me</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WHM