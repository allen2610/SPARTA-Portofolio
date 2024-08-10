import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-blue-400 text-white font-semibold justify-between p-5 lg:px-[500px]'>
      <Link href='/'>Home</Link>
      <Link href='/Experiences'>Experiences</Link>
      <Link href='/Achievements'>Achievements</Link>
    </div>
  )
}

export default Navbar
