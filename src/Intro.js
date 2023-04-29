import React, { Component } from 'react';

import styles from '@/styles/Intro.module.css';

class Intro extends Component {
  render() {
    return (
      <section className={styles.intro}>
        <h1 className={styles.intro__title}>Rodrigo Thauby</h1>
        <h2 className={styles.intro__subtitle}>Software Engineer,<br/>Designer, <br/>Game Dev Enthusiast, <br/>Traditional &amp; Digital Sculptor</h2>
        <ul className={styles.intro__links}>
            <li className={styles.introLinks__items}><a href="https://www.github.com/rthauby">Github</a></li>
            <li className={styles.introLinks__items}><a href="https://www.linkedin.com/in/thauby/">Linkedin</a></li>
            <li className={styles.introLinks__items}><a href="https://www.artstation.com/artist/pucho">Artstation</a></li>
            <li className={styles.introLinks__items}><a href="http://steamcommunity.com/id/Pucho">Steam</a></li>
        </ul>
      </section>
    );
  }
}

export default Intro;