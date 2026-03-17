"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Translator from '../Translator/Translator'; // Make sure this import exists

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed w-full top-[40px] z-[999]'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="bg-notBlack rounded-[50px] p-4 md:py-2 md:px-7 relative flex items-center justify-between">
          
          {/* Logo */}
          <div className="ml-[20px]">
            <Link href={'/'} className='max-w-[180px] md:max-w-[135px] lg:max-w-[180px]'>
              <Image src="/images/logo2.png" alt="logo" width={180} height={60} />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex md:gap-[0] lg:gap-4">
            <NavLink children={<Translator english="Home" bangla="হোম" />} href={"/"} />
            <NavLink children={<Translator english="Service" bangla="সার্ভিস" />} href={"/service"} />
            <NavLink children={<Translator english="Resume" bangla="রিজিউম" />} href={"/resume"} />
            <NavLink children={<Translator english="Portfolio" bangla="পোর্টফোলিও" />} href={"/portfolio"} />
            <NavLink children={<Translator english="Contact" bangla="যোগাযোগ" />} href={"/contact"} />
          </div>

          {/* Language Switcher Button */}
          <LanguageSwitcher />  

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX className="text-white w-6 h-6" /> : <HiMenu className="text-white w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`absolute left-0 w-full ${menuOpen ? 'top-full' : 'top-[-600px]'} bg-notBlack rounded-2xl mt-2 p-4 flex flex-col gap-4 md:hidden transition-all duration-300`}>
            <NavLink children={<Translator english="Home" bangla="হোম" />} href={"/"} />
            <NavLink children={<Translator english="Service" bangla="সার্ভিস" />} href={"/service"} />
            <NavLink children={<Translator english="Resume" bangla="রিজিউম" />} href={"/resume"} />
            <NavLink children={<Translator english="Portfolio" bangla="পোর্টফোলিও" />} href={"/portfolio"} />
            <NavLink children={<Translator english="Contact" bangla="যোগাযোগ" />} href={"/contact"} />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;