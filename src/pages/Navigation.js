import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'

class Navigation extends Component {
  render() {
    return (
      <nav id="navigation" className="container mx-auto">
        <div className="mx-12 flex">
          <h1 className='flex-none'>
            <Link href="/">
              <span>Rodrigo Thauby</span>
              <Image className='rounded-full p-1' src="/img/cookie.png" alt="Cookie!" width="50" height="50" />
            </Link>
          </h1>
          <div className='flex-1 flex flex-row-reverse items-center'>
            <Link href="https://www.linkedin.com/in/thauby/">
              <Image src="/img/logos/linkedin-svgrepo-com.svg" alt="ESLint" width="24" height="24" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;