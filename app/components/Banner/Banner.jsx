import Image from 'next/image'
import React from 'react'
import Raiyan from '../../../public/images/raiyan.png'
import Link from 'next/link'
import Translator from '../Translator/Translator';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const Banner = () => {
  return (
    <section className="pt-[140px] lg:pt-[163px] relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Top Content */}
        <div className="banner-col">
          <div className="banner-title flex flex-col gap-[10px] justify-center items-center">

            {/* Hello Badge */}
            <h2 className="font-abeezee relative text-[16px] sm:text-[18px] lg:text-[20px] text-notBlack px-[20px] sm:px-[25px] py-[8px] sm:py-[10px] rounded-[38px] border-[2px] border-notBlack">
              <Translator english="Hello!" bangla="হ্যালো !" />

              <img
                className="absolute right-[-18px] sm:right-[-26px] top-[-14px] sm:top-[-21px] w-[35px] sm:w-auto"
                src="/images/ban1.png"
                alt=""
              />
            </h2>

            {/* Main Heading */}
            <h1 className="relative text-center font-semibold text-notBlack leading-tight 
              text-[38px] sm:text-[52px] md:text-[62px] lg:text-[70px]
              w-full max-w-[720px] px-2">

              <Translator english="I’m " bangla="আমি " />

              <span className="text-primary">
                <Translator english="Raiyan" bangla="রাইয়ান" />
              </span>

              <Translator
                english=", Web Developer"
                bangla=", ওয়েব ডেভেলপার"
              />

              <img
                className="absolute hidden md:block bottom-[-55px] lg:bottom-[-68px] left-[-20px] lg:left-[-46px] w-[70px] lg:w-auto"
                src="/images/ban2.png"
                alt=""
              />
            </h1>
          </div>
        </div>

        {/* Middle Content */}
        <div className="banner-col mb-[65px] flex flex-col lg:flex-row justify-between items-center gap-12 mt-[50px] lg:mt-[70px] pb-[120px] lg:pb-[200px]">

          {/* Testimonial */}
          <div className="row-1 w-full max-w-[380px] text-center lg:text-left">
            <img
              className="mx-auto lg:mx-0"
              src="/images/ban3.png"
              alt=""
            />

            <h2 className="font-medium text-[#344054] text-[16px] sm:text-[18px] lg:text-[20px] mt-[24px] leading-relaxed">
              <Translator
                english="Working with Raiyan was exceptional. His attention to detail, problem-solving ability, and clean, efficient code made the entire project a breeze. He doesn’t just build websites — He craft experiences."
                bangla="রাইয়ানের সঙ্গে কাজ করা অসাধারণ ছিল। তার বিশদ মনোযোগ, সমস্যা সমাধানের ক্ষমতা এবং পরিচ্ছন্ন, কার্যকর কোড পুরো প্রজেক্টকে সহজ করেছে। তিনি শুধু ওয়েবসাইট তৈরি করেন না — তিনি অভিজ্ঞতা তৈরি করেন।"
              />
            </h2>
          </div>

          {/* Experience */}
          <div className="row2 text-center lg:text-right">
            <img
              className="mx-auto lg:ml-auto"
              src="/images/ban4.png"
              alt=""
            />

            <h2 className="text-notBlack text-[34px] sm:text-[40px] lg:text-[47px] font-bold leading-tight mt-4">
              <Translator english="5 Years" bangla="৫ বছর" />
            </h2>

            <p className="text-notBlack text-[18px] sm:text-[20px]">
              <Translator english="Experience" bangla="অভিজ্ঞতা" />
            </p>
          </div>
        </div>

        {/* Background Image */}
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[500px] sm:w-[650px] lg:w-[800px]"
          src="/images/ban5.png"
          alt=""
        />

        {/* Main Person Image */}
        <Image
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[220px] sm:w-[280px] lg:w-[360px]"
          alt="Raiyan Hossain"
          src={Raiyan}
        />

        {/* Buttons */}
        <div className="pb-[40px] lg:pb-[46px] flex justify-center relative z-10">
          <div className="rounded-full p-[8px] sm:p-[10px] sm:pr-[20px] lg:pr-[28px]
            text-white text-[16px] sm:text-[20px] lg:text-[25px]
            border-[2px] border-transparent backdrop-blur bg-white/10
            [border-image:radial-gradient(circle,white_0%,transparent_70%)_1]
            flex items-center justify-center gap-[14px] sm:gap-[20px] lg:gap-[28px]">

            {/* Portfolio Button */}
            <Link
              className='relative flex gap-[10px] items-center group
              transition-all duration-[.2s] 
              hover:bg-primary rounded-full border-[1px] border-transparent 
              hover:border-[#D0D5DD] py-[12px] sm:py-[14px] lg:py-[16px] 
              px-[24px] lg:px-[31px] font-semibold'
              href={"/protfollio"}
            >
              <Translator english="Portfolio" bangla="পোর্টফোলিও" />
              <HiArrowTopRightOnSquare className="group-hover:opacity-100 group-hover:text-[12px] md:group-hover:text-[28px] lg:group-hover:text-[36px] text-[0px] opacity-0 transition-all duration-200" />
            </Link>

            {/* Hire Me Button */}
            <Link
              className='relative flex gap-[10px] items-center group
              transition-all duration-[.2s] 
              hover:bg-primary rounded-full border-[1px] border-transparent 
              hover:border-[#D0D5DD] py-[12px] sm:py-[14px] lg:py-[16px] 
              px-[24px] lg:px-[31px] font-semibold'
              href={"/contact"}
            >
              <Translator english="Hire me" bangla="হায়ার করুন" />
              <HiArrowTopRightOnSquare className="group-hover:opacity-100 group-hover:text-[12px] md:group-hover:text-[28px] lg:group-hover:text-[36px] text-[0px] opacity-0 transition-all duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner