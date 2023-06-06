import ReactMarkdown from 'react-markdown'

const JobDetails = (props: {
  body: any
}) => {
  return (
    <div className='max-w-screen-xl mx-auto relative pb-24 pt-12' id='work'>
      <div className='mx-12 md:mx-auto leading-relaxed space-y-4 text-sm max-w-lg'>
        <ReactMarkdown>{props.body}</ReactMarkdown>
      </div>
    </div>
  )
}

export default JobDetails;