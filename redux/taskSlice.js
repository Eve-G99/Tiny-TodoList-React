import { createSlice } from '@reduxjs/toolkit'
import { sort } from '../utils'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: [],
    error: null
  },
  reducers: {
    getAllTasks: (state, action) => {
      if(action.payload.error){
        state.error = action.payload.error
        return
      }
      state.value = action.payload.data
    },
    appendTask: (state, action) => {
      if(action.payload.error){
        state.error = action.payload.error
        return
      }
      state.value.push(action.payload.data)
      state.error = null
    },
    patchTask: (state, action) => {
      if(action.payload.error){
        state.error = action.payload.error
        return
      }
      state.value = state.value.map(task => task.id === action.payload.data.id ? action.payload.data : task)
      state.error = null
    },
    removeTask: (state, action) => {
      if(action.payload.error){
        state.error = action.payload.error
        return
      }
      state.value = state.value.filter(task => task.id !== action.payload.id)
      state.error = null
    },
    sortTasksBy: (state, action) => {
      state.value = sort(state.value, action.payload.sortBy, action.payload.sortDirection)
    },
    removeError: (state) => {
      state.error = null
    },
  }
})

// Action creators are generated for each case reducer function
export const { getAllTasks, appendTask, patchTask, removeTask, sortTasksBy, removeError } = taskSlice.actions

export default taskSlice.reducer