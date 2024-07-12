// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createApi } from '@reduxjs/toolkit/query/react'
import { AuthResponse, LoginInput } from '@/types/auth.type'
import Cookies from 'js-cookie'

import customFetchBase from './customFetchBase'
import { userApi } from './userApi'
import { setAccessToken } from '../features/auth.slice'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    loginUser: build.mutation<AuthResponse, LoginInput>({
      query(data) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log('DATA =>', data)
          await dispatch(setAccessToken(data.data.access_token))
          await dispatch(userApi.endpoints.getMe.initiate(null, { forceRefetch: true }))
          Cookies.set('cokhi_isAuthenticated', 'true')
          Cookies.set('cokhi_accessToken', data.data.access_token)
          Cookies.set('cokhi_userRole', data.data.role)
        } catch (error) {
          console.error('Error in loginUser:', error)
        }
      }
    }),
    registerAccount: build.mutation<AuthResponse, { email: string; phone: string; nameCompany: string }>({
      query(data) {
        return {
          url: 'user/addCompanies',
          method: 'POST',
          body: data
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // await dispatch(setAccessToken(data.access_token))
          // await dispatch(userApi.endpoints.getMe.initiate(null, { forceRefetch: true }))
          // Cookies.set('access_token', data.access_token)
        } catch (error) {
          console.error('Error in registerAccount:', error)
        }
      }
    })
  })
})

export const { useLoginUserMutation, useRegisterAccountMutation } = authApi
