import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'status',
  initialState: { token: null, isLoggedIn: false },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    isLoggedInOn: (state) => {
      state.isLoggedIn = true
    },
    isLoggedInOff: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const { setCredentials, isLoggedInOn, isLoggedInOff } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
