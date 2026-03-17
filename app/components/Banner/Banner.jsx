import Image from 'next/image'
import React from 'react'
import Raiyan from '../../../public/images/raiyan.png'
import Link from 'next/link'
import Translator from '../Translator/Translator';

const Banner = () => {
  return (
    <section className='pt-[163px] relative'>
      <div className="container">
        <div className="banner-col">
          <div className="banner-title flex flex-col gap-[10px] justify-center items-center">
            <h2 className='font-abeezee relative text-[20px] text-notBlack px-[25px] py-[10px] rounded-[38.24px] border-[2px] border-notBlack'>
              <Translator english='Hello!' bangla='হ্যালো !' />
              <img className='absolute right-[-26px] top-[-21px]' src="/images/ban1.png" alt="" />
            </h2>
            <h1 className='w-[720px] relative text-center leading-20 font-semibold text-[70px] text-notBlack'>
              <Translator english="I’m " bangla="আমি " />
              <span className='text-primary'><Translator english="Raiyan" bangla="রাইয়ান" /></span>
              <Translator english=", Web Developer" bangla=", ওয়েব ডেভেলপার" />
              <img className='absolute bottom-[-68px] left-[-46px]' src="/images/ban2.png" alt="" />
            </h1>
          </div>
        </div>
        <div className='banner-col flex justify-between items-center mt-[70px] pb-[200px]'>
          <div className="row-1 w-[380px]">
            <img src="/images/ban3.png" alt="" />
            <h2 className='font-medium text-[#344054] text-[20px] mt-[24px]'>
              <Translator 
                english="Working with Raiyan was exceptional. His attention to detail, problem-solving ability, and clean, efficient code made the entire project a breeze. He doesn’t just build websites — He craft experiences." 
                bangla="রাইয়ানের সঙ্গে কাজ করা অসাধারণ ছিল। তার বিশদ মনোযোগ, সমস্যা সমাধানের ক্ষমতা এবং পরিচ্ছন্ন, কার্যকর কোড পুরো প্রজেক্টকে সহজ করেছে। তিনি শুধু ওয়েবসাইট তৈরি করেন না — তিনি অভিজ্ঞতা তৈরি করেন।" 
              />
            </h2>
          </div>
          <div className="row2">
            <img src="/images/ban4.png" alt="" />
            <h2 className='text-notBlack text-[47px] font-bold leading-16'>
              <Translator english='5 Years' bangla='৫ বছর' />
            </h2>
            <p className='text-notBlack text-[20px]'>
              <Translator english='Experience' bangla='অভিজ্ঞতা' />
            </p>
          </div>
        </div>

        <img className='absolute bottom-0 left-[50%] translate-x-[-50%] w-[800px]' src="/images/ban5.png" alt="" />
        <Image className='absolute bottom-0 left-[50%] translate-x-[-50%] w-[360px]' alt='Raiyan Hossain' src={Raiyan} />

        <div className='pb-[46px] flex justify-center'>
          <div className='rounded-full p-[10px] pr-[28px] text-white text-[25.69px] border-[2px] border-transparent backdrop-blur bg-white/10 [border-image:radial-gradient(circle,white_0%,transparent_70%)_1] flex items-center justify-center gap-[28px] translate-z-0 z-[10]'>
            <Link className='relative after:content-["↗"] flex gap-[10px] items-center after:text-[0px] hover:after:text-[36px] after:transition-all after:duration-[.2s] transition-all duration-[.2s] hover:bg-primary rounded-full border-[1px] border-transparent hover:border-[#D0D5DD] py-[16px] px-[31px] after:leading-1' href={'/protfollio'}>
              <Translator english='Portfolio' bangla='পোর্টফোলিও' />
            </Link>
            <Link className='relative after:content-["↗"] flex gap-[10px] items-center after:text-[0px] hover:after:text-[36px] after:transition-all after:duration-[.2s] transition-all duration-[.2s] hover:bg-primary rounded-full border-[1px] border-transparent hover:border-[#D0D5DD] py-[16px] px-[31px] after:leading-1' href={'/contact'}>
              <Translator english='Hire me' bangla='হায়ার করুন' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner