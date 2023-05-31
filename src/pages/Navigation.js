import React, { Component } from 'react'
import Link from 'next/link'

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
      <nav id="navigation" className="container mx-auto">
        <div className="mx-12">
        <h1><Link href="/">Rodrigo Thauby</Link></h1>
          <ul>
            <li><Link href="/" onClick={this.handleCloseNav}>About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;