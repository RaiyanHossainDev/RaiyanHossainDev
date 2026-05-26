import { createSlice } from '@reduxjs/toolkit'

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('lang') || 'en'
  }
  return 'en'
}

const translatorSlice = createSlice({
  name: 'translator',
  initialState: {
    language: getInitialLanguage(),
  },
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'en' ? 'bn' : 'en'
    },
  },
})

export const { toggleLanguage } = translatorSlice.actions
export default translatorSlice.reducer