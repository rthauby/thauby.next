import Spline from '@splinetool/react-spline/next';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <div
        className='hidden lg:flex h-full w-full justify-center items-center'
      >
        <Spline
          scene="https://prod.spline.design/uOrI3Vv3SCBKcCmZ/scene.splinecode"
        />
      </div>
      <div className='h-full w-full absolute top-0 pointer-events-none flex justify-center'>
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
  );
}
