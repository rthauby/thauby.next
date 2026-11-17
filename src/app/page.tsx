import type { Metadata } from "next";
import Image from 'next/image';
import Spline from '@splinetool/react-spline/next';
import Container, { Section, SectionTitle } from './components/container';
import { ProfileLinks } from './components/profile-links';

export const metadata: Metadata = {
  title: "Home | Rodrigo Thauby",
  description: "Rodrigo Thauby — engineering manager and full-stack engineer with 17+ years of experience. Carlisle, PA.",
};

function Hero() {
  return <>
    <div
      className='w-full relative'
    >
      <div className='hidden lg:flex h-[100vh] w-full justify-center items-center'>
        <Spline
          scene="https://prod.spline.design/uOrI3Vv3SCBKcCmZ/scene.splinecode"
        />
      </div>
      <div className='lg:absolute z-10 top-0 pointer-events-none h-full w-full flex flex-col justify-center'>
        <div className='pt-24 lg:pt-0 mx-auto w-full max-w-2xl xl:max-w-5xl sm:grid grid-cols-3 items-center'>
          <div className="col-span-2 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            <p className='pb-8'>Hi,</p>
            <h1 className='pb-8'>I&#39;m Rodrigo Thauby.</h1>
            <p className='pb-8'>A Programmer, Nerd, and Dad, living in Carlisle, PA.</p>
            <p className='pb-6 text-xl sm:text-2xl font-normal tracking-normal text-gray-700 dark:text-gray-300'>Engineering manager and full-stack engineer, 17+ years.</p>
            <ProfileLinks className='pb-8' includeResume={false} />
          </div>
          <div className='col-span-1'>
            <div className='sm:ml-12 text-center'>
              <Image
                src="/me_and_lulu.png"
                alt="Rodrigo Thauby with his dog, Lulu"
                width={512}
                height={512}
                className='mb-12 sm:mb-0 inline-block rounded-full max-w-64 sm:max-w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

function About() {
  return (
    <>
      <Section id="about">
        <SectionTitle title='About me.' />
        <p className="pb-8">Hi, I&apos;m Rodrigo Thauby &mdash; a full-stack engineer and engineering manager with 17+ years of experience building web applications across industries. Today I build AI-powered tools and secure, production-grade systems for federal clients; before that I managed Evernote&apos;s Growth and Out-of-App teams. I enjoy solving complex problems, mentoring teams, and creating products that are simple, scalable, and impactful.</p>
      </Section>
    </>
  )
}

function SideProjects() {
  return (
    <>
      <Section>
        <SectionTitle title='Side Projects & Creative Work.' />
        <p className="pb-8">Outside of my professional work, I spend a lot of time creating and experimenting:</p>
        <ul>
          <li className="pb-8">🎮 Game Development: I’m building a first-person shooter from scratch in Godot, learning everything from gameplay programming to performance optimization. It&apos;s been a hands-on way to explore engines, rendering pipelines, and game design.</li>
          <li className="pb-8">🎨 3D Printing & Painting: I design, print, and hand-paint statues — a mix of digital fabrication and old-school artistry that scratches both my tech and creative itches.</li>
          <li className="pb-8">🍕 Pizza Making: For the past year, I&apos;ve been honing my pizza-making craft. From dough fermentation to experimenting with toppings, I&apos;ve considered turning it into a pizzeria one day.</li>
        </ul>
      </Section>
    </>
  )
}

function Outro() {
  return <>
    <Section>
      <SectionTitle title='What Drives Me.' />
      <p className="pb-24">At the core, I love creating things that bring people joy — whether it&apos;s scalable web apps, interactive games, custom collectibles, or a really good slice of pizza. I&apos;m always learning, tinkering, and pushing myself to explore new skills and share knowledge with others.</p>
    </Section>
  </>
}

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <About />
        <SideProjects />
        <Outro />
      </Container>
    </>
  );
}
