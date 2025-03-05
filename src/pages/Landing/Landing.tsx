import Feature from '@/components/Landing/Feature'
import Hero from '@/components/Landing/Hero'
import Pricing from '@/components/Landing/Pricing'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { animateScroll as scroll } from 'react-scroll'

export default function Landing() {
  useEffect(() => {
    scroll.scrollToTop({ duration: 300, smooth: true })
  }, [])
  return (
    <>
      <Helmet>
        <title>Construction Application</title>
        <meta name='description' content={`Construction app description`} />
      </Helmet>
      <div className='max-w-screen-xl min-h-screen mx-auto xl:px-16'>
        <Hero />
        <Feature />
        <Pricing />
      </div>
    </>
  )
}
