'use client';
import { useState } from "react";
import Translator from '@/app/components/Translator/Translator'; // Ensure this path is correct

const allProjects = [
  // Landing Pages
  {
    title: { english: "Furnishop Landing Page", bangla: "ফার্নিশপ ল্যান্ডিং পেজ" },
    category: "Landing",
    description: {
      english: "A sleek landing page for a furniture store, showcasing products and promotions.",
      bangla: "একটি ফার্নিচার স্টোরের জন্য চমৎকার ল্যান্ডিং পেজ, যেখানে পণ্য এবং প্রোমোশন দেখানো হয়েছে।"
    },
    tech: ["CSS", "React"],
    image: "/images/furniture.png",
    live: "https://projects-taupe-sigma.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/Protfollio/tree/main/furnishop",
  },
  {
    title: { english: "PupHub Landing Page", bangla: "পাপহাব ল্যান্ডিং পেজ" },
    category: "Landing",
    description: {
      english: "A vibrant landing page promoting pet care and animal welfare.",
      bangla: "পোষা প্রাণী যত্ন এবং প্রাণী কল্যাণ প্রচারের জন্য একটি প্রাণবন্ত ল্যান্ডিং পেজ।"
    },
    tech: ["React", "Tailwind CSS", "CSS"],
    image: "/images/puphub.png",
    live: "https://puphub-indol.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/puphub",
  },
  {
    title: { english: "Trabook Landing Page", bangla: "ট্রাবুক ল্যান্ডিং পেজ" },
    category: "Landing",
    description: {
      english: "A vibrant landing page promoting travel experiences and booking services.",
      bangla: "ভ্রমণ অভিজ্ঞতা এবং বুকিং সার্ভিস প্রচারের জন্য একটি প্রাণবন্ত ল্যান্ডিং পেজ।"
    },
    tech: ["React", "Tailwind CSS", "CSS"],
    image: "/images/trabook.png",
    live: "https://trabook-two.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/trabook",
  },
  // UI / Web Design
  {
    title: { english: "Nature Promoting Website", bangla: "প্রকৃতি প্রচারকারী ওয়েবসাইট" },
    category: "UI",
    description: {
      english: "A visually stunning landing page promoting nature conservation and eco-friendly products.",
      bangla: "প্রকৃতি সংরক্ষণ এবং পরিবেশবান্ধব পণ্য প্রচারের জন্য একটি চমৎকার ল্যান্ডিং পেজ।"
    },
    tech: ["React", "Tailwind CSS", "Figma"],
    image: "/images/nature.png",
    live: "https://nature-dun.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/Protfollio/tree/main/nature",
  },
  {
    title: { english: "Smoothie Animated Webpage", bangla: "স্মুথি অ্যানিমেটেড ওয়েবপেজ" },
    category: "UI",
    description: {
      english: "An engaging animated webpage for a smoothie brand, featuring dynamic visuals and interactive elements.",
      bangla: "একটি স্মুথি ব্র্যান্ডের জন্য আকর্ষণীয় অ্যানিমেটেড ওয়েবপেজ, যা ডায়নামিক ভিজ্যুয়াল এবং ইন্টারেক্টিভ এলিমেন্টস দেখায়।"
    },
    tech: ["React", "Tailwind CSS"],
    image: "/images/smoothie.png",
    live: "https://smoothie-sigma.vercel.app/",
    github: "https://github.com/RaiyanHossainDev/Protfollio/tree/main/smothie",
  },
  // Full-Stack Applications
  {
    title: { english: "Real-Time Chat Application", bangla: "রিয়েল-টাইম চ্যাট অ্যাপ্লিকেশন" },
    category: "Full-Stack",
    description: {
      english: "Full-stack chat app with authentication, rooms, and live messaging.",
      bangla: "অথেন্টিকেশন, রুম এবং লাইভ মেসেজিং সহ ফুল-স্ট্যাক চ্যাট অ্যাপ।"
    },
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/images/prot.png",
    live: "#",
    github: "#",
  },
  {
    title: { english: "Task Manager App", bangla: "টাস্ক ম্যানেজার অ্যাপ" },
    category: "Full-Stack",
    description: {
      english: "Task management app with Firebase backend and real-time updates.",
      bangla: "Firebase ব্যাকএন্ড এবং রিয়েল-টাইম আপডেট সহ টাস্ক ম্যানেজমেন্ট অ্যাপ।"
    },
    tech: ["Next.js", "Firebase", "React"],
    image: "/images/prot.png",
    live: "#",
    github: "#",
  },
];

