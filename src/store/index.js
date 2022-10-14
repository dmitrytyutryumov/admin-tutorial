import { configureStore } from '@reduxjs/toolkit'
import { default as puschasesReducer } from './reducers'

export const store = configureStore({
  reducer: {
    puschases: puschasesReducer,
  },
})
