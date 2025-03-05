import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/utils'
import ScrollAnimationWrapper from '@/components/Landing/ScrollAnimationWrapper'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const navigate = useNavigate()

  return (
    <div id='about' className='min-h-[80vh] flex items-center '>
      <ScrollAnimationWrapper>
        <motion.div
          className='px-4 mx-auto text-center sm:px-6 lg:px-8'
          variants={scrollAnimation}
          initial='hidden'
          animate='show'
        >
          <motion.h1
            className='mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl'
            variants={scrollAnimation}
          >
            Công cụ đánh giá{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red_app to-orange_app'>
              HIỆU QUẢ NĂNG LƯỢNG
            </span>{' '}
            cho Văn phòng cao tầng
          </motion.h1>

          <motion.p className='max-w-3xl mx-auto mb-8 text-lg text-gray-600 md:text-xl' variants={scrollAnimation}>
            Tối ưu hóa chi phí vận hành và nâng cao hiệu suất năng lượng cho tòa nhà của bạn thông qua giải pháp phân
            tích dữ liệu thông minh và đề xuất cải tiến dựa trên AI.
          </motion.p>

          <motion.div className='flex justify-center' variants={scrollAnimation}>
            <button
              onClick={() => navigate('/free-trial')}
              className='px-8 py-4 text-base font-medium text-white transition duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-red_app to-orange_app hover:shadow-xl hover:-translate-y-1 hover:scale-105'
            >
              Dùng thử miễn phí
            </button>
          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  )
}

export default Hero
