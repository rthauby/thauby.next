import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CollateralLinks from '@/components/CollateralLinks'

const Navigation = () => {
  return (
    <nav id="navigation" className="max-w-screen-xl mx-auto">
      <div className="mx-4 md:mx-12 flex">
        <h1 className='w-32 flex-none'>
          <Link href="/">
            <span>Rodrigo Thauby</span>
            <Image className='rounded-full p-1' src="/img/cookie.png" alt="Cookie!" width="50" height="50" />
          </Link>
        </h1>
        <div className='flex-1 text-center justify-center flex flex-row'>
          <Link className='mx-2 mt-3' href="/">Home</Link>
          <Link className='mx-2 mt-3' href="/work">Work</Link>
        </div>
        <div className='w-32 flex-none flex flex-row-reverse items-center'>
          <CollateralLinks />
        </div>
      </div>
    </nav>
  )
}

export default Navigation;