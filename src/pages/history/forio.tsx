import CVDetail from '@/components/CVDetail'
// @ts-ignore
import forio from '@/md/forio.md'

export default function Page() {
  return (
    <CVDetail title='Forio Business Simulations' img='/img/jdImages/forio.jpg' body={forio} />
  )
}