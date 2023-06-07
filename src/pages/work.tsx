import Navigation from '@/components/Navigation'
import Tech from '@/components/Tech'
import BigHeader from '@/components/BigHeader'
import Intro from '@/components/Intro'
import Curriculum from '@/components/Curriculum'
import Footer from '@/components/Footer'
import Work from '@/components/Work'

export default function Home() {
  return (
    <div className="font-sans">
      <Navigation />
      <BigHeader hero={false}>
        <p>Organizations I&apos;ve had the pleasure of working with</p>
      </BigHeader>
      <Curriculum />
      <Work />
      <Footer />
    </div>
  )
}
