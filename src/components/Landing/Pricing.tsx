import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from '@/components/Landing/ScrollAnimationWrapper'
import getScrollAnimation from '@/utils/utils'
import { Button } from 'antd'

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='px-4 mx-auto mt-8 mb-6 sm:px-6 lg:px-8 max-w-7xl' id='pricing'>
      <div className='flex flex-col justify-center w-full text-center'>
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className='mb-4 text-3xl font-semibold leading-snug text-gray-900 lg:text-4xl'
          >
            Lựa chọn gói giải pháp phù hợp với{' '}
            <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-red_app to-orange_app'>
              doanh nghiệp của bạn
            </span>
          </motion.h3>
          <motion.p variants={scrollAnimation} className='mb-12 text-lg text-gray-600'>
            Chúng tôi cung cấp các gói dịch vụ linh hoạt, đáp ứng nhu cầu của mọi quy mô doanh nghiệp
          </motion.p>
        </ScrollAnimationWrapper>

        <div className='grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3 mt-14'>
          <ScrollAnimationWrapper className='flex justify-center'>
            <motion.div
              variants={scrollAnimation}
              className='flex flex-col justify-between w-full max-w-sm p-6 border-2 border-gray-200 sm:p-8 rounded-xl'
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div>
                <h4 className='mb-3 text-xl font-semibold text-gray-800 sm:text-2xl'>Cơ bản</h4>
                <p className='mb-4 text-gray-600 sm:mb-6'>Giải pháp khởi đầu cho doanh nghiệp vừa và nhỏ</p>
                <ul className='mb-6 space-y-3 text-left sm:mb-8 sm:space-y-4'>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Giám sát năng lượng cơ bản
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Báo cáo hàng tháng
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Hỗ trợ qua email
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <p className='mb-4 text-2xl font-bold sm:text-3xl'>
                  2.000.000đ<span className='text-base font-normal sm:text-lg'>/tháng</span>
                </p>
                <Button size='large' type='default' block>
                  Chọn gói này
                </Button>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className='flex justify-center'>
            <motion.div
              variants={scrollAnimation}
              className='flex flex-col justify-between w-full max-w-sm p-6 border-2 sm:p-8 border-orange_app rounded-xl bg-gradient-to-b from-white to-orange-50'
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div>
                <h4 className='mb-3 text-xl font-semibold text-gray-800 sm:text-2xl'>Tiêu chuẩn</h4>
                <p className='mb-4 text-gray-600 sm:mb-6'>Phù hợp với doanh nghiệp đang phát triển</p>
                <ul className='mb-6 space-y-3 text-left sm:mb-8 sm:space-y-4'>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Tất cả tính năng gói Cơ bản
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Phân tích chi tiết theo thời gian thực
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Đề xuất tối ưu hóa tự động
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Hỗ trợ 24/7
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <p className='mb-4 text-2xl font-bold sm:text-3xl'>
                  5.000.000đ<span className='text-base font-normal sm:text-lg'>/tháng</span>
                </p>
                <Button size='large' type='primary' block>
                  Chọn gói này
                </Button>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className='flex justify-center'>
            <motion.div
              variants={scrollAnimation}
              className='flex flex-col justify-between w-full max-w-sm p-6 border-2 border-gray-200 sm:p-8 rounded-xl'
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div>
                <h4 className='mb-3 text-xl font-semibold text-gray-800 sm:text-2xl'>Cao cấp</h4>
                <p className='mb-4 text-gray-600 sm:mb-6'>Giải pháp toàn diện cho doanh nghiệp lớn</p>
                <ul className='mb-6 space-y-3 text-left sm:mb-8 sm:space-y-4'>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Tất cả tính năng gói Tiêu chuẩn
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    AI dự đoán và cảnh báo sớm
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Tích hợp API tùy chỉnh
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <svg className='w-5 h-5 mr-2 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                    </svg>
                    Tư vấn chuyên sâu
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <p className='mb-4 text-2xl font-bold sm:text-3xl'>
                  10.000.000đ<span className='text-base font-normal sm:text-lg'>/tháng</span>
                </p>
                <Button size='large' type='default' block>
                  Chọn gói này
                </Button>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default Pricing
