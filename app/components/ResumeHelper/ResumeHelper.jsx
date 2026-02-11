import React from 'react'



function SkillBlock({ title, items }) {
  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="mb-2 sm:mb-3 font-semibold text-[#FD853A] text-sm sm:text-base">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span
            key={item}
            className="rounded-full border hover:bg-primary transition-all duration-100 border-[#FD853A]/40 bg-[#272727]/20 px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CourseCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#272727]/30 p-3 sm:p-5 transition hover:border-[#FD853A]/40">
      <p className="font-semibold text-sm sm:text-base">{title}</p>
      <p className="text-gray-300 text-xs sm:text-sm mt-1">{desc}</p>
    </div>
  );
}

export { SkillBlock, CourseCard };