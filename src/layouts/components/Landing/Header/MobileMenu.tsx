import Cookies from 'js-cookie'
import { Link as RouterLink } from 'react-router-dom'
import React, { useState } from 'react'
import type { GetProp, MenuProps } from 'antd'
import { Button, Drawer, Menu, Space } from 'antd'
import MenuItem from 'antd/es/menu/MenuItem'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/redux/store'
import {
  CloseOutlined,
  ContactsOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  StarFilled,
  StarOutlined
} from '@ant-design/icons'
import { logOut } from '@/redux/features/auth.slice'
import { Link, animateScroll as scroll } from 'react-scroll'

type MenuItem = GetProp<MenuProps, 'items'>[number]

export const MobileMenu = () => {
  const dispatch = useDispatch()
  const user = useAppSelector((auth) => auth.authState.user)
  const [open, setOpen] = useState(false)
  const handleLogout = () => {
    dispatch(logOut())
  }
  const items: MenuItem[] = [
    {
      key: '1',
      label: (
        <RouterLink
          to={'/'}
          onClick={() => {
            setOpen(false)
            scroll.scrollToTop({ duration: 300, smooth: true }) // Scroll to top smoothly after route change
          }}
        >
          Home
        </RouterLink>
      ),
      icon: <HomeOutlined />,
      onClick: () => setOpen(false)
    },
    {
      key: '2',
      label: (
        <Link to={'contact'} spy={true} smooth={true} duration={300} onClick={() => setOpen(false)}>
          Contact
        </Link>
      ),
      icon: <ContactsOutlined />,
      onClick: () => setOpen(false)
    },
    {
      key: '3',
      label: (
        <RouterLink
          to={'/free-trial'}
          onClick={() => {
            setOpen(false)
          }}
        >
          Free Trial
        </RouterLink>
      ),
      icon: <CustomerServiceOutlined />,
      children: [
        {
          key: '4',
          label: (
            <RouterLink
              to={'/free-trial'}
              onClick={() => {
                setOpen(false)
              }}
            >
              Free Trial
            </RouterLink>
          ),
          icon: <StarFilled />,
          onClick: () => setOpen(false)
        },
        {
          key: '5',
          label: (
            <RouterLink
              to={'/#'}
              onClick={() => {
                setOpen(false)
              }}
            >
              Construction
            </RouterLink>
          ),
          icon: <StarOutlined />,
          onClick: () => setOpen(false)
        },
        {
          key: '6',
          label: (
            <RouterLink
              to={'/#'}
              onClick={() => {
                setOpen(false)
              }}
            >
              Construction
            </RouterLink>
          ),
          icon: <StarOutlined />,
          onClick: () => setOpen(false)
        }
      ],
      onClick: () => setOpen(false)
    },
    {
      key: 'link',
      label: (
        <RouterLink
          to={'/sign-in'}
          onClick={() => {
            setOpen(false)
            scroll.scrollToTop({ duration: 300, smooth: true })
          }}
        >
          {user ? 'Dashboard' : 'Sign In'}
        </RouterLink>
      ),
      icon: <LoginOutlined />,
      onClick: () => setOpen(false)
    },
    {
      label: (
        <div
          onClick={() => {
            setOpen(false)
            handleLogout()
          }}
        >
          Đăng xuất
        </div>
      ),
      className: user ? '' : '!hidden',
      icon: <LogoutOutlined />,
      key: '7',
      danger: true
    }
  ]

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className='block md:hidden'>
      <div className='-mr-1 rounded-full cursor-pointer hover:bg-gray-200'>
        <MenuOutlined className='p-2 text-lg' onClick={() => showDrawer()} />
      </div>
      <Drawer
        title='Menu'
        extra={
          <Space>
            <Button
              type='text'
              shape='circle'
              size='middle'
              icon={<CloseOutlined className='text-2xl hover:animate-spin11' />}
              onClick={onClose}
            />
          </Space>
        }
        styles={{ header: { maxHeight: '77px' }, body: { padding: '0px' } }}
        // bodyStyle={{ padding: '0px' }}
        // headerStyle={{ maxHeight: '77px' }}
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={open}
        key={'bottom'}
        width={'100%'}
      >
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode={'inline'} items={items} />
      </Drawer>
    </div>
  )
}
