import CVDetail from '@/components/CVDetail'
// @ts-ignore
import evernote from '@/md/evernote.md'

export default function Page() {
  return (
    <CVDetail title='Evernote' img='/img/jdImages/evernote.jpg' body={evernote} />
  )
}