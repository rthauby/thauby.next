import Navigation from '@/pages/Navigation'
import About from '@/pages/About'
import Intro from '@/pages/Intro'
import Footer from '@/pages/Footer'

export default function Home() {
  return (
    <div className="font-sans">
      <Navigation />
      <About/>
      <Intro />
      <Footer />
    </div>
  )
}
