import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/utils'
import ScrollAnimationWrapper from '@/components/Landing/ScrollAnimationWrapper'
import { Button } from 'antd'
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
          <div className='flex flex-col items-start justify-center row-start-2  sm:row-start-1'>
            <h1 className='text-3xl font-medium leading-normal lg:text-4xl xl:text-5xl text-black-600'>
              Công cụ đánh giá <strong>Công Trình</strong>.
            </h1>
            <p className='mt-4 mb-6 text-black-500'>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard
              tote bag.
            </p>
            <Button size='large' type='primary' onClick={() => navigate('/free-trial')}>
              Get Started
            </Button>
          </div>
          <div className='flex w-full'>
            <motion.div className='w-full h-auto' variants={scrollAnimation}>
              <img src='/assets/Illustration1.png' alt='VPN Illustrasi' width={612} height={383} />
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
