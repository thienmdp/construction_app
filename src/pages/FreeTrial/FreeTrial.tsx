import React from 'react'
import TableData from './components/TableData'

export default function FreeTrial() {
  return (
    <div className='max-w-screen-xl min-h-screen px-8 mx-auto xl:px-16'>
      <p className='mt-4 mb-8 text-3xl font-bold text-center text-red_app'>Danh sách công trình</p>
      <TableData />
    </div>
  )
}
