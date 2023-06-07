import CVDetail from '@/components/CVDetail'
// @ts-ignore
import isl from '@/md/isl.md'

export default function Page() {
  return (
    <CVDetail title='ISL' img='/img/jdImages/isl.jpg' body={isl} />
  )
}