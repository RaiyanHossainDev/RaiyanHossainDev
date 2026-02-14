import Contact from '@/app/components/Contact/Contact'
import React from 'react'

export const metadata = {
  title: "Contact Raiyan H. | Get in Touch",
  description: "Get in touch with Raiyan H., a full-stack web developer. Contact for projects, collaborations, or inquiries about web development services.",
}

const page = () => {
  return (
    <section>
        <Contact />
        <img src="/images/tag.png" className="w-full mt-[20px]" />
    </section>
  )
}

export default page