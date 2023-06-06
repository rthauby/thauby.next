import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Intro from '@/components/Intro'
import Footer from '@/components/Footer'
import Work from '@/components/Work'

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
