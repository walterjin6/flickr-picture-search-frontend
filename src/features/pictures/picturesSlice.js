import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: '',
}
const picturesSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setInput(state, action) {
      state.input = action.payload
    },
  },
})

export const { setInput } = picturesSlice.actions

export default picturesSlice.reducer
