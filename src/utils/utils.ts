import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export const getAccessToken = () => {
  const accessTokenString = Cookies.get('shms_accessToken')
  if (accessTokenString) {
    try {
      const accessToken = accessTokenString
      return accessToken
    } catch (error) {
      console.error('Error parsing access token from cookie:', error)
      return null
    }
  }
  return null
}

export const myPromiseHandle = (timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5
      if (success) {
        resolve('Thành công!')
      } else {
        reject(new Error('Thất bại!'))
      }
    }, timeout)
  })
}

export function HandleSubmitPromise({ promise, title, thenFunc }: any) {
  toast
    .promise(promise, {
      pending: 'Đang xử lý...',
      success: title,
      error: {
        render({ data }) {
          return extractErrorMessage(data)
        }
      }
    })
    .then((response) => {
      thenFunc()
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

export function extractErrorMessage(error: any) {
  // console.log('abc', error)
  if (error instanceof Error) return error.message
  return error?.data?.message || error.error || 'Có lỗi xảy ra trong quá trình xử lý.'
}

export const removeSpecialCharacter = (str: string) =>
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`
}
export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i-')
  return arr[arr.length - 1]
}

export default function getScrollAnimation() {
  return {
    offscreen: {
      y: 150,
      opacity: 0
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration
      }
    })
  }
}

export const convertGrade = (score: number) => {
  if (score > 75) {
    return 'A'
  } else if (score >= 50) {
    return 'B'
  } else {
    return 'C'
  }
}
