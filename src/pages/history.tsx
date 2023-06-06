import Navigation from '@/components/Navigation'
import MiniHeader from '@/components/MiniHeader'
import JobDetails from '@/components/JobDetails'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="font-sans">
      <Navigation />
      <MiniHeader/>
      <JobDetails />
      <Footer />
    </div>
  )
}
