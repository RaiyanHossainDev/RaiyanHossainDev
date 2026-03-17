import React from 'react'
import Translator from '../Translator/Translator' // Make sure this path is correct

const WorkExp = () => {
  return (
    <section className='mt-20 md:mt-24 px-4 sm:px-6 lg:px-0'>
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#344054]'>
            <Translator 
              english="My Training & Practical Experience" 
              bangla="আমার প্রশিক্ষণ ও ব্যবহারিক অভিজ্ঞতা" 
            />
          </h2>
        </div>

        {/* Timeline / Experience */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

          {/* Left Column - Institutions & Dates */}
          <div className="flex flex-col gap-8 md:gap-28 flex-1">
            <div>
              <h3 className='text-[#E42625] text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <Translator english="Creative IT Institute" bangla="ক্রিয়েটিভ আইটি ইনস্টিটিউট" />
              </h3>
              <p className='text-[#98A2B3] text-sm sm:text-base mt-1'>
                14th May, 2024 - 29 January, 2025
              </p>
            </div>
            <div>
              <h3 className='text-[#E42625] text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <Translator english="Creative IT Institute" bangla="ক্রিয়েটিভ আইটি ইনস্টিটিউট" />
              </h3>
              <p className='text-[#98A2B3] text-sm sm:text-base mt-1'>
                22nd May, 2025 - 28 November, 2025
              </p>
            </div>
            <div>
              <h3 className='text-[#E42625] text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <Translator english="Creative IT Institute" bangla="ক্রিয়েটিভ আইটি ইনস্টিটিউট" />
              </h3>
              <p className='text-[#98A2B3] text-sm sm:text-base mt-1'>
                6th December, 2025 (Ongoing)
              </p>
            </div>
          </div>

          {/* Center - Timeline Line */}
          <div className="hidden lg:flex flex-col items-center">
            <img src="/images/WorkExpLine.png" alt="Timeline" className="h-full"/>
          </div>

          {/* Right Column - Roles & Descriptions */}
          <div className="flex flex-col gap-8 md:gap-8 flex-1">
            <div>
              <h3 className='text-[#344054] text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <Translator english="Frontend Developer" bangla="ফ্রন্টএন্ড ডেভেলপার" />
              </h3>
              <p className='text-[#98A2B3] text-sm sm:text-base mt-2 md:max-w-md'>
                <Translator 
                  english="Completed Frontend Development at Creative IT Institute, starting with HTML and CSS, then diving into React, Tailwind CSS, Bootstrap, and Redux to build responsive, dynamic, and modern web interfaces." 
                  bangla="ক্রিয়েটিভ আইটি ইনস্টিটিউটে ফ্রন্টএন্ড ডেভেলপমেন্ট সম্পন্ন করেছি, HTML ও CSS দিয়ে শুরু করে, এরপর React, Tailwind CSS, Bootstrap এবং Redux ব্যবহার করে রেস্পন্সিভ, ডায়নামিক এবং আধুনিক ওয়েব ইন্টারফেস তৈরি করেছি।" 
                />
              </p>
            </div>
            <div>
              <h3 className='text-[#344054] text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <Translator english="Backend Developer" bangla="ব্যাকএন্ড ডেভেলপার" />
              </h3>
              <p className='text-[#98A2B3] text-sm sm:text-base mt-2 md:max-w-md'>
                <Translator 
                  english="Completed Backend Development at Creative IT Institute, mastering Node.js, Express.js, MongoDB, and Socket.io, while building full-featured applications with CRUD operations and real-time functionality." 
                  bangla="ক্রিয়েটিভ আইটি ইনস্টিটিউটে ব্যাকএন্ড ডেভেলপমেন্ট সম্পন্ন করেছি, Node.js, Express.js, MongoDB, এবং Socket.io দক্ষভাবে ব্যবহার করে পূর্ণাঙ্গ অ্যাপ্লিকেশন তৈরি করেছি CRUD অপারেশন ও রিয়েল-টাইম ফাংশনালিটি সহ।" 
                />
              </p>
            </div>
            <div>
              <h3 className='text-[#344054] text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <Translator english="Certified Ethical Hacker" bangla="সার্টিফাইড এথিক্যাল হ্যাকার" />
              </h3>
              <p className='text-[#98A2B3] text-sm sm:text-base mt-2 md:max-w-md'>
                <Translator 
                  english="Ongoing Cyber Security course at Creative IT Institute, focused on system security, data protection, and ethical hacking fundamentals." 
                  bangla="ক্রিয়েটিভ আইটি ইনস্টিটিউটে চলমান সাইবার সিকিউরিটি কোর্স, যা সিস্টেম সিকিউরিটি, ডেটা সুরক্ষা এবং এথিক্যাল হ্যাকিং এর ভিত্তি বিষয়গুলিতে মনোযোগ দেয়।" 
                />
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-300"></div>

        {/* Certificates */}
        <div className='flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center'>
          <div className='flex flex-col gap-2 items-center'>
            <p className='font-semibold text-primary text-lg md:text-xl text-center'>
              <Translator english="Certification for Frontend Development" bangla="ফ্রন্টএন্ড ডেভেলপমেন্টের সার্টিফিকেট" />
            </p>
            <a target='_blank' href="/images/certificateFDR.pdf" rel="noreferrer">
              <img className='w-full max-w-xs md:max-w-sm border-2 border-primary rounded-2xl' src="/images/certificateFDR.jpg" alt="Frontend Certificate" />
            </a>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <p className='font-semibold text-primary text-lg md:text-xl text-center'>
              <Translator english="Certification for Backend Development" bangla="ব্যাকএন্ড ডেভেলপমেন্টের সার্টিফিকেট" />
            </p>
            <a target='_blank' href="/images/certificateNode.pdf" rel="noreferrer">
              <img className='w-full max-w-xs md:max-w-sm border-2 border-primary rounded-2xl' src="/images/certificateNode.jpg" alt="Backend Certificate" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WorkExp