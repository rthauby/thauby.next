import Navigation from '@/pages/Navigation'
import About from '@/pages/About'
import Intro from '@/pages/Intro'
import Footer from '@/pages/Footer'
import Work from '@/pages/Work'

export default function Home() {
  return (
    <div className="font-sans">
      <Navigation />
      <About/>
      <Intro />
      <Work />
      <Footer />
    </div>
  )
}
