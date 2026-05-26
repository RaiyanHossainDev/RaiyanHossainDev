"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import Image from 'next/image';
import { HiX } from 'react-icons/hi';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Translator from '../Translator/Translator'; // Make sure this import exists
import { CgMenuGridO } from 'react-icons/cg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-[20px] sm:top-[30px] lg:top-[40px] z-[999]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">

        <div className="bg-notBlack rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] 
          px-4 py-3 sm:px-6 lg:px-7 lg:py-2 
          relative flex items-center justify-between">

          {/* Logo */}
          <div className="ml-0 sm:ml-[10px] lg:ml-[20px]">
            <Link
              href={"/"}
              className="block max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]"
            >
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={180}
                height={60}
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center">
            <NavLink
              children={<Translator english="Home" bangla="হোম" />}
              href={"/"}
            />

            <NavLink
              children={<Translator english="Service" bangla="সার্ভিস" />}
              href={"/service"}
            />

            <NavLink
              children={<Translator english="Resume" bangla="রিজিউম" />}
              href={"/resume"}
            />

            <NavLink
              children={<Translator english="Portfolio" bangla="পোর্টফোলিও" />}
              href={"/portfolio"}
            />

            <NavLink
              children={<Translator english="Contact" bangla="যোগাযোগ" />}
              href={"/contact"}
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white"
              >
                {menuOpen ? (
                  <HiX className="w-7 h-7" />
                ) : (
                  <CgMenuGridO className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute left-0 w-full bg-notBlack rounded-[20px] 
            mt-2 p-5 flex flex-col gap-4 md:hidden shadow-xl
            transition-all duration-300 ease-in-out

            ${
              menuOpen
                ? "top-full opacity-100 visible"
                : "top-[-600px] opacity-0 invisible"
            }`}
          >

            {/* Mobile Language Switcher */}
            <div className="sm:hidden mb-2">
              <LanguageSwitcher />
            </div>

            <NavLink
              children={<Translator english="Home" bangla="হোম" />}
              href={"/"}
            />

            <NavLink
              children={<Translator english="Service" bangla="সার্ভিস" />}
              href={"/service"}
            />

            <NavLink
              children={<Translator english="Resume" bangla="রিজিউম" />}
              href={"/resume"}
            />

            <NavLink
              children={<Translator english="Portfolio" bangla="পোর্টফোলিও" />}
              href={"/portfolio"}
            />

            <NavLink
              children={<Translator english="Contact" bangla="যোগাযোগ" />}
              href={"/contact"}
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;