import ReactMarkdown from 'react-markdown'
import evernote from '@/md/evernote.md'

const JobDetails = () => {
  return (
    <div className='max-w-screen-xl mx-auto relative pb-24 md:pt-24' id='work'>
      <div className='mx-12 leading-relaxed space-y-4 text-sm'>
        <ReactMarkdown>{evernote}</ReactMarkdown>
      </div>
    </div>
  )
}

export default JobDetails;