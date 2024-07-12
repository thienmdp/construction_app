import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}
interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error: ', error, errorInfo)
  }
  public render() {
    if (this.state.hasError) {
      return (
        <div className='flex items-center justify-center w-full h-screen px-16 bg-gray-200 md:px-0'>
          <div className='flex flex-col items-center justify-center px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-2xl md:px-8 lg:px-24'>
            <p className='text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl'>500</p>
            <p className='mt-4 text-2xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-5xl'>Server Error</p>
            <p className='pb-4 mt-4 text-center text-gray-500 border-b-2'>
              Whoops, something went wrong on our servers.
            </p>
            <a
              href='/'
              className='flex items-center px-4 py-2 mt-6 space-x-2 text-gray-100 transition duration-150 bg-blue-600 rounded hover:bg-blue-700'
              title='Return Home'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span>Return Home</span>
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
