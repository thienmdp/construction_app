// import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Branchs, GETME } from '@/types/user.type'
import { getAccessToken } from '@/utils/utils'
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export interface InitialState {
  isAuthenticated: boolean
  user: GETME | null
  access_token: string | null
}

const initialState: InitialState = {
  isAuthenticated: Cookies.get('cokhi_isAuthenticated') === 'true',
  user: Cookies.get('cokhi_currentUser') ? JSON.parse(Cookies.get('cokhi_currentUser')!) : null,
  access_token: getAccessToken()
}
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
      // state.listBranch = action.payload?.companies?.branchs || []
    },
    logOut: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.access_token = null
      Cookies.remove('cokhi_currentUser')
      Cookies.remove('cokhi_accessToken')
      Cookies.remove('cokhi_userRole')
      Cookies.remove('cokhi_isAuthenticated')
    }
  }
})

export default auth.reducer

export const { logOut, setUser, setAccessToken, setAuthenticated } = auth.actions
