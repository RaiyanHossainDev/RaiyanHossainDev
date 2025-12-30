import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";
import Logo from '@/public/images/logo.png';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSend } from "react-icons/io5";




const Footer = () => {
  return (
    <footer className='mt-[97px] bg-[#272727] rounded-t-[24px]'>
        <div className="container">
            <div className="footer-col">
                <div className="footer-head flex justify-between items-center py-[44px]">
                    <h2 className='text-[64px] text-[#FCFCFD]'>Lets Connect there</h2>
                    <Link className='relative text-[25px] border-[1px] border-[#FD853A] text-white after:content-["↗"] flex gap-[10px] items-center after:text-[0px] hover:after:text-[36px] after:transition-all after:duration-[.2s] transition-all duration-[.2s] hover:bg-primary rounded-full hover:border-[#D0D5DD] py-[16px] px-[31px] after:leading-1' href={'/contact'}>Hire me</Link>
                </div>
                <div className="line w-full h-[2px] bg-[#475467] my-[55px]"></div>
               <div className="footer-main flex justify-between">
                    <div>
                        <Image alt='Logo logo' src={Logo} />
                        <p className='py-[34px] text-[20px] text-[#FCFCFD] w-[635px]'>I’m a curious creator who enjoys building meaningful digital experiences. I love exploring new ideas, refining details, and turning concepts into simple, elegant solutions that reflect both purpose and personality.</p>
                        <div className='flex gap-[7px] items-center'>
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=61578419153609"><FaFacebookSquare className='text-[25px] text-white' /></a>
                            <a target='_blank' href="https://www.instagram.com/_not0ryan/"><IoLogoWhatsapp className='text-[25px] text-white' /></a>
                            <a target='_blank' href="+880 1712-871414"><FaInstagramSquare className='text-[25px] text-white' /></a>
                        </div>
                    </div>
                    <div className='flex gap-[33px]'>
                        <div>
                            <p className='text-[#FD853A] text-[20px] mb-[28px]'>Navigation</p>
                            <ul className='flex flex-col gap-[20px]'>
                                <li><Link className='text-[#FCFCFD] text-[16px]' href={"/"}>Home</Link></li>
                                <li><Link className='text-[#FCFCFD] text-[16px]' href={"#"}>About Us</Link></li>
                                <li><Link className='text-[#FCFCFD] text-[16px]' href={"#"}>Service</Link></li>
                                <li><Link className='text-[#FCFCFD] text-[16px]' href={"#"}>Resume</Link></li>
                                <li><Link className='text-[#FCFCFD] text-[16px]' href={"#"}>Project</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-[#FD853A] text-[20px] mb-[28px]'>Contact</p>
                            <ul className='flex flex-col gap-[20px]'>
                                <li><a className='text-[#FCFCFD] text-[16px]' href={"tel:+8801712871414"}>+880 1712-871414</a></li>
                                <li><a className='text-[#FCFCFD] text-[16px]' href={"mailto:astralfog2@gmail.com"}>astralfog2@gmail.com</a></li>
                                <li><a className='text-[#FCFCFD] text-[16px]' href={"mailto:raiyanrevil@outlook.com"}>raiyanrevil@outlook.com</a></li>
                                <li><a className='text-[#FCFCFD] text-[16px]' href={"https://raiyan-hossain-xi.vercel.app/"}>raiyan-hossain-xi.vercel.app/</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-[#FD853A] text-[20px] mb-[28px]'>Get the latest information</p>
                            <div className='w-[304px] h-[51px] rounded-[14px] overflow-hidden flex items-center'>
                                <input className='outline-none border-none w-full h-full bg-white pl-[14px] placeholder:text-black text-[16px]' placeholder='Email Address' type="email" />
                                <button className='cursor-pointer px-[13px] bg-primary h-full'><IoSend className='text-[#FCFCFD] text-xl' /></button>
                            </div>
                        </div>
                    </div>
               </div>
                <div className="line w-full h-[2px] bg-[#475467] my-[40px]"></div>
                <div className='pb-[25px] flex justify-between' >
                    <p className='text-[16px] text-white'>Copyright© 2025 Jayesh. All Rights Reserved.</p>
                    <a href='#' className='text-[16px] text-white hover:underline'>User Terms & Conditions | Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer