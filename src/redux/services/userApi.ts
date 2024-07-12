import { createApi } from '@reduxjs/toolkit/query/react'
import { GETME } from '@/types/user.type'
import Cookies from 'js-cookie'

import customFetchBase from './customFetchBase'
import { logOut, setAuthenticated, setUser } from '../features/auth.slice'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  tagTypes: ['User'],
  endpoints: (build) => ({
    getMe: build.query<{ data: GETME }, null>({
      query: () => 'user/token',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data.data))
          dispatch(setAuthenticated(true))
          Cookies.set('cokhi_currentUser', JSON.stringify(data.data))
        } catch (error) {
          dispatch(setUser(null))
          dispatch(setAuthenticated(false))
          dispatch(logOut())
        }
      }
    })
  })
})
export const { useGetMeQuery } = userApi
