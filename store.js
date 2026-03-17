import { configureStore } from '@reduxjs/toolkit'
import translatorSlice from './app/slice/translatorSlice'

export const store = configureStore({
  reducer: {
    translator: translatorSlice,
  },
})