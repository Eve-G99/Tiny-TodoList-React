import { createSlice } from '@reduxjs/toolkit'

export const optionSlice = createSlice({
  name: 'options',
  initialState: {
    value: {
        completed: 'all',
        sortBy: 'dueDate',
        sortDirection: 'ascending',
    }
  },
  reducers: {
    setOptions: (state, action) => {
        state.value = action.payload
    },
  }
})

export const { setOptions } = optionSlice.actions
export default optionSlice.reducer