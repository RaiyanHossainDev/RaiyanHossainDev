import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Raiyan from '@/public/images/raiyan.png'

const WHM = () => {
  return (
    <>
      {/* Why Hire Me Section */}
      <section className='bg-[#F2F4F7] py-24 md:py-32'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column - Images */}
            <div className="relative flex-1 w-full">
              <img src="/images/WHMpic.png" alt="Web Development" className="w-full rounded-xl md:rounded-[40px]" />
              <Image 
                alt='Raiyan Hossain'
                src={Raiyan} 
                width={300} 
                height={600} 
                className='absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-b-[60px] w-48 sm:w-60 md:w-72'
              />
            </div>

            {/* Right Column - Text & Stats */}
            <div className="flex-1 flex flex-col gap-8">
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054]'>
                Why <span className='text-primary'>Hire me</span>?
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-[#98A2B3]'>
                I build web applications that don’t just work—they perform, engage, and grow your business. 
                With expertise in the MERN stack and a passion for clean, efficient code, I’m ready to bring your ideas to life.
              </p>

              {/* Stats */}
              <div className='flex flex-col sm:flex-row gap-6 sm:gap-12'>
                <div className='text-center sm:text-left'>
                  <h3 className='text-3xl sm:text-4xl font-semibold text-[#1D2939]'>22+</h3>
                  <p className='text-base sm:text-lg text-[#667085]'>Frontend Projects Completed</p>
                </div>
                <div className='text-center sm:text-left'>
                  <h3 className='text-3xl sm:text-4xl font-semibold text-[#1D2939]'>4+</h3>
                  <p className='text-base sm:text-lg text-[#667085]'>Heavy Backend Projects Completed</p>
                </div>
              </div>

              {/* Hire Me Button */}
              <Link 
                href={'/contact'} 
                className='inline-block mt-4 text-lg sm:text-xl transition-all duration-150 
                           hover:bg-primary hover:border-primary hover:text-white 
                           text-[#151515] py-4 px-8 rounded-[32px] border-[1px] border-[#151515] w-fit'
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Proof Section */}
      <section className='mt-20'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          <div className="rounded-3xl bg-[#272727] px-6 sm:px-12 py-12 md:py-16 text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Don’t take my word for it
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Explore the code, run the apps, and see how everything is built.
            </p>
            <a
              href="https://github.com/raiyanhossaindev"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2
                         rounded-full bg-[#FD853A]
                         px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white
                         transition hover:scale-105"
            >
              Visit My GitHub →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default WHM
