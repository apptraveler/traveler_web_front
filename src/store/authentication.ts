import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    token: '',
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuthToken } = auth.actions

export default auth.reducer