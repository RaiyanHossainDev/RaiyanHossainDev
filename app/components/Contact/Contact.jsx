import React from 'react'
import ContactForm from '../ContactForm/ContactForm';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import Translator from '../Translator/Translator';

const Contact = () => {
  return (
    <section className="relative bg-primary py-32 sm:py-40 md:py-48 overflow-hidden">

      {/* subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:32px_32px]" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* LEFT PANEL */}
          <div className="text-white flex-1 max-w-full lg:max-w-[520px] space-y-8">
            <span className="text-xs tracking-widest text-white/50">
              <Translator english="CONTACT" bangla="যোগাযোগ" />
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              <Translator 
                english="Let’s build something meaningful" 
                bangla="চলুন কিছু অর্থপূর্ণ তৈরি করি" 
              />
            </h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-base">
              <Translator 
                english="I turn ideas into scalable, accessible web applications. Here’s how to reach me." 
                bangla="আমি ধারণাগুলোকে স্কেলযোগ্য ও অ্যাক্সেসযোগ্য ওয়েব অ্যাপ্লিকেশনে পরিণত করি। এখানে আমাকে কীভাবে যোগাযোগ করবেন।" 
              />
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <IoMdCall className="opacity-70"/>
                <span>+880 1712-871414</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="opacity-70"/>
                <span>astralfog2@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationDot className="opacity-70"/>
                <span>
                  <Translator english="Sherpur, Bangladesh" bangla="শেরপুর, বাংলাদেশ" />
                </span>
              </div>
            </div>

            {/* Quick-contact buttons */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href="mailto:astralfog2@gmail.com" className="px-4 sm:px-5 py-2 rounded-lg bg-white text-black font-medium shadow hover:bg-black hover:text-white transition text-sm sm:text-base">
                <Translator english="Email" bangla="ইমেইল" />
              </a>
              <a href="https://www.linkedin.com/in/raiyan" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 rounded-lg bg-white text-black font-medium shadow hover:bg-black hover:text-white transition text-sm sm:text-base">
                <Translator english="LinkedIn" bangla="লিঙ্কডইন" />
              </a>
              <a href="https://github.com/RaiyanHossainDev" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-5 py-2 rounded-lg bg-white text-black font-medium shadow hover:bg-black hover:text-white transition text-sm sm:text-base">
                <Translator english="GitHub" bangla="গিটহাব" />
              </a>
            </div>

            {/* Availability / Trust */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">
                <Translator english="Freelance available" bangla="ফ্রিল্যান্স উপলব্ধ" />
              </span>
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">
                <Translator english="Open to full-time" bangla="ফুল-টাইম খোলা" />
              </span>
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">
                <Translator english="Remote friendly" bangla="রিমোট-ফ্রেন্ডলি" />
              </span>
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