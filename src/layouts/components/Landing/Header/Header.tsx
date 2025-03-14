import { Dropdown, Popover } from 'antd'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'
import { MenuProps } from 'antd/lib/menu'
import { useAppSelector } from '@/redux/store'
import path from '@/constants/path'

import CardUser from '../../CardUser'
import { MobileMenu } from './MobileMenu'

const Container = styled.div`
  .ant-drawer .antd-drawer-content-wrapper .antd-drawer-content .ant-drawer-body {
    padding: 0px !important;
  }
`
// const items: MenuProps['items'] = [
//   {
//     label: <Link to={path.landing}>Vickee</Link>,
//     className: 'min-w-[140px] text-center',
//     key: '1'
//   },
//   {
//     label: <Link to={path.landing}>S.Mentor</Link>,
//     className: 'min-w-[140px] text-center',
//     key: '2'
//   },
//   {
//     label: <Link to={path.landing}>Gói sản phẩm dịch vụ</Link>,
//     className: 'min-w-[140px] text-center',
//     key: '3'
//   }
// ]

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [scrollActive, setScrollActive] = useState(false)
  const user = useAppSelector((auth) => auth.authState.user)
  useEffect(() => {
    localStorage.setItem('preferredTheme', 'light')
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])
  return (
    <header
      className={
        'fixed top-0 z-50 w-full border-b-1 transition-all duration-250 ease-out' +
        (scrollActive ? ' pt-0 shadow-md' : '')
      }
    >
      <nav className='bg-white border-gray-200 '>
        <Container className='flex items-center justify-between px-6 py-4 mx-auto containerr max-w-6xl min-h-[77px]'>
          <RouterLink
            to={path.landing}
            className='flex items-center'
            onClick={() => scroll.scrollToTop({ duration: 300, smooth: true })}
          >
            <img src='/assets/logo.svg' className='w-auto h-auto' height={150} width={150} alt='logo' />
          </RouterLink>
          <ul className=' items-center justify-around w-[300px] hidden md:flex'>
            <li>
              <Link
                className={
                  'p-2 px-3 mx-2 cursor-pointer animation-hover inline-block relative w-max ' +
                  (activeLink === 'about'
                    ? ' text-orange_app animation-active '
                    : ' text-black-500 hover:text-orange_app ')
                }
                activeClass='active'
                to={'about'}
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => scroll.scrollToTop({ duration: 300, smooth: true })}
                onSetActive={() => {
                  setActiveLink('about')
                }}
                aria-current='page'
              >
                Trang chủ
              </Link>
            </li>
            <li className='relative cursor-pointer group'>
              <Link
                activeClass='active'
                to='feature'
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                onSetActive={() => {
                  setActiveLink('feature')
                }}
                className={
                  'p-2 px-3 mx-2 cursor-pointer animation-hover inline-block relative w-max ' +
                  (activeLink === 'feature'
                    ? ' text-orange_app animation-active '
                    : ' text-black-500 hover:text-orange_app ')
                }
              >
                Tính năng
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='pricing'
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={() => {
                  setActiveLink('pricing')
                }}
                href='#/'
                className={
                  'p-2 px-3 mx-2 cursor-pointer animation-hover inline-block relative w-max ' +
                  (activeLink === 'pricing'
                    ? ' text-orange_app animation-active '
                    : ' text-black-500 hover:text-orange_app ')
                }
              >
                Liên hệ
              </Link>
            </li>
          </ul>
          <div className='flex items-center '>
            <span className='hidden md:block'>
              {user && <CardUser />}
              {!user && (
                // <Link
                //   className='text-orange-600 cursor-pointer hover:underline underline-offset-1 hover:text-orange_app'
                //   to={'/sign-in'}
                //   onClick={() => scroll.scrollToTop({ duration: 300, smooth: true })}
                // >
                //   Login
                // </Link>
                <RouterLink
                  to={'/free-trial'}
                  className='px-2 py-2 text-sm font-medium text-white transition duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-red_app to-orange_app hover:shadow-xl'
                >
                  Dùng thử miễn phí
                </RouterLink>
              )}
            </span>
            <MobileMenu />
          </div>
        </Container>
      </nav>
    </header>
  )
}
