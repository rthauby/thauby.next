import Navigation from '@/Navigation'
import About from '@/About'
import Intro from '@/Intro'
import Footer from '@/Footer'

export default function Home() {
  return (
    <div>
      <Navigation />
      <section className='main'>
        <About />
      </section>
    </div>
  )
}
