import React, { Component } from 'react';
import Image from 'next/image'

class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="container mx-auto relative py-16">
          
          <div className="mx-12 text-2xl leading-relaxed">
            <div className="space-y-12">
              <h2 className="font-semibold leading-8">Hi, I'm Rigo.</h2>
              <p>I'm a software engineer with over 15 years of experience. That means I've been around to see a lot of changes in the software industry and adapt to a never-ending wave of new technologies to learn.</p>
              <p>Through it all, my interest has always been in working as close to the user as possible. Working on UIs has the distinct benefit to see the results of your work immediately, and to see the impact that every decision has over the User Experience.</p>
            </div>

            <div class="bg-white py-24 space-y-12">
              <div class="mx-auto max-w-7xl px-6 lg:px-8 bg-slate-200 rounded sm:py-8">
                <h2 class="text-center font-semibold leading-8 text-gray-900">These are some of the technologies and platforms I'm enjoying using right now:</h2>
                <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  <Image class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/Image/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Intro;

/*
<ul>
  <li>React</li>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Sass</li>
  <li>Heroku</li>
</ul>
*/