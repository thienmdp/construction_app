import React from 'react'

const PopupZalo = () => {
  return (
    <div className='h-12 w-12 min-h-12 min-w-12 fixed bottom-[40px] left-[80%] xs:left-[84%] sm:left-[86%] md:left-[94%] z-[999] flex items-center justify-center rounded-full bg-[#2962ff] text-[3rem]'>
      <div className='zalozoomzoom bg-[#2962ff]'></div>
      <div className='zalozoomzoom bg-[#2962ff]'></div>
      <div className='zalozoomzoom bg-[#2962ff]'></div>
      <div className='zalozoomzoom bg-[#2962ff]'></div>
      <a href='https://zalo.me/0782222884' target='_blank' rel='noreferrer'>
        <img src='/assets/svg/zalowidget.svg' alt='logo' height={50} width={50} className='-ml-[1px]' />
      </a>
    </div>
  )
}

export default PopupZalo
