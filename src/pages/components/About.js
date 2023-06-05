import React, { Component } from 'react'
import Image from 'next/image'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="max-w-screen-xl mx-auto">
          <div className="mx-12">
            <div className="text-xl md:text-4xl md:leading-relaxed  md:flex items-center gap-x-12 py-12 min-h-max">
              <Image src="/img/me-square.jpg" className="w-48 h-48 rounded-full mb-12 md:my-12 mx-auto" width="300" height="300" alt="moi"></Image>
              <p>Rodrigo Thauby is an experienced Software Developer who specializes in building high-performing software and exceptional engineering teams.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;