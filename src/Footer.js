import React, { Component } from 'react';
import styles from '@/styles/footer.module.css'
import Image from 'next/image'

class Footer extends Component {
  render(){
    return (
      <footer className={styles.footer}>
        <div><Image alt='REACT LOGO' src='/img/react.svg' className={styles.reactLogo} width='500' height='500'  /></div>
        <div>This site is powered by <a href="https://react.dev/">React</a> and <a href="https://nextjs.org/">Next.js</a>.</div>
      </footer>
    )
  }
}

export default Footer;