const categories = ["All", "Landing", "UI", "Full-Stack"];

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const groupedProjects = allProjects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <>
      {/* Top Cover */}
      <section className='pt-[157px] pb-[200px] bg-primary px-4 sm:px-6 lg:px-24'>
        <div className="container mx-auto">
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-white text-center tracking-tight'>
            <Translator english="My Portfolio" bangla="আমার পোর্টফোলিও" />
          </h1>
          <p className='max-w-[810px] w-full text-base sm:text-lg md:text-xl text-white text-center mx-auto mt-6'>
            <Translator 
              english="Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together."
              bangla="আমার ডিজাইন সেবা অন্বেষণ করুন, UI/UX থেকে প্রোটোটাইপিং এবং টেস্টিং পর্যন্ত। আসুন একসাথে অসাধারণ ডিজিটাল অভিজ্ঞতা তৈরি করি।"
            />
          </p>
        </div>
        <div className='w-24 sm:w-32 h-1 bg-white rounded-full mx-auto mt-10' />
      </section>

      {/* Main Content */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-24 py-24 mt-[-195px]">
        {/* Background accent */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#FD853A]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* HERO */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
              <Translator english="Selected Work" bangla="নির্বাচিত প্রকল্পসমূহ" />
              <span className="block text-[#272727]">
                <Translator english="Real projects, real code" bangla="বাস্তব প্রকল্প, বাস্তব কোড" />
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600">
              <Translator english="Explore my projects grouped by category, or filter them using the buttons below."
                         bangla="আমার প্রকল্পগুলো ক্যাটাগরিতে ভাগ করা হয়েছে, অথবা নিচের বোতাম ব্যবহার করে ফিল্টার করুন।" />
            </p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mt-12 flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition
                  ${selectedCategory === cat
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
              ? Object.entries(groupedProjects).map(([category, projects]) => (
                <div key={category}>
                  <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#272727] uppercase tracking-widest relative inline-block before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-16 before:bg-[#FD853A] before:rounded-full">
                    {category}
                  </h2>
                  <div className="space-y-12">
                    {projects.map((project, i) => (
                      <ProjectCard key={project.title.english} project={project} index={i} />
                    ))}
                  </div>
                </div>
              ))
              : groupedProjects[selectedCategory]?.map((project, i) => (
                <ProjectCard key={project.title.english} project={project} index={i} />
              ))
            }
          </div>

          {/* PROOF */}
          <div className="mt-36 rounded-3xl bg-[#272727] px-6 sm:px-12 lg:px-24 py-16 text-center text-white">
            <p className="text-sm uppercase tracking-widest text-[#FD853A]">
              <Translator english="Still unsure?" bangla="এখনো নিশ্চিত নন?" />
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold">
              <Translator english="Don’t take my word for it" bangla="শুধু আমার কথায় বিশ্বাস করবেন না" />
            </h2>
            <p className="mt-4 text-gray-300">
              <Translator english="Explore the code, run the apps, and see how everything is built."
                         bangla="কোড অন্বেষণ করুন, অ্যাপ চালান এবং দেখুন কীভাবে সবকিছু তৈরি হয়েছে।" />
            </p>
            <a
              href="https://github.com/raiyanhossaindev"
              target="_blank"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#FD853A] px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-105"
            >
              <Translator english="Visit My GitHub →" bangla="আমার GitHub দেখুন →" />
            </a>
          </div>

          {/* CONTACT */}
          <div className="mt-32 text-center px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272727]">
              <Translator english="Want to build something together?" bangla="একসাথে কিছু তৈরি করতে চান?" />
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              <Translator english="I’m open to internships, junior roles, and freelance projects."
                         bangla="আমি ইন্টার্নশিপ, জুনিয়র রোল এবং ফ্রিল্যান্স প্রকল্পে খোলা আছি।" />
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full border-2 border-[#FD853A] px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#FD853A] transition hover:bg-[#FD853A] hover:text-white"
            >
              <Translator english="Contact Me" bangla="আমাকে যোগাযোগ করুন" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// ProjectCard Component
function ProjectCard({ project, index }) {
  return (
    <div className={`grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
      <div className="group relative overflow-hidden rounded-3xl border border-gray-200 h-64 sm:h-80 md:h-auto">
        <img
          src={project.image}
          alt={project.title.english}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#272727]/0 transition group-hover:bg-[#272727]/10" />
      </div>

      <div>
        <span className="text-sm font-semibold text-[#FD853A]">{project.category} <Translator english="Project" bangla="প্রকল্প" /></span>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#272727]">
          <Translator english={project.title.english} bangla={project.title.bangla} />
        </h2>
        <p className="mt-4 text-gray-600">
          <Translator english={project.description.english} bangla={project.description.bangla} />
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-[#FD853A]/40 px-4 py-1 text-xs text-[#FD853A]">{t}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:gap-6 gap-2">
          <a href={project.live} target="_blank" className="font-semibold text-[#272727] underline-offset-4 hover:underline">
            <Translator english="Live Demo →" bangla="লাইভ ডেমো →" />
          </a>
          <a href={project.github} target="_blank" className="font-semibold text-[#272727] underline-offset-4 hover:underline">
            <Translator english="GitHub →" bangla="GitHub →" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;