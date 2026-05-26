import React from 'react'
import Frame from '@/public/images/serviceFrame.png'
import Link from 'next/link'
import { TfiArrowTopRight } from "react-icons/tfi"
import Translator from '../Translator/Translator' // Make sure the path is correct

const Service = () => {
  const services = [
    { title: { english: "Web Design", bangla: "ওয়েব ডিজাইন" }, img: "/images/wd.png" },
    { title: { english: "Landing Page", bangla: "ল্যান্ডিং পেজ" }, img: "/images/lp.png" },
    { title: { english: "Server", bangla: "সার্ভার" }, img: "/images/server.png" }
  ];

  return (
    <section
      className='bg-center bg-cover bg-no-repeat pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-32 rounded-3xl'
      style={{ backgroundImage: `url(${Frame.src})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {/* Service Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-24 gap-8 lg:gap-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <Translator english="My Services" bangla="আমার সেবাসমূহ" />
          </h2>
          <p className='text-white text-base sm:text-lg md:text-xl max-w-full lg:max-w-md'>
            <Translator 
              english="Providing full-stack web development services, creating modern and responsive websites." 
              bangla="ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট সেবা প্রদান করছি, আধুনিক এবং রেস্পন্সিভ ওয়েবসাইট তৈরি করছি।" 
            />
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6  justify-center lg:justify-between">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex-1 max-w-sm md:max-w-[416px] h-auto rounded-3xl border-2 border-[#686868] backdrop-blur bg-white/20 flex flex-col items-center text-center p-6 sm:pb-8"
            >
              <h3 className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4'>
                <Translator english={service.title.english} bangla={service.title.bangla} />
              </h3>
              <div className="w-full h-[2px] bg-[#999999] mb-4 sm:mb-6"></div>
              
              <img width={337} src={service.img} alt={service.title.english} />

              <Link
                href='/portfolio'
                className='absolute top-[76%] right-[12%] bg-[#1D2939] rounded-full flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 hover:scale-105 transition'
              >
                <TfiArrowTopRight className='text-white text-xl sm:text-2xl' />
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Service