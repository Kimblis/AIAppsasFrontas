import type { NextPage } from 'next'

import TextClusterModal from '@/components/place/TextClusterModal'
import PhotoClusterModal from '@/components/place/PhotoClusterModal'
import CategoricalClusterModal from '@/components/place/CategoricalClusterModal'
import { useState } from 'react'
import { Place } from '@/types'
import PlaceComponent from '@/components/place/Place'
import { SimpleGrid } from '@chakra-ui/react'

const Home: NextPage = () => {
  const [places, setPlaces] = useState<Place[]>([])
  return (
    <>
      <TextClusterModal setPlace={setPlaces} />
      <PhotoClusterModal setPlace={setPlaces} />
      <CategoricalClusterModal setPlace={setPlaces} />
      <SimpleGrid columns={4} templateRows={'masonry'}>
        {places.map((place, ind) => (
          <PlaceComponent
            key={place.qwikidata_id + ind}
            place={place}
          ></PlaceComponent>
        ))}
      </SimpleGrid>
    </>
  )
}

export default Home
