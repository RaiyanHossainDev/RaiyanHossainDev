import React from 'react'
import Banner from './components/Banner/Banner'
import Service from './components/Service/Service'
import WorkExp from './components/WorkExp/WorkExp'
import WHM from './components/WHM/WHM'

const page = () => {
  return (
    <section>
      <Banner />
      <Service />
      <WorkExp />
      <WHM />
      <img src="/images/tag.png" className="w-full my-[20px]" />
    </section>
  )
}

export default page