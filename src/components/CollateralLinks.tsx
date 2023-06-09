import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CollateralLinks = () => {
  return (
    <div className='flex justify-center'>
      <Link className='mx-1 md:mx-2' href="https://www.linkedin.com/in/thauby/">
        <Image src="/img/logos/linkedin-svgrepo-com.svg" alt="LinkedIn" width="24" height="24" />
      </Link>
      <Link className='mx-1 md:mx-2' href="https://github.com/rthauby">
        <Image src="/img/logos/github-svgrepo-com.svg" alt="Github" width="24" height="24" />
      </Link>
      <Link className='mx-1 md:mx-2' href="https://www.artstation.com/pucho">
        <Image src="/img/logos/artstation-svgrepo-com.svg" alt="Artstation" width="24" height="24" />
      </Link>
    </div>
  )
}

export default CollateralLinks