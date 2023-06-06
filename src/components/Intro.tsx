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

const Intro = () => {
  return (
    <section id="intro">
      <div className="max-w-screen-xl mx-auto relative py-16">
        
        <div className="mx-12 lg:text-2xl leading-relaxed">
          <div className="space-y-4 md:space-y-12">
            <h2 className="font-semibold">Hi, I&apos;m Rigo.</h2>
            <p>As an experienced software engineer with over 15 years in the field, I&apos;ve had the privilege of witnessing the incredible evolution of the software industry. Embracing the constant influx of new technologies has been an exciting journey.</p>
            <p>Throughout it all, I&apos;ve maintained a deep passion for working closely with users. There&apos;s something truly rewarding about seeing the immediate impact of our work when collaborating with clients. Every decision made directly affects the user experience, and that&apos;s where my focus truly shines.</p>
            <p>Let&apos;s join forces and create software solutions that not only impress but also make users smile. Together, we can craft remarkable experiences that leave a lasting impression.</p>
          </div>

          <div className="bg-white pt-12 md:pt-24 space-y-12">
            <div className="mx-auto lg:mx-52 px-6 lg:px-8 bg-slate-200 py-8 rounded-md">
              <h2 className="text-center font-semibold leading-8 text-gray-900">These are some of the technologies and platforms I&apos;m enjoying using right now:</h2>
              <div className="mt-10 items-center grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:max-w-none">
                {logos.map((logo, i) => {
                  return (
                    <Image key={i} className="max-h-24 w-full object-contain col-span-1" src={logo.url} alt={logo.alt} width="158" height="128" />
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Intro;