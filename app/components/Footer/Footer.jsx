import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp, IoSend } from "react-icons/io5";
import Logo from '@/public/images/logo2.png';

const Footer = () => {
  return (
    <footer className='mt-5 bg-[#272727] rounded-t-[24px]'>
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-12 gap-6 md:gap-0">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left'>
            Lets Connect there
          </h2>
          <Link 
            href={'/contact'}
            className='relative text-base sm:text-lg md:text-xl border border-[#FD853A] text-white flex gap-3 items-center rounded-full py-3 px-6 sm:px-8 hover:bg-primary transition'
          >
            Hire me <span className="text-xl">↗</span>
          </Link>
        </div>

        <div className="w-full h-[2px] bg-[#475467] my-10"></div>

        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Logo & About */}
          <div className="flex-1">
            <Image alt='Logo' src={Logo} className='w-32 sm:w-40 mb-6' />
            <p className='text-sm sm:text-base text-[#FCFCFD] mb-6'>
              I’m a curious creator who enjoys building meaningful digital experiences. I love exploring new ideas, refining details, and turning concepts into simple, elegant solutions that reflect both purpose and personality.
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
              <p className='text-[#FD853A] text-lg mb-6'>Navigation</p>
              <ul className='flex flex-col gap-3'>
                <li><Link className='text-white text-sm sm:text-base' href={"/"}>Home</Link></li>
                <li><Link className='text-white text-sm sm:text-base' href={"#"}>About Us</Link></li>
                <li><Link className='text-white text-sm sm:text-base' href={"#"}>Service</Link></li>
                <li><Link className='text-white text-sm sm:text-base' href={"#"}>Resume</Link></li>
                <li><Link className='text-white text-sm sm:text-base' href={"#"}>Project</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className='text-[#FD853A] text-lg mb-6'>Contact</p>
              <ul className='flex flex-col gap-3'>
                <li><a className='text-white text-sm sm:text-base' href={"tel:+8801712871414"}>+880 1712-871414</a></li>
                <li><a className='text-white text-sm sm:text-base' href={"mailto:astralfog2@gmail.com"}>astralfog2@gmail.com</a></li>
                <li><a className='text-white text-sm sm:text-base' href={"mailto:raiyanrevil@outlook.com"}>raiyanrevil@outlook.com</a></li>
                <li><a className='text-white text-sm sm:text-base' href={"https://raiyan-hossain-xi.vercel.app/"}>raiyan-hossain-xi.vercel.app/</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p className='text-[#FD853A] text-lg mb-6'>Get the latest information</p>
              <div className='flex w-full max-w-xs sm:max-w-sm h-12 rounded-lg overflow-hidden'>
                <input 
                  type="email" 
                  placeholder='Email Address' 
                  className='w-full h-full px-4 text-sm sm:text-base outline-none bg-white'
                />
                <button className='bg-primary px-4 flex items-center justify-center'>
                  <IoSend className='text-white text-lg sm:text-xl' />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#475467] my-10"></div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row justify-between items-center pb-6 gap-3 md:gap-0 text-sm sm:text-base'>
          <p className='text-white'>Copyright© 2025 Jayesh. All Rights Reserved.</p>
          <a href='#' className='text-white hover:underline'>User Terms & Conditions | Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
