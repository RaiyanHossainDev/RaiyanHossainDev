// import React from 'react'
// import './style.css'
// import { CgArrowTopRight } from "react-icons/cg";

// const page = () => {
//   return (
//     <section>
//         <section className='pt-[157px] pb-[300px] bg-primary'>
//             <div className="container">
//                 <h1 className='font-bold text-[40px] text-white text-center tracking-tight'>My Portfolio</h1>
//                 <p className='w-[810px] text-[20px] text-white text-center mx-auto mt-[24px]'>Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
//             </div>
//             <div className='w-[200px] h-[2px] bg-white rounded-full mx-auto mt-[40px] transition-all' style={{animation:"expandingLine linear 1.5s infinite "}} />
//         </section>
//         <section className='mt-[-160px] z-[999]'>
//             <div className="container">
//                 <h2 className='text-4xl font-semibold mb-[20px] text-white p-[6px] rounded-[5px] text-center'>Landing Page</h2>
//                 <div className="flex flex-wrap gap-[40px] ">
//                     <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
//                         <img className='w-[354px] h-[198px]' src="/images/furniture.png" alt="" />
//                         <div className='flex px-[5px] justify-between items-center mt-[20px]'>
//                             <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Furniture Landing Page</p>
//                             <a target='_blank' href="https://projects-taupe-sigma.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
//                         </div>
//                     </div>
//                     <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
//                         <img className='w-[354px] h-[198px]' src="/images/nature.png" alt="" />
//                         <div className='flex px-[5px] justify-between items-center mt-[20px]'>
//                             <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Nature Promoting Website</p>
//                             <a target='_blank' href="https://nature-dun.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
//                         </div>
//                     </div>
//                     <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
//                         <img className='w-[354px] h-[198px]' src="/images/puphub.png" alt="" />
//                         <div className='flex px-[5px] justify-between items-center mt-[20px]'>
//                             <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Pets caring site</p>
//                             <a target='_blank' href="https://puphub-indol.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
//                         </div>
//                     </div>
//                     <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
//                         <img className='w-[354px] h-[198px]' src="/images/smoothie.png" alt="" />
//                         <div className='flex px-[5px] justify-between items-center mt-[20px]'>
//                             <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Amazing Animated Webpage</p>
//                             <a target='_blank' href="https://smoothie-sigma.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
//                         </div>
//                     </div>
//                     <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
//                         <img className='w-[354px] h-[198px]' src="/images/trabook.png" alt="" />
//                         <div className='flex px-[5px] justify-between items-center mt-[20px]'>
//                             <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Traveling Website Landing Page</p>
//                             <a href="https://trabook-two.vercel.app/" target='_blank'><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </section>
//   )
// }


// export default page






'use client';
import { useState } from "react";

const allProjects = [
  // Landing Pages
  {
    title: "Furnishop Landing Page",
    category: "Landing",
    description:
      "A sleek landing page for a furniture store, showcasing products and promotions.",
    tech: ["CSS", "React"],
    image: "/images/furniture.png",
    live: "https://projects-taupe-sigma.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/Protfollio/tree/main/furnishop",
  },
  {
    title: "PupHub Landing Page",
    category: "Landing",
    description:
      "A vibrant landing page promoting pet care and animal welfare.",
    tech: ["React", "Tailwind CSS", "CSS"],
    image: "/images/puphub.png",
    live: "https://puphub-indol.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/puphub",
  },
  {
    title: "Trabook Landing Page",
    category: "Landing",
    description:
      "A vibrant landing page promoting travel experiences and booking services.",
    tech: ["React", "Tailwind CSS", "CSS"],
    image: "/images/trabook.png",
    live: "https://trabook-two.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/trabook",
  },

  // UI / Web Design
  {
    title: "Nature Promoting Website",
    category: "UI",
    description:
      "A visually stunning landing page promoting nature conservation and eco-friendly products.",
    tech: ["React", "Tailwind CSS", "Figma"],
    image: "/images/nature.png",
    live: "https://nature-dun.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/Protfollio/tree/main/nature",
  },
  {
    title: "Smoothie Animated Webpage",
    category: "UI",
    description:
      "An engaging animated webpage for a smoothie brand, featuring dynamic visuals and interactive elements.",
    tech: ["React", "Tailwind CSS"],
    image: "/images/smoothie.png",
    live: "https://smoothie-sigma.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/Protfollio/tree/main/smothie",
  },

  // Full-Stack Applications
  {
    title: "Real-Time Chat Application",
    category: "Full-Stack",
    description:
      "Full-stack chat app with authentication, rooms, and live messaging.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/images/prot.png",
    live: "#",
    github: "#",
  },
  {
    title: "Task Manager App",
    category: "Full-Stack",
    description:
      "Task management app with Firebase backend and real-time updates.",
    tech: ["Next.js", "Firebase", "React"],
    image: "/images/prot.png",
    live: "#",
    github: "#",
  },
];

