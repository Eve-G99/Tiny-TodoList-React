import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './taskSlice'
import optionSlice from './optionSlice'

const store = configureStore({
  reducer: {
    tasks: taskSlice,
    options: optionSlice
  }
})

export default store