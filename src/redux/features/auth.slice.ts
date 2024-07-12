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
  isAuthenticated: Cookies.get('Construction_isAuthenticated') === 'true',
  user: Cookies.get('Construction_currentUser') ? JSON.parse(Cookies.get('Construction_currentUser')!) : null,
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
      Cookies.remove('Construction_currentUser')
      Cookies.remove('Construction_accessToken')
      Cookies.remove('Construction_userRole')
      Cookies.remove('Construction_isAuthenticated')
    }
  }
})

export default auth.reducer

export const { logOut, setUser, setAccessToken, setAuthenticated } = auth.actions
