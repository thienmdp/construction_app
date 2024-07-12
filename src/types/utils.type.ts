export interface ErrorResponse<Data> {
  message: string
  data?: Data
}
export interface SuccessResponse<Data> {
  message: string
  timestamp?: string
  data: Data
}
export interface TreeNode {
  title: string
  id: string
  key: string
  group: string
  children: TreeNode[]
  disableCheckbox?: boolean
}

//Cú pháp `-?` sẽ loại bỏ undefined của key optional
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
