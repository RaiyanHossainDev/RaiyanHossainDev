import Link from 'next/link'
import React from 'react'
import NavLink from '../NavLink/NavLink'
import Image from 'next/image'

const Navbar = () => {

    return (
        <nav className='fixed w-full top-[40px] z-[999]'>
            <div className="container">
                <div className="nav-row flex justify-between items-center rounded-[50px] bg-notBlack p-[10px]">
                    <div className="row1">
                        <NavLink children={"Home"} href={"/"} />
                        <NavLink children={"About"} href={"/about"} />
                        <NavLink children={"Service"} href={"/service"} />
                    </div>
                    <div className="logo">
                        <Link href={'/'}>
                            <img src="/images/logo2.png" alt="logo" className='w-[180px]'/>
                        </Link>
                    </div>
                    <div className="row2">
                        <NavLink children={"Resume"} href={"/resume"} />
                        <NavLink children={"Portfolio"} href={"/portfolio"} />
                        <NavLink children={"Contact"} href={"/contact"} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar