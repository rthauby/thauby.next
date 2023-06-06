import React, { Component } from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

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
    <section id='intro'>
      <div className='max-w-screen-xl mx-auto relative py-16'>
        
        <div>
          <div className='mx-12 md:mx-auto max-w-lg space-y-4 md:space-y-8 lg:text-xl leading-relaxed'>
            <h2 className='font-semibold'>Hi, I&apos;m Rigo <span className='font-serif italic'>(REE-goh.)</span></h2>
            <p>As an experienced software engineer with over 15 years in the field, I&apos;ve had the privilege of witnessing the incredible evolution of the software industry. Embracing the constant influx of new technologies has been an exciting journey.</p>
            <p>Throughout it all, I&apos;ve maintained a deep passion for working closely with users. There&apos;s something truly rewarding about seeing the immediate impact of our work when working on the client-side. Every decision made directly affects the user experience, and that&apos;s where my focus truly shines.</p>
            <p>Let&apos;s join forces and create software solutions that not only impress but also make users smile. Together, we can craft remarkable experiences that leave a lasting impression.</p>
          </div>

          <div className='bg-white pt-12 md:pt-24 space-y-12'>
            <div className='mx-auto lg:mx-52 px-12 lg:px-8 bg-slate-200 py-8 lg:rounded-md'>
              <h2 className='text-center font-semibold leading-8 text-gray-900 mb-4'>These are some of the technologies and platforms I&apos;m enjoying using right now:</h2>
              <div className='flex flex-wrap justify-center'>
                {logos.map((logo) => {
                  return (
                    <Image key={uuidv4()} className='p-4' src={logo.url} alt={logo.alt} width={96} height={96} />
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