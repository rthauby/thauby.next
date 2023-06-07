import Navigation from '@/components/Navigation'
import MiniHeader from '@/components/MiniHeader'
import MiniHero from '@/components/MiniHero'
import JobDetails from '@/components/JobDetails'
import Footer from '@/components/Footer'

export default function CVDetail(props: {
  title: string,
  img: string,
  body: string,
}) {
  return (
    <div className="font-sans">
      <Navigation />
      <MiniHeader title={props.title} />
      <MiniHero url={props.img} />
      <JobDetails body={props.body} />
      <Footer />
    </div>
  )
}
