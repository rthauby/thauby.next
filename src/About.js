import React, { Component } from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image'

class About extends Component {
  render() {
    return (
      <section id="about" className={styles.about}>
          <div className="row aligned-center">
              <div className="text-center medium-4 columns">
                  <Image src="/img/me-square.jpg" className={styles.about__mugshot} width='1000' height='1000' alt="moi"></Image>
              </div>
              <div className={`small-8 small-offset-2 end medium-offset-0 medium-8 columns ${styles.about__content}`}>
                  <p>Rodrigo Thauby is an experienced Software Developer who specializes in building high-performing software and exceptional engineering teams.</p>
              </div>
          </div>
      </section>
    );
  }
}

export default About;