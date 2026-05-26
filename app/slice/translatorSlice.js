import { createSlice } from '@reduxjs/toolkit'

const translatorSlice = createSlice({
  name: 'translator',
  initialState: {
    language: localStorage?.getItem('lang') || 'en',
  },
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'en' ? 'bn' : 'en'
    },
  },
})

export const { toggleLanguage } = translatorSlice.actions
export default translatorSlice.reducer