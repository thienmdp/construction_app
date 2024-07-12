import { logOut } from '@/redux/features/auth.slice'
import { useAppSelector } from '@/redux/store'
import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, MenuProps } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

export default function CardUser() {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const user = useAppSelector((state) => state.authState.user)
  const handleLogout = () => {
    dispatch(logOut())
  }

  const items: MenuProps['items'] = [
    {
      label: <p>Hồ sơ</p>,
      icon: <UserOutlined />,
      key: '1'
    },
    {
      label: (
        <Link to={pathname.match('dashboard') ? '/' : '/dashboard'}>
          {pathname.match('dashboard') ? 'Landing' : 'Dashboard'}
        </Link>
      ),
      icon: <HomeOutlined />,
      key: '2'
    },
    {
      type: 'divider'
    },
    {
      label: <div onClick={() => handleLogout()}>Đăng xuất</div>,
      icon: <LogoutOutlined />,
      key: '3',
      danger: true
    }
  ]

  if (!user) return null
  return (
    <>
      <Dropdown menu={{ items }}>
        <Button
          type='text'
          className='h-full max-w-[150px] md:max-w-fit box-border'
          onClick={(e) => e.preventDefault()}
          icon={<Avatar className='-mr-2 sm:mr-0' src={user?.avatar || user?.absoluteAvatarLink} alt='avatar' />}
        >
          <span className=''>
            <span className='hidden sm:contents'>Hi, </span>
            <span className='hidden overflow-hidden sm:contents'>{user.email}</span>
          </span>
        </Button>
      </Dropdown>
    </>
  )
}
