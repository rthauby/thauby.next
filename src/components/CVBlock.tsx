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
    <div>
      <Image src={props.img} width={100} height={100} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.position}</h3>
      <h3>{props.date}</h3>
      <div><SanitizedHTML html={props.body} /></div>
      <Link href={props.href}>View Details</Link>
    </div>
  )
}

export default CVBlock