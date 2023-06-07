import Tech from '@/components/Tech'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='max-w-screen-lg mx-auto relative py-16'>
        
        <div>
          <div className='mx-12 md:mx-auto max-w-lg space-y-4 md:space-y-8 lg:text-xl leading-relaxed'>
            <h2 className='font-semibold'>Hi, I&apos;m Rigo <span className='font-serif italic'>(REE-goh.)</span></h2>
            <p>As an experienced software engineer with over 15 years in the field, I&apos;ve had the privilege of witnessing the incredible evolution of the software industry. Embracing the constant influx of new technologies has been an exciting journey.</p>
            <p>Throughout it all, I&apos;ve maintained a deep passion for working closely with users. There&apos;s something truly rewarding about seeing the immediate impact of our work when working on the client-side. Every decision made directly affects the user experience, and that&apos;s where my focus truly shines.</p>
            <p>Let&apos;s join forces and create software solutions that not only impress but also make users smile. Together, we can craft remarkable experiences that leave a lasting impression.</p>
          </div>

          <Tech />

        </div>
      </div>
    </section>
  )
}

export default Intro;