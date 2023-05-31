import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="bg-slate-200">
        <div className="container mx-auto relative py-16 flex justify-center">

            <Link href="https://www.linkedin.com/in/thauby/">
              <Image src="/img/logos/linkedin-svgrepo-com.svg" alt="ESLint" width="24" height="24" />
            </Link>

        </div>
      </footer>
    );
  }
}

export default Footer;