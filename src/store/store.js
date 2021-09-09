import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './uiSlice'
import citySlice from './citySlice'

export const store = configureStore({
  reducer: {
      ui: uiSlice.reducer,
        city: citySlice.reducer,
  },
})