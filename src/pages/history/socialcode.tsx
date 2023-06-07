import CVDetail from '@/components/CVDetail'
// @ts-ignore
import socialcode from '@/md/socialcode.md'

export default function Page() {
  return (
    <CVDetail title='SocialCode' img='/img/jdImages/socialcode.jpg' body={socialcode} />
  )
}