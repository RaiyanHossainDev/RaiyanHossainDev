'use client'
import React, { useState } from 'react'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebookF, FaGithub  } from "react-icons/fa";
import { Bounce, toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            toast.error('Please Fill All Fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        await fetch('https://raiyan-hossain-server.onrender.com/contact/sendingMessageToMyMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message
            })
        }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);  
            toast.success('Message Sent Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        await setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

  return (
    <section className='bg-primary pt-[230px] pb-[124px] relative overflow-hidden'>
        <div className="container">
            <div className="row flex justify-between">
                <div className="col text-white">
                    <h1 className='text-[36px] font-bold'>Get in Touch</h1>
                    <p className='text-[16px] w-[566px] mb-[64px]'>Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>
                    <div className='flex flex-col gap-[32px]'>
                        <p className='flex items-center gap-[15px] text-[19px]'><IoMdCall className='text-[22px]'/>+880 1712-871414</p>
                        <p className='flex items-center gap-[15px] text-[19px]'><MdEmail className='text-[22px]'/>astralfog2@gmail.com</p>
                        <p className='flex items-center gap-[15px] text-[19px]'><FaLocationDot className='text-[22px]'/>Sherpur Sadar, Sherpur District, Mymensingh Division, Bangladesh</p>
                    </div>
                    <div className='mt-[119px] flex gap-[20px] text-[#1F1F1F]'>
                        <a className='p-[8px] rounded-full bg-white' target='_blank' href="https://www.facebook.com/profile.php?id=61578419153609"><FaFacebookF className='text-[20px]'/></a>
                        <a className='p-[8px] rounded-full bg-white' target='_blank' href="https://www.instagram.com/_not0ryan/"><FaInstagramSquare className='text-[20px]'/></a>
                        <a className='p-[8px] rounded-full bg-white' target='_blank' href="https://github.com/RaiyanHossainDev"><FaGithub className='text-[20px]'/></a>
                    </div>
                </div>
                <div className="col">
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[24px] items-start' action="" method="post">
                        <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className='border-none outline-none bg-white pl-[16px] w-[566px] rounded-xl h-[49px]' type="text" name="" id="" placeholder='First name' />
                        <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className='border-none outline-none bg-white pl-[16px] w-[566px] rounded-xl h-[49px]' type="email" name="" id="" placeholder='Email' />
                        <input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className='border-none outline-none bg-white pl-[16px] w-[566px] rounded-xl h-[49px]' type="number" name="" id="" placeholder='Phone number' />
                        <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className='border-none outline-none bg-white pl-[16px] pt-[16px] w-[566px] rounded-xl h-[168px]' name="" id="" placeholder='Your message'></textarea>
                        <button className='text-[16px] font-bold text-white bg-[#1F1F1F] px-[56px] py-[12px] rounded-[8px] cursor-pointer'  type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="circle w-[221px] h-[221px] rounded-full bg-[#1F1F1F] absolute top-[50%] translate-y-[-70%] translate-x-[-70%]"></div>
        <div className="circle w-[221px] h-[221px] rounded-full bg-[#1F1F1F] absolute right-0 top-[50%] translate-y-[50%] translate-x-[70%]"></div>
    </section>
  )
}

export default Contact