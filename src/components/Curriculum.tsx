import CVBlock from '@/components/CVBlock'
import { v4 as uuidv4 } from 'uuid';

const cv = [
  {
    'href': '/history/evernote',
    'img': '/img/cv/evernote.png',
    'title': 'Evernote',
    'position': 'Senior Software Engineer / Engineering Manager',
    'date': 'October 2019 - February 2023',
    'body': 'Evernote is a productivity software company that offers a note-taking and organization platform. It allows users to create, store, and synchronize notes across various devices. With features like text recognition, multimedia support, and web clipping, users can capture and organize their ideas, tasks, and reference materials. Evernote also supports collaboration, enabling users to share and work on notes with others. Its search functionality and tag-based system make it easy to retrieve and organize information. Evernote aims to help individuals and teams increase productivity, streamline workflows, and keep important information accessible and organized.'
  },
  {
    'href': '/history/virtru',
    'img': '/img/cv/virtru.png',
    'title': 'Virtru',
    'position': 'UI Engineer',
    'date': 'August 2017 - March 2019',
    'body': 'Virtru is a company that specializes in data protection and privacy solutions. They provide secure email and file encryption services for businesses and individuals. Virtru&apos;s platform integrates with popular email services and allows users to easily encrypt and control access to their sensitive data. It offers features like message revocation, expiration, and tracking to enhance data security and control. With a focus on user-friendly encryption, Virtru aims to empower organizations and individuals to protect their sensitive information and maintain privacy in the digital age.'
  },
]

const Curriculum = () => {
  return (
    <div className="max-w-screen-xl mx-auto relative pb-24 md:pt-24" id="work">
      <div className="mx-12 leading-relaxed">
        <h2 className='md:text-center text-2xl font-semibold leading-8 text-gray-900 mb-12'>Organizations I&apos;ve had the pleasure of working with:</h2>
        {cv.map((company) => {
          return (
            <CVBlock key={uuidv4()} href={company.href} img={company.img}  title={company.title} position={company.position} date={company.date} body={company.body} />
          )
        })}
      </div>
    </div>
  )
}

export default Curriculum