const categories = ["All", "Landing", "UI", "Full-Stack"];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Group projects by category
  const groupedProjects = allProjects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <>
    {/* Top Cover */}
    <section className='pt-[157px] pb-[200px] bg-primary'>
        <div className="container">
            <h1 className='font-bold text-[40px] text-white text-center tracking-tight'>My Portfolio</h1>
            <p className='w-[810px] text-[20px] text-white text-center mx-auto mt-[24px]'>Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
        </div>
        <div className='w-[200px] h-[2px] bg-white rounded-full mx-auto mt-[40px]' />
    </section>

    {/* Main Content */}
    <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24 mt-[-195px]">
      {/* Background accent */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#FD853A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight text-white">
            Selected Work
            <span className="block text-[#272727]">
              Real projects, real code
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Explore my projects grouped by category, or filter them using the
            buttons below.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mt-12 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition
                ${
                  selectedCategory === cat
                    ? "bg-[#FD853A] text-white"
                    : "bg-gray-100 text-[#272727] hover:bg-[#FD853A]/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="mt-16 space-y-16">
          {selectedCategory === "All"
            ? // Show all grouped by category
              Object.entries(groupedProjects).map(([category, projects]) => (
                <div key={category}>
                  <h2 className="mb-8 text-3xl md:text-4xl font-extrabold text-[#272727] uppercase tracking-widest 
                                relative inline-block before:absolute before:-bottom-2 before:left-0 before:h-1 
                                before:w-16 before:bg-[#FD853A] before:rounded-full ">
                    {category}
                    </h2>
                  <div className="space-y-12">
                    {projects.map((project, i) => (
                      <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                  </div>
                </div>
              ))
            : // Show only selected category
              groupedProjects[selectedCategory]?.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
        </div>

        {/* PROOF */}
        <div className="mt-36 rounded-3xl bg-[#272727] px-12 py-16 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-[#FD853A]">
            Still unsure?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold">
            Don’t take my word for it
          </h2>

          <p className="mt-4 text-gray-300">
            Explore the code, run the apps, and see how everything is built.
          </p>

          <a
            href="https://github.com/raiyanhossaindev"
            target="_blank"
            className="mt-10 inline-flex items-center gap-2
                       rounded-full bg-[#FD853A]
                       px-10 py-4 text-sm font-semibold text-white
                       transition hover:scale-105"
          >
            Visit My GitHub →
          </a>
        </div>

        {/* CONTACT */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-[#272727]">
            Want to build something together?
          </h2>

          <p className="mt-4 text-gray-600">
            I’m open to internships, junior roles, and freelance projects.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full
                       border-2 border-[#FD853A]
                       px-10 py-4 text-sm font-semibold text-[#FD853A]
                       transition hover:bg-[#FD853A] hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
    </>
  );
}

// Separate ProjectCard component for clarity
function ProjectCard({ project, index }) {
  return (
    <div
      className={`grid gap-12 items-center md:grid-cols-2 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="group relative overflow-hidden rounded-3xl border border-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#272727]/0 transition group-hover:bg-[#272727]/10" />
      </div>

      <div>
        <span className="text-sm font-semibold text-[#FD853A]">
          {project.category} Project
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#272727]">
            {project.title.split(" ")[0]}{" "}
            <span className="text-[#FD853A]">
                {project.title.split(" ").slice(1).join(" ")}
            </span>
        </h2>

        <p className="mt-4 max-w-xl text-gray-600">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#FD853A]/40 px-4 py-1 text-xs text-[#FD853A]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-6">
          <a
            href={project.live}
            target="_blank"
            className="font-semibold text-[#272727] underline-offset-4 hover:underline"
          >
            Live Demo →
          </a>
          <a
            href={project.github}
            target="_blank"
            className="font-semibold text-[#272727] underline-offset-4 hover:underline"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;