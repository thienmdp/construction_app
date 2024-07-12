type Role = 'user' | 'admin'

export type CreateUserInput = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  branchId: number
  departmentId: number
  roleId?: number
  // privileges: privilegesType
  // privileges: {
  //   functionApp: number
  //   privilegesOption: number
  //   lock?: boolean
  // }[]
}

export interface GETME {
  id: number
  role: string
  firstName: string
  lastName: string
  avatar: string
  birth: string
  gender: string
  phone: string
  job: string | null
  education: string | null
  age: string | null
  createdAt: string
  updatedAt: string
  email: string
  absoluteAvatarLink: string
  companies?: Companies
  branch: BranchItem
  department?: DepartmentUser
  rolePermission?: RolePermission
}
export interface User {
  id: string
  key?: string
  companies: Companies
  confirmationCodeExpireAt?: string
  oneTimePassword?: string
  role: Role[] | string
  email: string
  disabled?: boolean
  userProfile?: UserProfile
  usersPermission?: {
    id: number
    branch: BranchItem
    department: DepartmentUser
    rolePermission: RolePermission
  }[]
  privileges?: {
    lock?: boolean
    group?: any
  }
}
export interface UserProfile {
  id: number
  absoluteAvatarLink: string
  age: false
  avatar: string
  birth: string
  createdAt: string
  education: string
  firstName: string
  fullName: string
  gender: string
  guardian: string
  guardianName: string
  lastName: string
  permanentAddress: string
  phone: string
  selfDescribed: string
}
export interface DepartmentUser {
  id: number
  name: string
  description: string
  address: string
  phone: string
  createdAt: string
  updatedAt: string
}
export interface Companies {
  id: number
  codeCompany: string
  nameCompany: string
  pathCompany: string
  phoneCompany: string
  email: string
  addressZip: string
  addressState: string
  addressCity: string
  addressDistrict: string
  addressStreet: string
  addressComplement: string
  website: string
  industry: string
  createdAt: string
  updatedAt: string
  branchs: Branchs[]
}
export interface Branchs {
  id: number
  uuid: string
  nameBranch: string
  description: string
  disabled: boolean
  department: {
    id: number
    name: string
    description: string
    address: string
    phone: string
    createdAt: string
    updatedAt: string
    roles?: []
  }[]
}

export interface Department {
  id: number
  name: string
  description: string
  address: string | null
  phone: string | null
  createdAt: string
  updatedAt: string
  branchs: BranchItem
  roles: [
    {
      id: number
      roleName: string
      role: string
      relationId: any
      description: string
      disabled: boolean
      fulBranch: boolean
    }
  ]
}
export interface BranchItem {
  id: number
  uuid: string
  nameBranch: string
  description: string
  disabled: boolean
}
export interface RolePermission {
  id: number
  roleName: string
  role: string
  relationId: null
  description: string
  disabled: boolean
  fulBranch: boolean
}
