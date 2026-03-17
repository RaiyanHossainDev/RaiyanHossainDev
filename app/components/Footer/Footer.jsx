import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp, IoSend } from "react-icons/io5";
import Logo from '@/public/images/logo2.png';
import Translator from '../Translator/Translator';

const Footer = () => {
  return (
    <footer className='mt-5 bg-[#272727] rounded-t-[24px]'>
        {/* Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-12 gap-6 md:gap-0">
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left'>
              <Translator english="Let's work together" bangla="চলুন একসাথে কাজ করি" />
            </h2>
            <Link 
              href={'/contact'}
              className='relative text-base sm:text-lg md:text-xl border border-[#FD853A] text-white flex gap-3 items-center rounded-full py-3 px-6 sm:px-8 hover:bg-primary transition'
            >
              <Translator english='Hire me' bangla='হায়ার করুন' /> <span className="text-xl">↗</span>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#475467] my-10"></div>

          {/* Main Footer */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
            {/* Logo & About */}
            <div className="flex-1">
              <Image alt='Logo' src={Logo} className='w-32 sm:w-40 mb-6' />
              <p className='text-sm sm:text-base text-[#FCFCFD] mb-6'>
                <Translator 
                  english="I’m a curious creator who enjoys building meaningful digital experiences. I love exploring new ideas, refining details, and turning concepts into simple, elegant solutions that reflect both purpose and personality." 
                  bangla="আমি একজন কৌতূহলী স্রষ্টা, যিনি অর্থবহ ডিজিটাল অভিজ্ঞতা তৈরি করতে উপভোগ করি। নতুন ধারণা অনুসন্ধান করা, বিবরণ পরিশোধ করা, এবং ধারণাগুলোকে সরল ও সুন্দর সমাধানে রূপান্তর করা যা উদ্দেশ্য এবং ব্যক্তিত্ব উভয়ই প্রতিফলিত করে।" 
                />
              </p>
              <div className='flex gap-4'>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=61578419153609">
                  <FaFacebookSquare className='text-2xl sm:text-3xl text-white' />
                </a>
                <a target='_blank' href="https://www.instagram.com/_not0ryan/">
                  <IoLogoWhatsapp className='text-2xl sm:text-3xl text-white' />
                </a>
                <a target='_blank' href="+8801712871414">
                  <FaInstagramSquare className='text-2xl sm:text-3xl text-white' />
                </a>
              </div>
            </div>

            {/* Navigation & Contact */}
            <div className="flex flex-col sm:flex-row gap-10 flex-1">
              {/* Navigation */}
              <div>
                <p className='text-[#FD853A] text-lg mb-6'>
                  <Translator english='Navigation' bangla='নেভিগেশন' />
                </p>
                <ul className='flex flex-col gap-3'>
                  <li><Link className='text-white text-sm sm:text-base' href={"/"}><Translator english='Home' bangla='হোম' /></Link></li>
                  <li><Link className='text-white text-sm sm:text-base' href={"/contact"}><Translator english='Contact' bangla='যোগাযোগ' /></Link></li>
                  <li><Link className='text-white text-sm sm:text-base' href={"/service"}><Translator english='Service' bangla='সেবা' /></Link></li>
                  <li><Link className='text-white text-sm sm:text-base' href={"/resume"}><Translator english='Resume' bangla='রিজিউম' /></Link></li>
                  <li><Link className='text-white text-sm sm:text-base' href={"/portfolio"}><Translator english='Portfolio' bangla='পোর্টফোলিও' /></Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className='text-[#FD853A] text-lg mb-6'>
                  <Translator english='Contact' bangla='যোগাযোগ' />
                </p>
                <ul className='flex flex-col gap-3'>
                  <li><a className='text-white text-sm sm:text-base' href={"tel:+8801712871414"}>+880 1712-871414</a></li>
                  <li><a className='text-white text-sm sm:text-base' href={"mailto:astralfog2@gmail.com"}>astralfog2@gmail.com</a></li>
                  <li><a className='text-white text-sm sm:text-base' href={"mailto:raiyanrevil@outlook.com"}>raiyanrevil@outlook.com</a></li>
                  <li><a className='text-white text-sm sm:text-base' href={"https://raiyan-hossain-xi.vercel.app/"}>raiyan-hossain-xi.vercel.app/</a></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="w-full h-[2px] bg-[#475467] my-10"></div>

          {/* Bottom */}
          <div className='flex flex-col md:flex-row justify-between items-center pb-6 gap-3 md:gap-0 text-sm sm:text-base'>
            <p className='text-white'>
              <Translator english='Copyright© 2025 Raiyan Hossain. All Rights Reserved.' bangla='কপিরাইট© ২০২৫ রাইয়ান হোসেন। সমস্ত অধিকার সংরক্ষিত।' />
            </p>
            <a href='#' className='text-white hover:underline'>
              <Translator english='User Terms & Conditions | Privacy Policy' bangla='ব্যবহারকারীর শর্তাবলী | গোপনীয়তা নীতি' />
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
