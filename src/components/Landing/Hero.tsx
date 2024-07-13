import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/utils'
import ScrollAnimationWrapper from '@/components/Landing/ScrollAnimationWrapper'
import { useNavigate } from 'react-router-dom'

const Hero = ({
  listUser = [
    {
      name: 'Users',
      number: '390',
      icon: '/assets/Icon/heroicons_sm-user.svg'
    },
    {
      name: 'Locations',
      number: '20',
      icon: '/assets/Icon/gridicons_location.svg'
    },
    {
      name: 'Server',
      number: '50',
      icon: '/assets/Icon/bx_bxs-server.svg'
    }
  ]
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const navigate = useNavigate()
  return (
    <div id='about'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col md:grid-rows-1 sm:grid-cols-2 sm:py-16'
          variants={scrollAnimation}
        >
          <div className='flex flex-col items-start justify-center row-start-2 sm:row-start-1'>
            <h1 className='font-sans text-3xl font-extrabold leading-tight md:text-4xl -tracking-tighter text-black-600'>
              Công cụ đánh giá{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-red_app to-orange_app'>
                HIỆU QUẢ NĂNG LƯỢNG
              </span>{' '}
              cho Văn phòng cao tầng
            </h1>

            <p className='mt-4 mb-6 text-black-500'>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard
              tote bag.
            </p>
            <div className='flex justify-start w-full mt-4'>
              <button
                className='relative w-[220px] inline-flex items-center justify-center p-0.5 xs:mr-0 mb-2 sm:mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-200 via-orange_app to-red_app group-hover:from-orange-200 group-hover:via-orange_app group-hover:to-red_app       focus:ring-4 focus:outline-none focus:ring-orange-100  transition duration-300 ease-in-out delay-0 cursor-pointer hover:-translate-y-1 hover:scale-110'
                onClick={() => navigate('/free-trial')}
              >
                <a
                  href='#0'
                  className='relative w-full px-8 py-3 transition-all duration-75 ease-in bg-white rounded-md group-hover:bg-opacity-0'
                >
                  Get Started
                </a>
              </button>
            </div>
          </div>
          <div className='flex w-full '>
            <motion.div className='w-full h-auto' variants={scrollAnimation}>
              <img
                src='/assets/philong_dn.jpg'
                alt='VPN Illustrasi'
                width={612}
                height={383}
                className='max-h-[600px] object-cover'
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className='relative flex w-full'>
        <ScrollAnimationWrapper className='z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg sm:grid-flow-row sm:grid-cols-3 py-9 sm:divide-y-0 sm:divide-x-2 bg-white-500'>
          {listUser.map((listUsers, index) => (
            <motion.div
              className='flex items-center justify-start w-8/12 px-4 py-4 mx-auto sm:justify-center sm:py-6 sm:w-auto sm:mx-0'
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className='flex w-40 mx-auto sm:w-auto'>
                <div className='flex items-center justify-center w-12 h-12 mr-6 bg-orange-100 rounded-full'>
                  <img src={listUsers.icon} className='w-6 h-6' />
                </div>
                <div className='flex flex-col'>
                  <p className='text-xl font-bold text-black-600'>{listUsers.number}+</p>
                  <p className='text-lg text-black-500'>{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className='absolute top-0 left-0 right-0 w-11/12 h-64 mx-auto mt-8 bg-black-600 opacity-5 roudned-lg sm:h-48'
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
