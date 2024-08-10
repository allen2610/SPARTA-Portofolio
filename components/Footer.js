import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-blue-500 p-20 lg:px-[400px] text-white '>
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          Here are my contacts!^^
        </div>
        <div>
          <div className='flex'>
            <div className='px-2 font-semibold'>Email:</div>
            <div>jessicaallen.lim@gmail.com</div>
          </div>
          <div className='flex'>
            <div className='px-2 font-semibold'>Instagram:</div>
            <Link href="https://www.instagram.com/jessica_jiaen/">@jessica_jiaen</Link>
          </div>
          <div className='flex'>
            <div className='px-2 font-semibold'>LinkedIn:</div>
            <Link href="https://www.linkedin.com/in/jessica-allen-lim/">Jessica Allen</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
