import { styled } from 'styled-components'

const Styled = styled.div`
  #title {
    font-family: 'Bungee', cursive;
  }
`
function Page_404() {
  const handleBack = () => {
    window.history.back()
  }
  return (
    <Styled>
      <div className='flex flex-col items-center justify-center w-full my-32 bg-white h-fit'>
        <h1 id='title' className='font-extrabold tracking-wider text-[#1f1f1f] text-[13rem]'>
          404
        </h1>
        <div className='bg-blue_app text-white px-2 py-1 text-lg font-bold rounded -rotate-6 absolute mt-[-150px]'>
          Page not found
        </div>
        <div className='mt-5 text-center'>
          <p className='flex items-end justify-center text-2xl font-semibold text-[#1f1f1f] md:text-3xl'>
            <span className='text-5xl'>🚧</span> Xin lỗi, chúng tôi không thể tìm thấy trang này.
          </p>
          <p className='mt-4 mb-8 text-lg font-semibold text-[#1f1f1f]  '>
            Nhưng đừng lo lắng, bạn có thể tìm thấy rất nhiều thứ khác trên trang chủ của chúng tôi.
          </p>
        </div>
        {/* <button className='mt-5'>
          <div className='relative inline-block text-sm font-medium hover:text-gray-600 group active:text-gray-600 focus:outline-none focus:ring'>
            <span className='absolute inset-0 transition-transform translate-x-1 translate-y-1 rounded-lg bg-blue_app group-hover:translate-y-0 group-hover:translate-x-0'></span>
            <span
              onClick={handleBack}
              className='relative block px-8 py-2 bg-[#1f1f1f] hover:opacity-95 rounded-lg border border-current'
            >
              <p className='flex items-center justify-center h-8 text-lg font-semibold text-white'>
                Quay lại trang trước đó
              </p>
            </span>
          </div>
        </button> */}
      </div>
    </Styled>
  )
}

export default Page_404
