'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm';
import Translator from '../Translator/Translator';

const SlideForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  


  return (
    <section>
      {pathname !== '/contact' && (
        <>
          {/* Sliding Contact Form */}
          <div
            className={`
              fixed top-1/2 right-0 
              transform -translate-y-1/2 
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              sm:w-[400px] md:w-[450px] 
              h-[500] sm:h-[620px] 
              bg-primary rounded-l-3xl 
              flex justify-center items-center p-6 sm:p-10 
              transition-transform duration-500 ease-in-out z-50
            `}
          >
            <ContactForm />
          </div>

          {/* Floating CTA Button */}
          <div
            onClick={() =>setIsOpen(!isOpen)}
            className={`
              fixed bottom-6 right-6 
              z-50 overflow-hidden 
              group cursor-pointer w-12 h-12 md:w-16
               md:h-16 rounded-full bg-black 
              text-white flex items-center 
              justify-center  shadow-lg
              hover:w-[150px] sm:hover:w-[170px] 
              transition-all duration-500 text-sm
              md:text-lg
            `}
          >
            <span className={`duration-500 group-hover:opacity-0 transition-all`}>
              ✉️
            </span>
            <span className={`absolute cursor-pointer left-16 sm:left-20 group-hover:left-[50%] group-hover:translate-x-[-50%] transition-all duration-500 opacity-0 group-hover:opacity-100 text-sm sm:text-base whitespace-nowrap`}>
              {isOpen ? <Translator english="Close Form" bangla="ফর্ম বন্ধ করুন" /> : <Translator english="Send Message" bangla="বার্তা পাঠান" />}
            </span>
          </div>
        </>
      )}
    </section>
  );
}

export default SlideForm;
