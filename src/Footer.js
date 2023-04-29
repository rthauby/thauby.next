import React, { Component } from 'react';
import styles from '@/styles/footer.module.css';

class Footer extends Component {
  render(){
    return (
      <footer className={styles.footer}>
        <div><img src='/img/react.svg' className={styles.reactLogo} /></div>
        <div>This site is powered by React, hosted on S3, and served via CloudFront.</div>
        <div>Fancy, I know.</div>
      </footer>
    )
  }
}

export default Footer;