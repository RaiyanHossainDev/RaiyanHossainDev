import React from 'react'
import Frame from '@/public/images/serviceFrame.png'
import Link from 'next/link'
import { TfiArrowTopRight } from "react-icons/tfi";

const Service = () => {
  return (
    <section
      className='bg-center bg-cover bg-no-repeat pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-32 rounded-3xl'
      style={{ backgroundImage: `url(${Frame.src})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {/* Service Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-24 gap-8 lg:gap-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className='text-primary'>Services</span>
          </h2>
          <p className='text-white text-base sm:text-lg md:text-xl max-w-full lg:max-w-md'>
            Providing full-stack web development services, creating modern and responsive websites.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center lg:justify-between">
          
          {/* Single Card */}
          {[
            { title: "Web Design", img: "/images/wd.png" },
            { title: "Landing Page", img: "/images/lp.png" },
            { title: "Server", img: "/images/server.png" }
          ].map((service, index) => (
            <div
              key={index}
              className="relative flex-1 max-w-sm md:max-w-[416px] h-auto md:h-[508px] rounded-3xl border-2 border-[#686868] backdrop-blur bg-white/20 flex flex-col items-center text-center p-6 sm:p-8"
            >
              <h3 className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4'>
                {service.title}
              </h3>
              <div className="w-full h-[2px] bg-[#999999] mb-4 sm:mb-6"></div>
              
              {index !== 2 ? (
                <img className='w-full h-auto rounded-lg' src={service.img} alt={service.title} />
              ) : (
                <>
                  <img className='w-full h-auto rounded-lg mb-4' src="/images/lp.png" alt="landing preview" />
                  <img className='absolute bottom-0 w-full rounded-2xl' src={service.img} alt="server" />
                </>
              )}

              <Link
                href='#'
                className='absolute bottom-4 right-4 bg-[#1D2939] rounded-full flex justify-center items-center w-16 h-16 sm:w-18 sm:h-18 hover:scale-105 transition'
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
