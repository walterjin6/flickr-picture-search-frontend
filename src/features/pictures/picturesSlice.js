import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tag: 'sun',
}
const picturesSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setTag(state, action) {
      state.tag = action.payload
    },
  },
})

export const { setTag } = picturesSlice.actions

export default picturesSlice.reducer
