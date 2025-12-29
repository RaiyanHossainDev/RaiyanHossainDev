import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

const page = () => {
  return (
    <section>
        <section className='pt-[157px] pb-[142px] bg-primary'>
            <div className="container">
                <h1 className='font-bold text-[40px] text-white text-center'>My Portfolio</h1>
                <p className='w-[810px] text-[20px] text-white text-center mx-auto mt-[24px]'>Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
            </div>
        </section>
        <section className='mt-[-110px] z-[999]'>
            <div className="container">
                <div className="flex flex-wrap gap-[40px] justify-between ">
                    <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
                        <img className='w-[354px] h-[198px]' src="/images/furniture.png" alt="" />
                        <div className='flex px-[5px] justify-between items-center mt-[20px]'>
                            <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Furniture Landing Page</p>
                            <a target='_blank' href="https://projects-taupe-sigma.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
                        </div>
                    </div>
                    <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
                        <img className='w-[354px] h-[198px]' src="/images/nature.png" alt="" />
                        <div className='flex px-[5px] justify-between items-center mt-[20px]'>
                            <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Nature Promoting Website</p>
                            <a target='_blank' href="https://nature-dun.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
                        </div>
                    </div>
                    <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
                        <img className='w-[354px] h-[198px]' src="/images/puphub.png" alt="" />
                        <div className='flex px-[5px] justify-between items-center mt-[20px]'>
                            <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Pets caring site</p>
                            <a target='_blank' href="https://puphub-indol.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
                        </div>
                    </div>
                    <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
                        <img className='w-[354px] h-[198px]' src="/images/smoothie.png" alt="" />
                        <div className='flex px-[5px] justify-between items-center mt-[20px]'>
                            <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Amazing Animated Webpage</p>
                            <a target='_blank' href="https://smoothie-sigma.vercel.app/"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
                        </div>
                    </div>
                    <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
                        <img className='w-[354px] h-[198px]' src="/images/prot.png" alt="" />
                        <div className='flex px-[5px] justify-between items-center mt-[20px]'>
                            <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Educational Platform</p>
                            <a href="#"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
                        </div>
                    </div>
                    <div className="card w-[354px] pb-[20px] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-[1.1] hover:translate-y-[-20px] transition-all duration-300">
                        <img className='w-[354px] h-[198px]' src="/images/prot.png" alt="" />
                        <div className='flex px-[5px] justify-between items-center mt-[20px]'>
                            <p className='mt-[32px] font-bold text-[20px] text-gray-700'>Educational Platform</p>
                            <a href="#"><CgArrowTopRight className='text-[35px] bg-primary text-white rounded-2xl p-[3px] mb-[-30px]' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default page