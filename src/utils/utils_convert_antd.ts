import { DataNode } from 'antd/es/tree'
interface CustomDataNode extends DataNode {
  id?: string
  group?: string
  value?: string
}
interface PermissionObject {
  [key: string]: boolean
}

interface Permissions {
  [key: string]: PermissionObject
}
export const convertFunctionsKeysAntd = (data: any[]): CustomDataNode[] => {
  if (Array.isArray(data)) {
    return data.map(
      (node, index): CustomDataNode => ({
        title: node.description || node.name,
        key: node.key || node.id,
        id: node.id,
        value: node.id,
        group: node.group || node.groupKey,
        children: node.privileges
          ? convertFunctionsKeysAntd(node.privileges)
          : node.works
            ? convertFunctionsKeysAntd(node.works)
            : [],
        disableCheckbox: node.disableCheckbox
      })
    )
  } else {
    console.error('Invalid data type for convertFunctionsKeysAntd, expected an array.')
    return []
  }
}
export const convertKeyLabelData = (data: any) => {
  if (Array.isArray(data)) {
    return data.map((item) => ({
      ...item,
      label: item.name || item.roleName || item.userProfile.fullName,
      value: item.id,
      disabled: false
    }))
  } else {
    console.error('Invalid data type for convertFunctionsKeysAntd, expected an array.')
    return []
  }
}

export const convertPrivilageRole = (permissions: Permissions): string[] => {
  const validPermissions: string[] = []

  Object.entries(permissions).forEach(([group, perms]) => {
    const allTrue = Object.values(perms).every((value) => value === true)
    if (allTrue) {
      // Nếu tất cả giá trị trong group đều là true, thêm key của group
      validPermissions.push(group)
    } else {
      // Nếu không, chỉ thêm những key con mà giá trị là true
      Object.entries(perms).forEach(([subKey, value]) => {
        if (value === true) {
          validPermissions.push(`${subKey}`)
        }
      })
    }
  })

  return validPermissions
}

/**
 * Handle filter select antd w option parent
 *  options={[
      {
        label: <span>manager</span>,
        title: 'manager',
        options: [
          { label: 'FB Manager', value: 'a1' },
          { label: 'HK Manager', value: 'a2' },
          { value: 'disabled', label: 'Admin', disabled: true }
        ]
      },
      {
        label: <span>engineer</span>,
        title: 'engineer',
        options: [
          { label: 'IT Support', value: 'a3' },
          { label: 'abc...', value: 'a4' }
        ]
      }
    ]}
 * 
 * const filterOption = (
    input: string,
    option?: {
      label: React.JSX.Element
      title: string
      options: {
        label: string
        value: string
        disabled?: boolean
      }[]
    }
  ): boolean => {
    if (option && option.options) {
      return option.options.some((subOption) => subOption.label.toLowerCase().includes(input.toLowerCase()))
    }
    return false
  }
 */
