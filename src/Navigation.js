import React, { Component } from 'react';

import styles from '@/styles/Navigation.module.css';


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
                  <h1><a href="/" className={styles.homeLink}>Rodrigo Thauby</a></h1>

                  <div id="nav-icon" onClick={e => this.handleMobileNavClick(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <ul className={styles.navigation__list}>
                      <li className={styles.navList__item}><a href="/" activeClassName="selected" onClick={this.handleCloseNav}>Home</a></li>
                      <li className={styles.navList__item}><a href="/work" activeClassName="selected" onClick={this.handleCloseNav}>Work</a></li>
                      <li className={styles.navList__item}><a href="/hobbies" activeClassName="selected" onClick={this.handleCloseNav}>Hobbies</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;