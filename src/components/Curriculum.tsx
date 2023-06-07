import CVBlock from '@/components/CVBlock'
import { v4 as uuidv4 } from 'uuid';

const cv = [
  {
    'href': '/history/evernote',
    'img': '/img/cv/L_evernote.png',
    'title': 'Evernote',
    'position': 'Senior Software Engineer / Engineering Manager',
    'date': 'October 2019 - February 2023',
    'body': 'Evernote is a productivity software company that offers a note-taking and organization platform. It allows users to create, store, and synchronize notes across various devices. With features like text recognition, multimedia support, and web clipping, users can capture and organize their ideas, tasks, and reference materials. Evernote also supports collaboration, enabling users to share and work on notes with others. Its search functionality and tag-based system make it easy to retrieve and organize information. Evernote aims to help individuals and teams increase productivity, streamline workflows, and keep important information accessible and organized.'
  },
  {
    'href': '/history/virtru',
    'img': '/img/cv/L_virtru.png',
    'title': 'Virtru',
    'position': 'UI Engineer',
    'date': 'August 2017 - March 2019',
    'body': 'Virtru is a company that specializes in data protection and privacy solutions. They provide secure email and file encryption services for businesses and individuals. Virtru&apos;s platform integrates with popular email services and allows users to easily encrypt and control access to their sensitive data. It offers features like message revocation, expiration, and tracking to enhance data security and control. With a focus on user-friendly encryption, Virtru aims to empower organizations and individuals to protect their sensitive information and maintain privacy in the digital age.'
  },
  {
    'href': '/history/sparkypants',
    'img': '/img/cv/L_sparkypants.png',
    'title': 'Sparkypants',
    'position': 'UI Developer',
    'date': 'February 2017 - June 2017',
    'body': 'Sparkypants Studios is a game development company known for their game called Dropzone. Dropzone is a multiplayer online battle arena (MOBA) game that combines elements of real-time strategy and action. It features intense 1v1 battles where players control powerful mechanized rigs and compete to collect resources and complete objectives. Dropzone offers a unique twist on the traditional MOBA genre, with its focus on strategic decision-making and micro-level control of individual units. Sparkypants Studios aimed to create a fast-paced and competitive game that appeals to both casual and hardcore gamers, offering a fresh take on the MOBA experience.'
  },
  {
    'href': '/history/isl',
    'img': '/img/cv/L_isl.png',
    'title': 'ISL',
    'position': 'Senior Developer',
    'date': 'July 2013 - February 2017',
    'body': 'iStrategyLabs is a creative agency that specializes in digital marketing and experiential design. The company helps brands and organizations create engaging and innovative experiences through the use of technology and creativity. They offer services such as digital strategy, social media marketing, interactive installations, and event production. iStrategyLabs leverages emerging technologies and trends to create memorable and impactful experiences for their clients. Their goal is to help brands connect with their audiences in unique and meaningful ways, driving brand awareness, engagement, and growth.'
  },
  {
    'href': '/history/socialcode',
    'img': '/img/cv/L_socialcode.png',
    'title': 'SocialCode',
    'position': 'Senior Software Engineer',
    'date': 'July 2013 - February 2017',
    'body': 'SocialCode is a digital marketing agency that focuses on social media advertising and analytics. They provide strategic planning, creative development, and campaign execution across various social media platforms. SocialCode leverages data-driven insights to optimize ad performance and drive business outcomes for their clients. Their expertise lies in audience targeting, ad placement, and measurement to deliver effective social media campaigns. With a focus on delivering measurable results, SocialCode helps brands maximize their social media presence and achieve their marketing objectives through data-driven strategies and innovative ad solutions.'
  },
  {
    'href': '/history/forio',
    'img': '/img/cv/L_forio.png',
    'title': 'Forio Business Simulations',
    'position': 'Software Engineer',
    'date': 'July 2008 - April 2012',
    'body': 'Forio Business Simulations is a company that specializes in developing and delivering interactive business simulations. Their simulations provide a virtual environment where participants can learn and apply business concepts, decision-making skills, and strategic thinking. Forio&apos;s simulations cover a range of topics, including finance, marketing, supply chain management, and leadership development. Through their customizable and immersive simulations, they help organizations train employees, test business strategies, and enhance critical thinking abilities. Forio Business Simulations aims to provide a practical and engaging learning experience that translates into real-world business success.'
  },
]

const Curriculum = () => {
  return (
    <div className="max-w-screen-lg mx-auto relative pb-24 md:pt-24" id="cv">
      <div className="md:mx-0 mx-12 leading-relaxed">
        <h2 className='md:text-center text-2xl font-semibold leading-8 text-gray-900 mb-12 underline'>Organizations I&apos;ve had the pleasure of working with</h2>
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