import React from "react";


export const metadata = {
  title: "Services | Web Development & Design by Raiyan H.",
  description: "Explore the services offered by Raiyan H., including web development, frontend and backend solutions, and custom web design.",
}

const services = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive, and accessible interfaces built with performance in mind.",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Full-Stack Applications",
    description:
      "Scalable web applications with clean architecture and reliable APIs.",
    tech: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "Real-Time Features",
    description:
      "Live experiences like chat, notifications, and real-time updates.",
    tech: ["Socket.io"],
  },
];

const page = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-44 md:px-12 lg:px-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FD853A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight text-[#272727]">
            I design and build
            <span className="block text-[#FD853A]">
              thoughtful web experiences
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Not just code — I focus on usability, clarity, and long-term
            maintainability. Every project is built with intention.
          </p>
        </div>

        {/* HOW I WORK */}
        <div className="mt-28 grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Think First",
              text: "Understand the problem, user, and goals before writing code.",
            },
            {
              title: "Build Clean",
              text: "Write maintainable, readable code using modern tools.",
            },
            {
              title: "Polish & Ship",
              text: "Refine UI, improve performance, and deliver with confidence.",
            },
          ].map((item, i) => (
            <div key={item.title} className="relative">
              <span className="absolute -top-8 text-6xl font-bold text-[#FD853A]/20">
                0{i + 1}
              </span>
              <h3 className="text-xl font-semibold text-[#272727]">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div className="mt-32 space-y-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-3xl border border-gray-200 p-10
                         transition hover:border-[#FD853A]
                         hover:bg-[#FD853A]/5"
            >
              <span className="absolute right-10 top-10 text-4xl font-bold text-[#FD853A]/20 group-hover:text-[#FD853A]">
                0{i + 1}
              </span>

              <h2 className="text-2xl font-semibold text-[#272727]">
                {service.title}
              </h2>

              <p className="mt-4 max-w-2xl text-gray-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#FD853A]/40
                               px-4 py-1 text-xs text-[#FD853A]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-[#272727]">
            My process
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {["Plan", "Design", "Build", "Iterate"].map((step, i) => (
              <div key={step} className="relative">
                <span className="text-sm font-semibold text-[#FD853A]">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#272727]">
                  {step}
                </h3>
                <p className="mt-2 text-gray-600">
                  {step === "Plan" && "Define scope and technical approach."}
                  {step === "Design" && "Create intuitive layouts and flows."}
                  {step === "Build" && "Implement with clean, scalable code."}
                  {step === "Iterate" && "Refine, optimize, and improve."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROOF */}
        <div className="mt-36 rounded-3xl bg-[#272727] px-10 py-16 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-[#FD853A]">
            Proof over promises
          </p>

          <h2 className="mt-4 text-4xl font-extrabold">
            Don’t believe me?
          </h2>

          <p className="mt-4 text-gray-300">
            That’s totally fair.  
            Take a look at my real projects and judge the quality yourself.
          </p>

          <a
            href="/portfolio"
            className="mt-10 inline-flex items-center gap-2
                       rounded-full bg-[#FD853A]
                       px-10 py-4 text-sm font-semibold text-white
                       transition hover:scale-105"
          >
            View My Portfolio →
          </a>
        </div>

        {/* CONTACT */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-[#272727]">
            Want to work together?
          </h2>

          <p className="mt-4 text-gray-600">
            I’m always open to new opportunities, collaborations, and ideas.
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
  );
}

export default page;