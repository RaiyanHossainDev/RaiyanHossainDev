import React from "react";
import Translator from "@/app/components/Translator/Translator";

export const metadata = {
  title: "Services | Web Development & Design by Raiyan H.",
  description: "Explore the services offered by Raiyan H., including web development, frontend and backend solutions, and custom web design.",
}

const services = [
  {
    title: "Frontend Development",
    description: "Modern, responsive, and accessible interfaces built with performance in mind.",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Full-Stack Applications",
    description: "Scalable web applications with clean architecture and reliable APIs.",
    tech: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "Real-Time Features",
    description: "Live experiences like chat, notifications, and real-time updates.",
    tech: ["Socket.io"],
  },
];

const page = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-32 sm:py-32 md:py-44">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FD853A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#272727]">
            <Translator english="I design and build" bangla="আমি ডিজাইন করি এবং তৈরি করি" />
            <span className="block text-[#FD853A]">
              <Translator english="thoughtful web experiences" bangla="চিন্তাশীল ওয়েব অভিজ্ঞতা" />
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600">
            <Translator 
              english="Not just code — I focus on usability, clarity, and long-term maintainability. Every project is built with intention." 
              bangla="শুধু কোড নয় — আমি ব্যবহারযোগ্যতা, স্পষ্টতা এবং দীর্ঘমেয়াদি রক্ষণাবেক্ষণের দিকে মনোযোগ দিই। প্রতিটি প্রকল্প সচেতনভাবে তৈরি করা হয়।"
            />
          </p>
        </div>

        {/* HOW I WORK */}
        <div className="mt-20 sm:mt-24 md:mt-28 grid gap-12 sm:gap-16 md:grid-cols-3">
          {[
            { title: "Think First", text: "Understand the problem, user, and goals before writing code." },
            { title: "Build Clean", text: "Write maintainable, readable code using modern tools." },
            { title: "Polish & Ship", text: "Refine UI, improve performance, and deliver with confidence." },
          ].map((item, i) => (
            <div key={item.title} className="relative">
              <span className="absolute -top-6 sm:-top-8 text-5xl sm:text-6xl font-bold text-[#FD853A]/20">
                0{i + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-[#272727]">
                <Translator english={item.title} bangla={item.title === "Think First" ? "প্রথমে চিন্তা করুন" : item.title === "Build Clean" ? "পরিষ্কারভাবে তৈরি করুন" : "সাজান ও পাঠান"} />
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
                <Translator 
                  english={item.text} 
                  bangla={item.text === "Understand the problem, user, and goals before writing code." ? "কোড লেখার আগে সমস্যা, ব্যবহারকারী এবং লক্ষ্য বোঝা।" :
                        item.text === "Write maintainable, readable code using modern tools." ? "আধুনিক টুল ব্যবহার করে রক্ষণযোগ্য এবং পড়ার যোগ্য কোড লিখুন।" :
                        "UI পরিশোধন করুন, কর্মক্ষমতা উন্নত করুন এবং আত্মবিশ্বাসের সঙ্গে প্রদান করুন।"} 
                />
              </p>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div className="mt-20 sm:mt-28 space-y-8 sm:space-y-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-10
                         transition hover:border-[#FD853A] hover:bg-[#FD853A]/5"
            >
              <span className="absolute right-6 sm:right-10 top-6 sm:top-10 text-3xl sm:text-4xl font-bold text-[#FD853A]/20 group-hover:text-[#FD853A]">
                0{i + 1}
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#272727]">
                <Translator 
                  english={service.title} 
                  bangla={service.title === "Frontend Development" ? "ফ্রন্টএন্ড ডেভেলপমেন্ট" : service.title === "Full-Stack Applications" ? "ফুল-স্ট্যাক অ্যাপ্লিকেশন" : "রিয়েল-টাইম ফিচার"} 
                />
              </h2>
              <p className="mt-3 sm:mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
                <Translator 
                  english={service.description} 
                  bangla={service.description === "Modern, responsive, and accessible interfaces built with performance in mind." ? "মডার্ন, প্রতিক্রিয়াশীল এবং অ্যাক্সেসযোগ্য ইন্টারফেস যা কর্মক্ষমতার দিকে মনোযোগ দিয়ে তৈরি।" :
                        service.description === "Scalable web applications with clean architecture and reliable APIs." ? "পরিসর যোগ্য ওয়েব অ্যাপ্লিকেশন, পরিষ্কার আর্কিটেকচার এবং নির্ভরযোগ্য API সহ।" :
                        "লাইভ অভিজ্ঞতা যেমন চ্যাট, নোটিফিকেশন এবং রিয়েল-টাইম আপডেট।"} 
                />
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span key={t} className="rounded-full border border-[#FD853A]/40 px-3 sm:px-4 py-1 text-xs sm:text-sm text-[#FD853A]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="mt-20 sm:mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272727]">
            <Translator english="My process" bangla="আমার প্রক্রিয়া" />
          </h2>
          <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 md:grid-cols-4">
            {["Plan", "Design", "Build", "Iterate"].map((step, i) => (
              <div key={step} className="relative">
                <span className="text-sm sm:text-base font-semibold text-[#FD853A]">
                  <Translator english={`Step ${i + 1}`} bangla={`ধাপ ${i + 1}`} />
                </span>
                <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl font-semibold text-[#272727]">
                  <Translator 
                    english={step} 
                    bangla={step === "Plan" ? "পরিকল্পনা" : step === "Design" ? "ডিজাইন" : step === "Build" ? "তৈরি করা" : "পরিমার্জন"} 
                  />
                </h3>
                <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">
                  <Translator 
                    english={step === "Plan" ? "Define scope and technical approach." :
                            step === "Design" ? "Create intuitive layouts and flows." :
                            step === "Build" ? "Implement with clean, scalable code." :
                            "Refine, optimize, and improve."} 
                    bangla={step === "Plan" ? "সীমা এবং প্রযুক্তিগত পদ্ধতি নির্ধারণ করুন।" :
                          step === "Design" ? "ইন্টারেক্টিভ লেআউট এবং ফ্লো তৈরি করুন।" :
                          step === "Build" ? "পরিষ্কার, স্কেলযোগ্য কোড দিয়ে বাস্তবায়ন করুন।" :
                          "পরিমার্জন, অপ্টিমাইজ এবং উন্নতি করুন।"}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROOF */}
        <div className="mt-20 sm:mt-28 rounded-3xl bg-[#272727] px-6 sm:px-10 py-12 sm:py-16 text-center text-white">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#FD853A]">
            <Translator english="Proof over promises" bangla="প্রতিশ্রুতির চেয়ে প্রমাণ" />
          </p>
          <h2 className="mt-2 sm:mt-4 text-2xl sm:text-4xl font-extrabold">
            <Translator english="Don’t believe me?" bangla="আমার বিশ্বাস করছেন না?" />
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-300 text-sm sm:text-base">
            <Translator 
              english="That’s totally fair. Take a look at my real projects and judge the quality yourself." 
              bangla="এটি একেবারেই স্বাভাবিক। আমার প্রকৃত প্রকল্পগুলি দেখুন এবং নিজেরাই মান মূল্যায়ন করুন।"
            />
          </p>
          <a
            href="/portfolio"
            className="mt-6 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-[#FD853A] px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-105"
          >
            <Translator english="View My Portfolio →" bangla="আমার পোর্টফোলিও দেখুন →" />
          </a>
        </div>

        {/* CONTACT CTA */}
        <div className="mt-16 sm:mt-32 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#272727]">
            <Translator english="Want to work together?" bangla="একসাথে কাজ করতে চান?" />
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base">
            <Translator english="I’m always open to new opportunities, collaborations, and ideas." bangla="আমি সর্বদা নতুন সুযোগ, সহযোগিতা এবং ধারণার জন্য উন্মুক্ত।" />
          </p>
          <a
            href="/contact"
            className="mt-4 sm:mt-8 inline-block rounded-full border-2 border-[#FD853A] px-6 sm:px-10 py-2 sm:py-4 text-sm sm:text-base font-semibold text-[#FD853A] transition hover:bg-[#FD853A] hover:text-white"
          >
            <Translator english="Contact Me" bangla="আমাকে যোগাযোগ করুন" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default page;