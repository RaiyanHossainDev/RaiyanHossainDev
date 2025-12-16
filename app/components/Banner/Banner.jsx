import Image from 'next/image'
import React from 'react'
import Raiyan from '../../../public/images/raiyan.png'
import Link from 'next/link'
import { RxArrowTopRight } from "react-icons/rx";

const Banner = () => {
  return (
    <section className='pt-[163px] relative'>
        <div className="container">
            <div className="banner-col">
                <div className="banner-title flex flex-col gap-[10px] justify-center items-center">
                    <h2 className='font-abeezee relative text-[20px] text-notBlack px-[25px] py-[10px] rounded-[38.24px] border-[2px] border-notBlack'>
                      Hello!
                      <img className='absolute right-[-26px] top-[-21px]' src="/images/ban1.png" alt="" />
                    </h2>
                    <h1 className='w-[720px] relative text-center leading-24 font-semibold text-[95.57px] text-notBlack'>
                      I’m <span className='text-primary'>Raiyan</span> ,Web Developer
                      <img className='absolute bottom-[-68px] left-[-46px]' src="/images/ban2.png" alt="" />
                    </h1>
                </div>
            </div>
            <div className='banner-col flex justify-between items-center mt-[70px] pb-[310px]'>
              <div className="row-1 w-[380px]">
                <img src="/images/ban3.png" alt="" />
                <h2 className='font-medium text-[#344054] text-[20px] mt-[24px]' >Working with Raiyan was exceptional. His attention to detail, problem-solving ability, and clean, efficient code made the entire project a breeze. He doesn’t just build websites — He craft experiences.</h2>
              </div>
              <div className="row2">
                <img src="/images/ban4.png" alt="" />
                <h2 className='text-notBlack text-[47px] font-bold leading-16'>5 Years</h2>
                <p className='text-notBlack text-[20px]'>Experince</p>
              </div>
            </div>
            <img className='absolute bottom-0 left-[50%] translate-x-[-50%] w-[900px]' src="/images/ban5.png" alt="" />
            <Image className='absolute bottom-0 left-[50%] translate-x-[-50%] w-[417px]' alt='Raiyan Hossain raiyan hossain ryan hossain raiyan hossen' src={Raiyan} />
            <div className='pb-[46px] flex justify-center'>
              <div className='rounded-full p-[10px] pr-[28px] text-white text-[25.69px] border-[2px] border-transparent backdrop-blur bg-white/10 [border-image:radial-gradient(circle,white_0%,transparent_70%)_1] flex items-center justify-center gap-[28px] translate-z-0 z-[10]'>
                <Link className='flex bg-primary rounded-full border-[1px] border-[#D0D5DD] py-[16px] px-[31px] items-center  justify-center gap-[12px]' href={'/'}>Portfolio <RxArrowTopRight /></Link>
                <Link href={'/'}>Hire me</Link>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Banner