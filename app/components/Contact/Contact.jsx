import React from 'react'
import ContactForm from '../ContactForm/ContactForm';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="relative bg-primary py-32 sm:py-40 md:py-48 overflow-hidden">

      {/* subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:32px_32px]" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* LEFT PANEL */}
          <div className="text-white flex-1 max-w-full lg:max-w-[520px] space-y-8">
            <span className="text-xs tracking-widest text-white/50">CONTACT</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Let’s build something meaningful
            </h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-base">
              I turn ideas into scalable, accessible web applications. Here’s how to reach me.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-3"><IoMdCall className="opacity-70"/>+880 1712-871414</div>
              <div className="flex items-center gap-3"><MdEmail className="opacity-70"/>astralfog2@gmail.com</div>
              <div className="flex items-center gap-3"><FaLocationDot className="opacity-70"/>Sherpur, Bangladesh</div>
            </div>

            {/* Quick-contact buttons */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href="mailto:astralfog2@gmail.com" className="px-4 sm:px-5 py-2 rounded-lg bg-white text-black font-medium shadow hover:bg-black hover:text-white transition text-sm sm:text-base">Email</a>
              <a href="https://www.linkedin.com/in/raiyan" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 rounded-lg bg-white text-black font-medium shadow hover:bg-black hover:text-white transition text-sm sm:text-base">LinkedIn</a>
              <a href="https://github.com/RaiyanHossainDev" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 rounded-lg bg-white text-black font-medium shadow hover:bg-black hover:text-white transition text-sm sm:text-base">GitHub</a>
            </div>

            {/* Availability / Trust */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">Freelance available</span>
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">Open to full-time</span>
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">Remote friendly</span>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 max-w-full lg:max-w-[520px] w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
