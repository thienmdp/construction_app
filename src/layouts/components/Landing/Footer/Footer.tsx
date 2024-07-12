const Footer = () => {
  return (
    <footer>
      <div className='max-w-6xl px-4 mx-auto sm:px-6'>
        <div className='grid gap-8 py-8 border-t border-gray-200 sm:grid-cols-12 md:py-12'>
          <div className='sm:col-span-12 lg:col-span-3'>
            <div className='mb-2'>
              <img src='/assets/logo.svg' height={100} width={100} alt='' />
            </div>
            <div className='text-sm text-gray-600'>
              <a
                href='#0'
                className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline'
              >
                Terms
              </a>{' '}
              ·{' '}
              <a
                href='#0'
                className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline'
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <p className='mb-2 font-medium text-gray-800'>Products</p>
            <ul className='text-sm'>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Web Studio
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  DynamicBox Flex
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Programming Forms
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Integrations
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Command-line
                </a>
              </li>
            </ul>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <p className='mb-2 font-medium text-gray-800'>Resources</p>
            <ul className='text-sm'>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Documentation
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Tutorials & Guides
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Blog
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Support Center
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <p className='mb-2 font-medium text-gray-800'>Company</p>
            <ul className='text-sm'>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Home
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  About us
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Company values
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Pricing
                </a>
              </li>
              <li className='mb-2'>
                <a href='#0' className='text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
            <p className='mb-2 font-medium text-gray-800'>Subscribe</p>
            <p className='mb-4 text-sm text-gray-600'>Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className='flex flex-wrap mb-4'>
                <div className='w-full'>
                  <label className='block text-sm sr-only' htmlFor='newsletter'>
                    Email
                  </label>
                  <div className='relative flex items-center max-w-xs'>
                    <input
                      id='newsletter'
                      type='email'
                      className='w-full px-3 py-2 pr-12 text-sm text-gray-800 form-input'
                      placeholder='Your email'
                      required
                    />
                    <button type='submit' className='absolute inset-0 left-auto' aria-label='Subscribe'>
                      <span
                        className='absolute inset-0 right-auto w-px my-2 -ml-px bg-gray-300'
                        aria-hidden='true'
                      ></span>
                      <svg
                        className='w-3 h-3 mx-3 text-orange-600 fill-current shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                          fillRule='nonzero'
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center py-4 border-t border-gray-200 md:flex-row md:justify-between md:py-8'>
          <ul className='flex order-1 mb-0 ml-4'>
            <li>
              <a
                href='#0'
                className='flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100'
                aria-label='Twitter'
              >
                <svg className='w-8 h-8 fill-current' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <path d='m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z' />
                </svg>
              </a>
            </li>
            <li className='ml-4'>
              <a
                href='#0'
                className='flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100'
                aria-label='Github'
              >
                <svg className='w-8 h-8 fill-current' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z' />
                </svg>
              </a>
            </li>
            <li className='ml-4'>
              <a
                href='#0'
                className='flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100'
                aria-label='Facebook'
              >
                <svg className='w-8 h-8 fill-current' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' />
                </svg>
              </a>
            </li>
          </ul>

          <div className='mb-4 ml-4 mr-4 text-sm text-gray-600 md:mb-0'>&copy; mdpt_. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
