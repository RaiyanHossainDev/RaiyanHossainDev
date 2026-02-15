"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? "py-[15px] px-[20px] md:py-[10px] md:px-[15px] lg:py-[20px] lg:px-[40px] text-center text-white text-[20px] md:text-[17px] inline-block bg-primary rounded-[60px] transition-all duration-100" : " hover:scale-[1.2] text-center py-[15px] px-[20px] md:py-[10px] md:px-[15px] lg:py-[20px] lg:px-[40px] text-white text-[20px] md:text-[17px] inline-block rounded-[60px] transition-all duration-100"}
    >
      {children}
    </Link>
  );
}