import PopupZalo from '@/components/PopupZalo'
import Footer from './components/Landing/Footer'
import Header from './components/Landing/Header'
interface Props {
  children?: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
      <Header />
      <div className='p-8 mt-[77px]'>{children}</div>
      <Footer />
      <PopupZalo />
    </div>
  )
}
