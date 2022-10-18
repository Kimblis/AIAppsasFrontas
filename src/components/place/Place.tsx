import { Place } from '@/types'
import { Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

const Place = ({ place }: { place: Place }) => {
  const pathName: string = `place/${place.qwikidata_id}`

  return (
    <Box
      height={'fit-content'}
      margin={'10px'}
      border='solid 1px rgba(0,0,0, .25)'
    >
      <Link
        href={{
          pathname: pathName,
          query: { detailedPlace: JSON.stringify(place) },
        }}
        passHref
        as={pathName}
      >
        <Box className='text-container-align-middle'>
          <Text
            className='text-align-middle'
            borderBottom={'solid 1px rgba(0,0,0, .25);'}
          >
            {place.title}
          </Text>
        </Box>
      </Link>
    </Box>
  )
}

export default Place
