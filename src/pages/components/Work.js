import data from '@/data/work.json'
import Image from 'next/image'
import SanitizedHTML from 'react-sanitized-html';
import { v4 as uuidv4 } from 'uuid';

const JobBlock = (props) => {
  const alignClass = props.position === 'left' ? '' : 'order-last'
  return (
    <div className='mb-32'>
      <div className='lg:flex gap-4'>
        <div className={`sm:mb-12 lg:mb-0 grid content-center flex-1 ${alignClass}`} >
          <div className='text-2 leading-8'>
            <h2 className='text-2xl mb-4'>{props.job.title}</h2>
            <SanitizedHTML html={props.job.body} className='text-base leading-8 text-slate-600 flex flex-col space-y-4' />
          </div>  
        </div>
        <div className='mx-12 max-w-md flex-none rounded-md bg-slate-200 px-8 py-4 shadow-xl border-solid border-2 border-slate-300'>
          {props.job.images.map((img) => {
            return <Image key={`img-${uuidv4()}`} className='rounded-md my-4' src={img} width='320' height='250' />
          })}
        </div>
      </div>
    </div>
  )
}

const Work = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto relative pb-24" id="work">
      <div className="mx-12 leading-relaxed">
          <h2 className='text-center text-2xl font-semibold leading-8 text-gray-900 mb-12'>Some of my past work</h2>
          {data.map((job, index) => {
            return <JobBlock key={`job-${uuidv4()}`} job={job} position={index % 2 === 1 ? 'left' : 'right'} />
          })}
      </div>
    </div>
  )
}

export default Work;