'use client'

import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '@/app/slice/translatorSlice.js'

export default function LanguageSwitcher() {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.translator.language)

  const handleToggle = () => {
    dispatch(toggleLanguage())
    localStorage.setItem('lang', language === 'en' ? 'bn' : 'en')
  }

  return (
    <div onClick={handleToggle} className="relative inline-flex bg-[#FD853A] rounded-full p-2 w-40 md:w-[110px] lg:w-40 text-white select-none">
      {/* White sliding pill */}
      <div className={`absolute top-1 ${language === 'en' ? 'left-1 w-1/2' : 'left-1/2 w-[calc(50%-8px)]'}  h-[calc(100%-0.5rem)] bg-white rounded-full pointer-events-none transition-all duration-75`}></div>

      {/* Language buttons */}
      <div className="relative z-10 flex w-full">
        <div className={`md:text-[14px] lg:text-[16px] w-1/2 font-semibold ${language === 'en' ? 'text-[#FD853A]' : 'text-white'} cursor-pointer flex items-center justify-center`}>
          EN
        </div>
        <div className={`md:text-[14px] lg:text-[16px] w-1/2 font-semibold ${language === 'bn' ? 'text-[#FD853A]' : 'text-white'} cursor-pointer flex items-center justify-center`}>
          বাংলা
        </div>
      </div>
    </div>
  )
}