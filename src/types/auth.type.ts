import { SuccessResponse } from './utils.type'

type Role = 'user' | 'admin'

export type AuthResponse = SuccessResponse<{
  message?: string
  access_token: string
  expiresIn: string
  role: Role
  branchs: {
    id: number
    nameBranch: string
  }[]
}>

// export type AuthResponse = {
//   data: {
//     message?: string
//     access_token: string
//     expiresIn: string
//     role: Role
//   }
// }

export type LoginInput = {
  username: string
  password: string
}
