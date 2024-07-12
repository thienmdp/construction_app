import { Icons, toast } from 'react-toastify'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { extractErrorMessage, getAccessToken } from '@/utils/utils'
import path from '@/constants/path'
import { baseURLAPI } from '@/constants/url'

import { RootState } from '../store'
import { logOut } from '../features/auth.slice'

const baseUrl = baseURLAPI
const mutex = new Mutex()
const pathPublic =
  window.location.pathname === path.register ||
  window.location.pathname === path.landing ||
  window.location.pathname === path.vickee ||
  window.location.pathname === path.smentor ||
  window.location.pathname === path.spdv

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authState.access_token || getAccessToken()
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
      headers.set('Content-Type', 'application/json')
    }
    return headers
  }
})

const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)
  console.log('resultCallAPI', result)
  if (result.error) {
    // 'Check not loggin || refresh token'
    if (extractErrorMessage(result.error) === 'Internal Server Error') {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        const resolveAfter2Sec = new Promise((resolve) => setTimeout(resolve, 2000))
        try {
          const refreshResult = await baseQuery({ credentials: 'include', url: 'auth/refresh' }, api, extraOptions)
          if (refreshResult.data) {
            result = await baseQuery(args, api, extraOptions)
          } else {
            api.dispatch(logOut())
            if (!pathPublic) {
              toast.promise(resolveAfter2Sec, {
                pending: 'Đang lấy dữ liệu...'
              })
              toast.info('Vui lòng đăng nhập lại!', { autoClose: 1600, delay: 2600 })
            }
          }
        } finally {
          release()
        }
      } else {
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
      }
    } else {
      if (pathPublic) {
        return result
      } else {
        if (extractErrorMessage(result.error) === 'Unauthorized') {
          toast.error(`Error: Đăng nhập thất bại`)
          // api.dispatch(logOut())
        } else {
          toast.error(extractErrorMessage(result.error))
        }
      }
    }
  }

  return result
}

export default customFetchBase
