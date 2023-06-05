import React, { Component } from 'react';
import Image from 'next/image'

const logos = [
  {
    url: '/img/logos/react-svgrepo-com.svg',
    alt: 'React'
  },
  {
    url: '/img/logos/redux-svgrepo-com.svg',
    alt: 'Redux'
  },
  {
    url: '/img/logos/graphql-svgrepo-com.svg',
    alt: 'GraphQL'
  },
  {
    url: '/img/logos/typescript-svgrepo-com.svg',
    alt: 'TypeScript'
  },
  {
    url: '/img/logos/next-js-svgrepo-com.svg',
    alt: 'Next.js'
  },
  {
    url: '/img/logos/jenkins-svgrepo-com.svg',
    alt: 'Jenkins'
  },
  {
    url: '/img/logos/eslint-svgrepo-com.svg',
    alt: 'ESLint'
  },
  {
    url: '/img/logos/tailwind-svgrepo-com.svg',
    alt: 'Tailwind'
  }
];

class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="container mx-auto relative py-16">
          
          <div className="mx-12 text-2xl leading-relaxed">
            <div className="space-y-12">
              <h2 className="font-semibold leading-8">Hi, I&apos;m Rigo.</h2>
              <p>I&apos;m a software engineer with over 15 years of experience. That means I&apos;ve been around to see a lot of changes in the software industry and adapt to a never-ending wave of new technologies to learn.</p>
              <p>Through it all, my interest has always been in working as close to the user as possible. Working on clients has the distinct benefit to see the results of your work immediately, and to see the impact that every decision has over the User Experience.</p>
            </div>

            <div className="bg-white py-24 space-y-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-slate-200 sm:py-8">
                <h2 className="text-center font-semibold leading-8 text-gray-900">These are some of the technologies and platforms I&apos;m enjoying using right now:</h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                  {logos.map((logo, i) => {
                    return (
                      <Image key={i} className="col-span-2 max-h-24 w-full object-contain lg:col-span-1" src={logo.url} alt={logo.alt} width="158" height="128" />
                    )
                  })}
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