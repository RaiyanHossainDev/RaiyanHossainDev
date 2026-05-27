import { CourseCard, SkillBlock } from '@/app/components/ResumeHelper/ResumeHelper'
import React from 'react'
import Translator from '@/app/components/Translator/Translator';

export const metadata = {
  title: "Resume | Raiyan H. – Full-Stack Developer",
  description: "View the professional resume of Raiyan H., showcasing education, skills, projects, and work experience as a full-stack developer.",
}

const page = () => {
  return (
    <>
    <section className="min-h-screen bg-[#272727] text-white px-4 pt-40 sm:px-6 lg:px-0 py-16 md:pt-40 ">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12 md:mb-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <Translator english="Resume" bangla="রেজুমে" />
              <span className="text-[#FD853A]">.</span>
            </h1>
            <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-base">
              <Translator english="Frontend / Junior Full-Stack Developer" bangla="ফ্রন্টএন্ড / জুনিয়র ফুল-স্ট্যাক ডেভেলপার" />
            </p>
          </div>

          {/* Download Button */}
          <a
            href="/images/RaiyanHossainResume.png"
            download
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#FD853A] px-6 sm:px-7 py-2 sm:py-3 font-semibold text-[#272727] text-sm sm:text-base transition hover:scale-105"
          >
            <span className="relative z-10">
              <Translator english="Download Resume" bangla="রেজুমে ডাউনলোড করুন" />
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
          </a>
        </div>

        {/* Main Resume Card */}
        <div className="rounded-3xl border border-white/10 bg-[#1f1f1f] p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14">

            {/* Left Column */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">

              {/* Skills */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">
                  <Translator english="Skills" bangla="দক্ষতা" />
                </h2>
                <SkillBlock
                  title={<Translator english="Frontend" bangla="ফ্রন্টএন্ড" />}
                  items={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux", "Next.js (Frontend)"]}
                />
                <SkillBlock
                  title={<Translator english="Backend" bangla="ব্যাকএন্ড" />}
                  items={["Node.js", "Express.js", "MongoDB", "Firebase", "Socket.IO"]}
                />
                <SkillBlock
                  title={<Translator english="Tools" bangla="টুলস" />}
                  items={["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Cloudinary", "GraphQL"]}
                />
              </div>

              {/* Courses */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">
                  <Translator english="Courses & Certifications" bangla="কোর্স এবং সার্টিফিকেশন" />
                </h2>
                <div className="space-y-4 sm:space-y-6 mt-3">
                  <CourseCard
                    title={<Translator english="Frontend Development" bangla="ফ্রন্টএন্ড ডেভেলপমেন্ট" />}
                    desc={<Translator english="React, Tailwind CSS, Redux, Firebase" bangla="React, Tailwind CSS, Redux, Firebase" />}
                  />
                  <CourseCard
                    title={<Translator english="Backend Development" bangla="ব্যাকএন্ড ডেভেলপমেন্ট" />}
                    desc={<Translator english="Node.js, Express.js, MongoDB, Socket.IO, Next.js (Frontend)" bangla="Node.js, Express.js, MongoDB, Socket.IO, Next.js (ফ্রন্টএন্ড)" />}
                  />
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">

              {/* About Me */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">
                  <Translator english="About Me" bangla="আমার সম্পর্কে" />
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-base">
                  <Translator
                    english="My name is Raiyan Hossain. I am a passionate web developer from Bangladesh. I have completed frontend and backend development courses and enjoy building modern web applications using React, Next.js, Node.js, and MongoDB. I am also continuing my formal studies."
                    bangla="আমার নাম রায়ান হোসাইন। আমি বাংলাদেশের একজন উৎসাহী ওয়েব ডেভেলপার। আমি ফ্রন্টএন্ড এবং ব্যাকএন্ড ডেভেলপমেন্ট কোর্স শেষ করেছি এবং React, Next.js, Node.js এবং MongoDB ব্যবহার করে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করতে ভালোবাসি। আমি আমার আনুষ্ঠানিক পড়াশোনাও চালিয়ে যাচ্ছি।"
                  />
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">
                  <Translator english="Education" bangla="শিক্ষা" />
                </h2>
                <div className="rounded-xl border border-white/10 bg-[#272727]/50 p-4 sm:p-5">
                  <p className="font-semibold text-sm sm:text-base">
                    <Translator english="Ongoing Studies" bangla="চলমান পড়াশোনা" />
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    <Translator english="Bangladesh" bangla="বাংলাদেশ" />
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
    {/* Contact Section */}
        <div className="my-32 text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272727]">
              <Translator english="Want to build something together?" bangla="একসাথে কিছু তৈরি করতে চান?" />
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              <Translator english="I’m open to junior roles, and freelance projects."
                         bangla="আমি ইন্টার্নশিপ, জুনিয়র রোল এবং ফ্রিল্যান্স প্রকল্পে খোলা আছি।" />
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full border-2 border-[#FD853A] px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#FD853A] transition hover:bg-[#FD853A] hover:text-white"
            >
              <Translator english="Contact Me" bangla="আমাকে যোগাযোগ করুন" />
            </a>
        </div>
    </>
  )
}

export default page;