import React from 'react'

const WorkExp = () => {
  return (
    <section className='mt-[85px]'>
        <div className="container">
            <div className="WorkExp-col">
                <div className="WorkExp-head">
                    <h2 className='text-[#344054] text-[64px] text-center mb-[85px]'>My <span className='text-primary'>Training & Practical Experience</span></h2>
                </div>
                <div className="WorkExp-main-row flex justify-between items-center">
                    <div className="WorkExp-main-col flex flex-col gap-[102px]">
                        <div>
                            <h2 className='text-[#E42625] text-[40px] leading-12 font-semibold'>Creative IT Institute</h2>
                            <p className='text-[#98A2B3] text-[20px]'>14th May, 2024 - 29 January, 2025</p>
                        </div>
                        <div>
                            <h2 className='text-[#E42625] text-[40px] leading-12 font-semibold'>Creative IT Institute</h2>
                            <p className='text-[#98A2B3] text-[20px]'>22nd May, 2025 - 4 December, 2025</p>
                        </div>
                        <div>
                            <h2 className='text-[#E42625] text-[40px] leading-12 font-semibold'>Creative IT Institute</h2>
                            <p className='text-[#98A2B3] text-[20px]'>6th December, 2025 (Ongoing)</p>
                        </div>
                    </div>
                    <img src="/images/WorkExpLine.png" alt="" />
                    <div className='flex flex-col gap-[48px]'>
                        <div>
                            <h2 className='text-[#344054] text-[40px] leading-12 font-semibold'>Frontend Developer</h2>
                            <p className='text-[#98A2B3] text-[16px] w-[460px]'>Completed Frontend Development at Creative IT Institute, starting with HTML and CSS, then diving into React, Tailwind CSS, Bootstrap, and Redux to build responsive, dynamic, and modern web interfaces.</p>
                        </div>
                        <div>
                            <h2 className='text-[#344054] text-[40px] leading-12 font-semibold'>Backend Developer</h2>
                            <p className='text-[#98A2B3] text-[16px] w-[460px]'>Completed Backend Development at Creative IT Institute, mastering Node.js, Express.js, MongoDB, and Socket.io, while building full-featured applications with CRUD operations and real-time functionality.</p>
                        </div>
                        <div>
                            <h2 className='text-[#344054] text-[40px] leading-12 font-semibold'>Certified Ethical Hacker</h2>
                            <p className='text-[#98A2B3] text-[16px] w-[460px]'>Ongoing Cyber Security course at Creative IT Institute, focused on system security, data protection, and ethical hacking fundamentals.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line w-full h-[2px] bg-gray-200 my-[20px]"></div>
            <div className='flex justify-around'>
                <a target='_blank' href="/images/certificate.pdf" rel="noreferrer">
                    <img className='w-[400px] border-[2px] border-primary rounded-2xl' src="/images/certificate.jpg" alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default WorkExp