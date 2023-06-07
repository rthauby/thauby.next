import Image from 'next/image'

type ContainerProps = {
  children: React.ReactNode;
  hero: boolean;
};

const BigHeader = (props: ContainerProps) => {
  return (
    <section className='about'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='mx-12'>
          <div className={`text-xl md:text-4xl md:leading-relaxed items-center gap-x-12 py-12 min-h-max ${props.hero ? 'md:flex' : 'text-center'}`}>
            {props.hero ? <Image src='/img/me-square.png' className='w-48 h-48 rounded-full mb-12 md:my-12 mx-auto' width='300' height='300' alt='moi'></Image> : null}
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BigHeader;