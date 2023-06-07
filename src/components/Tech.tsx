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

const Tech = () => {
  return (
    <div className='bg-white pt-12 md:pt-24 space-y-12'>
      <div className='mx-auto bg-slate-200 py-8 lg:rounded-md'>
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
  )
}

export default Tech