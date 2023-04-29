import React, { Component } from 'react';
import styles from '@/styles/footer.module.css';

class Footer extends Component {
  render(){
    return (
      <footer className={styles.footer}>
        <div><img src='/img/react.svg' className={styles.reactLogo} /></div>
        <div>This site is powered by <a href="https://react.dev/">React</a> and <a href="https://nextjs.org/">Next.js</a>.</div>
      </footer>
    )
  }
}

export default Footer;