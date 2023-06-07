import CVDetail from '@/components/CVDetail'
// @ts-ignore
import sparkypants from '@/md/sparkypants.md'

export default function Page() {
  return (
    <CVDetail title='Sparkypants' img='/img/jdImages/sparkypants.jpg' body={sparkypants} />
  )
}