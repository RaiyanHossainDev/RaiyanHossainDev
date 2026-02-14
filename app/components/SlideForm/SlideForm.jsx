'use client'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import ContactForm from '../ContactForm/ContactForm';


const SlideForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    let pathname = usePathname();

return (
        <section>
            {
                pathname !== '/contact' &&
                // Floating CTA to open contact form
                <>
                    <div className={`fixed top-[50%] translate-y-[-50%] right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-[450px] bg-primary h-[650px] rounded-l-4xl flex justify-center items-center p-[40px] transition-all duration-[.4s] ease-in-out z-[999]`}>
                        <ContactForm />
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className="fixed z-[999] overflow-hidden group bottom-8 cursor-pointer right-8 w-16 h-16 rounded-full bg-black text-white flex items-center shadow-lg hover:w-[170px] transition-all duration-[0.5s] text-lg">
                        <span className='ml-[18px] group-hover:ml-[7px] transition-all duration-[.5s]'>
                        ✉️
                        </span>
                        <span className='w-[180px] absolute left-[70px] group-hover:left-[40px] transition-all duration-[0.5s] opacity-0 group-hover:opacity-100'>
                            {
                                isOpen?
                                "Close Form"
                                :
                                "Send Message"
                            }
                        </span>
                    </div>
                </>
            }
        </section>
)}

export default SlideForm