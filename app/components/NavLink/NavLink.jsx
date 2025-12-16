"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? "py-[20px] px-[40px] text-white text-[20px] inline-block bg-primary rounded-[60px] transition-all duration-75 " : "py-[20px] px-[40px] text-white text-[20px] inline-block rounded-[60px] transition-all duration-75 "}
    >
      {children}
    </Link>
  );
}