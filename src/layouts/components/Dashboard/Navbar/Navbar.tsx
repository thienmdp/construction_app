import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Select } from 'antd'

import CardUser from '../../CardUser'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const { Option } = Select

export const Navbar = ({ open, setOpen }: Props) => {
  return (
    <div className='flex items-center fixed w-[-webkit-fill-available] justify-between px-5 py-2 bg-white border-b navbar border-divider z-50'>
      <div className='flex items-center'>
        <Button
          size='middle'
          aria-label='Menu'
          onClick={() => setOpen(!open)}
          icon={open ? <MenuFoldOutlined className='text-xl' /> : <MenuUnfoldOutlined className='text-xl' />}
        />
        <Breadcrumb
          className='ml-5'
          items={[
            {
              title: 'Dashboard'
            }
          ]}
        />
      </div>
      <div className='flex items-center'>
        <CardUser />
      </div>
    </div>
  )
}
