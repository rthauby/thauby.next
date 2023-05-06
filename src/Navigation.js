import React, { Component } from 'react'
import Link from 'next/link'
import styles from '@/styles/Navigation.module.css'


class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navClass : 'closed'
    }
  }

  handleMobileNavClick(e){
    const el = e.currentTarget;
    el.classList.toggle('open');

    if(el.classList.contains('open')){
      this.setState({'navClass':'open'});
    } else {
      this.setState({'navClass':'closed'});
    }
  }

  handleCloseNav = () => {
    this.setState({'navClass':'closed'});
  }

  render() {
    return (
      <nav className={styles.navigation}>
          <div className="row aligned-center">
              <div className="small-12 columns">
                  <h1><Link href="/" className={styles.homeLink}>Rodrigo Thauby</Link></h1>

                  <div id="nav-icon" onClick={e => this.handleMobileNavClick(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <ul className={styles.navigation__list}>
                      <li className={styles.navList__item}><Link href="/" activeClassName="selected" onClick={this.handleCloseNav}>Home</Link></li>
                      {/* <li className={styles.navList__item}><Link href="/work" activeClassName="selected" onClick={this.handleCloseNav}>Work</Link></li>
                      <li className={styles.navList__item}><Link href="/hobbies" activeClassName="selected" onClick={this.handleCloseNav}>Hobbies</Link></li>\ */}
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;