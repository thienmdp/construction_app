import { sidebarData } from '@/data/dummy'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Sidebar = ({ open, setOpen }: Props) => {
  // const userInfo = useAppSelector((state) => state.authState.user)
  const location = useLocation()
  const pathname = location.pathname
  const ScreenSize = window.innerWidth
  const activeLink = `${!open && 'justify-center !w-fit'} bg-rose-100 flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98] `
  const normalLink = `${!open && 'justify-center !w-fit'} hover:bg-rose-100 flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98] `

  return (
    <div className={`sticky top-0 z-[50] h-screen ${open ? 'w-64 pr-3 ' : 'w-24 pr-1 '}`}>
      <div
        className={`fixed z-[50] h-full ${open ? 'w-64 pr-3 ' : 'w-24 pr-1 '} shrink-0 flex-col overflow-y-auto border-r border-divider bg-white py-2 transition-all  md:static md:ml-0 md:flex md:h-screen`}
      >
        <div className='flex justify-center px-2'>
          <img
            // src='/assets/svg/Logo_SHMS.svg'
            src='/assets/logo.svg'
            height={150}
            width={150}
            className={`mt-2 text-white transition-all duration-200 `}
            alt=''
          />
        </div>
        <div className='flex flex-col justify-between h-full'>
          <div className={`${open && 'pl-3'} flex flex-col gap-6 mt-9`}>
            {sidebarData.map((item, index) => (
              <Link
                className={`${!open && 'px-2'} max-w-full flex justify-center text-default-900 active:bg-none`}
                to={item.link}
                key={index}
                onClick={() => {
                  if (ScreenSize <= 640) {
                    setOpen(!open)
                  }
                }}
                title={!open ? item.name : ''}
              >
                <div className={pathname === item.link ? activeLink : normalLink}>
                  {item.icon}
                  <span className={`${!open && 'hidden'} text-red-900 ml-2 `}>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
          <div
            className={`${open ? 'px-8' : 'px-2'} flex items-center justify-center gap-6 pb-8 pt-16 md:pb-0 md:pt-10`}
          >
            <p className='text-xs text-center'>{open ? '© 2023 All Rights Reserved Developed by CVS' : '© SHMS'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
