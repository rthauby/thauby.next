import Image from 'next/image'
import Link from 'next/link'
import SanitizedHTML from 'react-sanitized-html';

const CVBlock = (props: {
  href: string,
  img: string,
  title: string,
  position: string,
  date: string,
  body: string,
}) => {
  return (
    <div className='md:flex flex-nowrap mb-8'>
      <div className='flex-none pr-8 mb-8'>
        <Image className='rounded-full bg-slate-200 p-4' src={props.img} width={128} height={128} alt={props.title} />
      </div>
      <div className='flex-initial'>
        <h2 className='text-xl font-bold mb-2'>{props.title}</h2>
        <div className='mb-4 text-slate-500'>
          <SanitizedHTML html={props.body} />
        </div>
        <h3 className='mb-2 font-bold'>{props.position}</h3>
        <h3 className='mb-6'>{props.date}</h3>
        <div className='text-center'>
          <Link
            href={props.href}
            className='moreLink rounded-full'
          >View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default CVBlock