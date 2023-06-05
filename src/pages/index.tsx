import Navigation from '@/pages/components/Navigation'
import About from '@/pages/components/About'
import Intro from '@/pages/components/Intro'
import Footer from '@/pages/components/Footer'
import Work from '@/pages/components/Work'

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
