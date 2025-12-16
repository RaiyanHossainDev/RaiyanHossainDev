import React from 'react'
import Frame from '@/public/images/serviceFrame.png'
import Link from 'next/link'
import { TfiArrowTopRight } from "react-icons/tfi";


const Service = () => {
  return (
    <section className='bg-center bg-cover bg-no-repeat pt-[116px] pb-[106px] rounded-[50px]' style={{backgroundImage: `url(${Frame.src})`}}>
        <div className="container">
            <div className="service-col">
                <div className="service-head flex justify-between items-center mb-[96px]">
                    <h2 className="section-title text-white text-[48px]">My <span className='text-primary'>Services</span></h2>
                    <p className='text-[20px] text-white w-[576px]'>Providing full-stack web development services, creating modern and responsive websites.</p>
                </div>
                <div className="service-cards flex justify-between items-center justify-between">
                    <div className="single-card relative border-solid border-[2px] border-[#686868] w-[416px] h-[508px] rounded-[50px] backdrop-blur bg-white/20 [border-image:radial-gradient(circle,white_0%,transparent_90%)_1]">
                        <h3 className='text-white text-[32px] pt-[44px] pb-[23px] font-semibold mx-[37px]'>Web Design</h3>
                        <div className="line w-full h-[2px] bg-[#999999]"></div>
                        <img className='mt-[53px] w-[416px]' src="/images/wd.png" alt="web design" />
                        <Link className='absolute bottom-0 right-[15px] bg-[#1D2939] rounded-full flex justify-center items-center w-[72px] h-[72px]' href={'#'}><TfiArrowTopRight className='text-[30px] text-white' /></Link>
                    </div>
                    <div className="single-card relative border-solid border-[2px] border-[#686868] w-[416px] h-[508px] rounded-[50px] backdrop-blur bg-white/20 [border-image:radial-gradient(circle,white_0%,transparent_90%)_1]">
                        <h3 className='text-white text-[32px] pt-[44px] pb-[23px] font-semibold mx-[37px]'>Landing Page</h3>
                        <div className="line w-full h-[2px] bg-[#999999]"></div>
                        <img className='mt-[53px] w-[416px]' src="/images/lp.png" alt="web design" />
                        <Link className='absolute bottom-0 right-[15px] bg-[#1D2939] rounded-full flex justify-center items-center w-[72px] h-[72px]' href={'#'}><TfiArrowTopRight className='text-[30px] text-white' /></Link>
                    </div>
                    <div className="single-card relative border-solid border-[2px] border-[#686868] w-[416px] h-[508px] rounded-[50px] backdrop-blur bg-white/20 [border-image:radial-gradient(circle,white_0%,transparent_90%)_1]">
                        <h3 className='text-white text-[32px] pt-[44px] pb-[23px] font-semibold mx-[37px]'>Server</h3>
                        <div className="line w-full h-[2px] bg-[#999999]"></div>
                        <img className='mt-[53px] w-[416px]' src="/images/lp.png" alt="web design" />
                        <img className='absolute bottom-0 w-[416px] rounded-2xl' src="/images/server.png" alt="server" />
                        <Link className='absolute bottom-0 right-[15px] bg-[#1D2939] rounded-full flex justify-center items-center w-[72px] h-[72px]' href={'#'}><TfiArrowTopRight className='text-[30px] text-white' /></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service