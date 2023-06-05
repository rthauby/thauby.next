import React, { Component } from 'react';
import {CollateralLinks} from '@/pages/components/CollateralLinks'

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="bg-slate-200">
        <div className="container mx-auto relative py-16 flex justify-center">
          <CollateralLinks />
        </div>
      </footer>
    );
  }
}

export default Footer;