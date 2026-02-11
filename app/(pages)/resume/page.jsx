import { CourseCard, SkillBlock } from '@/app/components/ResumeHelper/ResumeHelper'
import React from 'react'

const revalidate = 43200 // Revalidate every 12 hours (43200 seconds)

const page = () => {
  return (
    <section className="min-h-screen bg-[#272727] text-white px-4 sm:px-6 md:px-12 py-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12 md:mb-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Resume<span className="text-[#FD853A]">.</span>
            </h1>
            <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-base">
              Frontend / Junior Full-Stack Developer
            </p>
          </div>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#FD853A] px-6 sm:px-7 py-2 sm:py-3 font-semibold text-[#272727] text-sm sm:text-base transition hover:scale-105"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
          </a>
        </div>

        {/* Main Resume Card */}
        <div className="rounded-3xl border border-white/10 bg-[#1f1f1f] p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

            {/* Left Column */}
            <div className="space-y-10 md:space-y-12">

              {/* Skills */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">Skills</h2>
                <SkillBlock
                  title="Frontend"
                  items={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux", "Next.js (Frontend)"]}
                />
                <SkillBlock
                  title="Backend"
                  items={["Node.js", "Express.js", "MongoDB", "Firebase", "Socket.IO"]}
                />
                <SkillBlock
                  title="Tools"
                  items={["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Cloudinary", "GraphQL"]}
                />
              </div>

              {/* Courses */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">Courses & Certifications</h2>
                <div className="space-y-4 sm:space-y-6 mt-3">
                  <CourseCard
                    title="Frontend Development"
                    desc="React, Tailwind CSS, Redux, Firebase"
                  />
                  <CourseCard
                    title="Backend Development"
                    desc="Node.js, Express.js, MongoDB, Socket.IO, Next.js (Frontend)"
                  />
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-10 md:space-y-12">

              {/* About Me */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-base">
                  I am a passionate web developer from Bangladesh. I have completed frontend and backend
                  development courses and enjoy building modern web applications using React, Next.js,
                  Node.js, and MongoDB. I am also continuing my formal studies.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#FD853A] mb-3 sm:mb-4">Education</h2>
                <div className="rounded-xl border border-white/10 bg-[#272727]/50 p-4 sm:p-5">
                  <p className="font-semibold text-sm sm:text-base">Ongoing Studies</p>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">Bangladesh</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


export default page