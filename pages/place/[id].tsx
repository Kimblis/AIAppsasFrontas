import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Place } from '@/types'
import DetailedPlace from '@/components/place/DetailedPlace'

const Place: NextPage = () => {
  const router = useRouter()
  const { detailedPlace, id } = router.query
  const place = JSON.parse(detailedPlace!.toString()) as Place
  return <DetailedPlace place={place!} />
}

export default Place
