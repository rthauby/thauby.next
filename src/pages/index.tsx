import Navigation from '@/components/Navigation'
import BigHeader from '@/components/BigHeader'
import Intro from '@/components/Intro'
import Curriculum from '@/components/Curriculum'
import Footer from '@/components/Footer'
import Work from '@/components/Work'

export default function Home() {
  return (
    <div className="font-sans">
      <Navigation />
      <BigHeader hero={true}>
        <p>Rodrigo Thauby is an experienced Software Developer who specializes in building high-performing software and exceptional engineering teams.</p>
      </BigHeader>
      <Intro />
      <Footer />
    </div>
  )
}
