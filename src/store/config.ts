import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@store/authentication'

export default configureStore({
  reducer: {
    auth: authReducer
  },
})