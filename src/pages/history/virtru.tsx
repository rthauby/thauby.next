import CVDetail from '@/components/CVDetail'
// @ts-ignore
import virtru from '@/md/virtru.md'

export default function Page() {
  return (
    <CVDetail title='Virtru' img='/img/jdImages/virtru.jpg' body={virtru} />
  )
}