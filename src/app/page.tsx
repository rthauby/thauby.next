import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';

function Hero() {
  return <>
    <div
      className='h-[100vh] w-[100vw] relative'
    >
      <div className='hidden lg:flex h-full w-full justify-center items-center'>
        <Spline
          scene="https://prod.spline.design/uOrI3Vv3SCBKcCmZ/scene.splinecode"
        />
      </div>
      <div className='absolute z-10 top-0 pointer-events-none h-full w-full flex justify-center'>
        <div className='pt-24 lg:pt-0 mx-auto px-8 w-full max-w-2xl xl:max-w-5xl sm:grid grid-cols-3 items-center'>
          <div className="col-span-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            <h2 className='pb-8'>Hi,</h2>
            <h1 className='pb-8'>I&#39;m Rodrigo Thauby.</h1>
            <h2 className='pb-8'>A Programmer, Nerd, and Dad, living in Carlisle, PA.</h2>
          </div>
          <div className='col-span-1'>
            <div className='sm:ml-12'>
              <Image
                src="/me_and_lulu.png"
                alt="Down Arrow"
                width={512}
                height={512}
                className='rounded-full'
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
      <div className="min-h-[100vh] flex flex-col justify-center">
        <div className="mx-auto w-full max-w-2xl xl:max-w-5xl">
          <div>
            <h2 className="text-3xl font-bold uppercase pb-6">About me.</h2>
            <h3 className="text-3xl/10">Hi, I&apos;m Rodrigo Thauby &mdash; a full-stack developer with 15 years of experience building web applications across industries. I enjoy solving complex problems, mentoring teams, and creating products that are simple, scalable, and impactful.</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
