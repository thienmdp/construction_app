import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Sidebar from './components/Dashboard/Sidebar'
import Navbar from './components/Dashboard/Navbar'

interface Props {
  children?: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  const [open, setOpen] = useState<boolean>(true)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    function updateSize() {
      setOpen(window.innerWidth >= 640)
    }
    updateSize()
  }, [])

  useEffect(() => {
    function handleResize() {
      setOpen(window.innerWidth >= 640)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth < 640 && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)
    if (window.innerWidth < 640 && !open && sidebarRef.current) {
      sidebarRef.current.classList.add('hidden')
    } else {
      sidebarRef.current?.classList.remove('hidden')
    }
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <section className='flex w-full h-screen overflow-hidden bg-gray-50'>
      <div ref={sidebarRef}>
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className='w-full h-full overflow-y-auto'>
        <Navbar open={open} setOpen={setOpen} />
        <div className='p-8 mt-[59px]'>{children}</div>
      </div>
    </section>
  )
}
