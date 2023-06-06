import Navigation from '@/components/Navigation'
import MiniHeader from '@/components/MiniHeader'
import MiniHero from '@/components/MiniHero'
import JobDetails from '@/components/JobDetails'
import Footer from '@/components/Footer'
// @ts-ignore
import evernote from '@/md/evernote.md'

export default function Page() {
  return (
    <div className="font-sans">
      <Navigation />
      <MiniHeader title='Evernote'/>
      <MiniHero url='/img/jdImages/evernote.jpg' />
      <JobDetails body={evernote} />
      <Footer />
    </div>
  )
}
