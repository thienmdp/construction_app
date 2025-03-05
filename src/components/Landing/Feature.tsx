import React, { useMemo } from 'react'
import getScrollAnimation from '@/utils/utils'
import ScrollAnimationWrapper from '@/components/Landing/ScrollAnimationWrapper'
import { motion } from 'framer-motion'

const features = [
  'Phân tích chi tiết mức tiêu thụ năng lượng theo thời gian thực',
  'Báo cáo đánh giá hiệu suất năng lượng tự động',
  'Đề xuất giải pháp tối ưu dựa trên AI',
  'So sánh benchmark với các tòa nhà tương tự',
  'Dự báo chi phí và lợi ích khi áp dụng giải pháp',
  'Theo dõi và đo lường kết quả cải thiện'
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='px-6 mx-auto mt-8 mb-6 sm:mt-14 sm:mb-40 sm:px-8' id='feature'>
      <div className='grid grid-flow-row grid-cols-1 gap-8 py-8 my-12 md:grid-flow-col md:grid-cols-2'>
        <ScrollAnimationWrapper className='flex justify-end w-full'>
          <motion.div className='w-full h-full p-4' variants={scrollAnimation}>
            <img
              src='/assets/Illustration2.png'
              alt='Energy Dashboard'
              className='rounded-lg shadow-lg'
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className='flex flex-col items-start justify-center w-full ' variants={scrollAnimation}>
            <h3 className='mb-6 text-3xl font-semibold leading-snug text-gray-900 lg:text-4xl'>
              Giải pháp toàn diện cho{' '}
              <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red_app to-orange_app'>
                quản lý năng lượng
              </span>
            </h3>
            <p className='my-2 mb-8 text-lg text-gray-600'>
              Chúng tôi cung cấp công cụ đánh giá hiệu quả năng lượng hiện đại, giúp tối ưu hóa chi phí vận hành và nâng
              cao hiệu suất sử dụng năng lượng cho tòa nhà của bạn.
            </p>
            <ul className='self-start space-y-4'>
              {features.map((feature, index) => (
                <motion.li
                  className='flex items-center space-x-3 text-gray-700 cursor-pointer'
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.2 }
                  }}
                >
                  <svg className='flex-shrink-0 w-5 h-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default Feature
