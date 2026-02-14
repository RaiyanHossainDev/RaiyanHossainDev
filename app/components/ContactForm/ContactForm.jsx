'use client'
import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify';


const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill all fields', { position: "top-right", autoClose: 5000, theme: "dark", transition: Bounce });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email', { position: "top-right", autoClose: 5000, theme: "dark", transition: Bounce });
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('https://raiyan-hossain-server.onrender.com/contact/sendingMessageToMyMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      toast.success('Message sent successfully!', { position: "top-right", autoClose: 5000, theme: "dark", transition: Bounce });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.', { position: "top-right", autoClose: 5000, theme: "dark", transition: Bounce });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
          <form onSubmit={handleSubmit} className={`bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-4 w-full`}>
              <h3 className="text-xl font-medium text-black">Send me a message</h3>

              <input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full h-[50px] px-4 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
              />
              <input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email"
                placeholder="Email address"
                className="w-full h-[50px] px-4 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
              />
              <input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                type="tel"
                placeholder="Phone number"
                className="w-full h-[50px] px-4 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
              />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project"
                className="w-full h-[150px] px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-black text-white py-3 rounded-xl font-medium hover:scale-[1.03] active:scale-[0.98] transition shadow disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>

              <p className="text-center text-sm text-gray-500">I usually respond within 24 hours</p>
        </form>
  )
}

export default ContactForm