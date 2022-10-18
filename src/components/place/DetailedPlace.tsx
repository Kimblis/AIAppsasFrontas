import React from 'react'
import { Container, Text, Heading, Flex } from '@chakra-ui/react'
import { Place } from '@/types'

const DetailedPlace = ({ place }: { place: Place }) => {
  return (
    <Container width={'100%'}>
      <Flex direction={'column'} pb={4} className='text-container-align-middle'>
        <Heading className='text-align-middle'>{place.title}</Heading>
        <Text className='text-align-middle'>City: {place.city_name}</Text>
        <Text className='text-align-middle'>Category: {place.category}</Text>
        <Text className='text-align-middle'>
          Instance of: {place.instance_of}
        </Text>
        <Text className='text-align-middle'>
          Industries: {place.industries}
        </Text>
        <Text className='text-align-middle'>Website: {place.website}</Text>
        <Text className='text-align-middle'>
          Pageviews:{place.pageview_count}
        </Text>
        <Text className='text-align-middle'>
          Registered contributors:
          {place.registered_contributors_count}
        </Text>
        <Text className='text-align-middle'>
          Anonymous contributors:
          {place.anonymous_contributors_count}
        </Text>
        <Text className='text-align-middle'>
          Wikipedia languages:
          {place.num_wikipedia_lang_pages}
        </Text>
        <Text className='text-align-middle'>
          Subsidiaries: {place.subsidiaries}
        </Text>
        <Text className='text-align-middle'>
          Stock exchanges: {place.stock_exchanges}
        </Text>
        <Text className='text-align-middle'>
          Industries: {place.industries}
        </Text>
        <Text className='text-align-middle'>
          Parent organizations: {place.parent_organizations}
        </Text>
        <Text className='text-align-middle'>
          Located next to: {place.located_next_to}
        </Text>
        <Text className='text-align-middle'>
          Typically sells: {place.typically_sells}
        </Text>
        <Text className='text-align-middle'>
          Headquarters: {place.headquarters}
        </Text>
        <Text className='text-align-middle'>Owner: {place.owner}</Text>
        <Text className='text-align-middle'>
          Named after: {place.named_after}
        </Text>
        <Text className='text-align-middle'>
          Postal code: {place.postal_code}
        </Text>
        <Text className='text-align-middle'>
          Foundation date:{place.foundation_date}
        </Text>
        <Text className='text-align-middle'>Fax number:{place.fax_number}</Text>
        <Text className='text-align-middle'>State: {place.state}</Text>
        <Text className='text-align-middle'>Employees: {place.employees}</Text>
        <Text className='text-align-middle'>
          Total equity: {place.total_equity}
        </Text>
        <Text className='text-align-middle'>
          Total assets: {place.total_assets}
        </Text>
        <Text className='text-align-middle'>
          Total revenue: {place.total_revenue}
        </Text>
        <Text className='text-align-middle'>
          Net profit: {place.net_profit}
        </Text>
        <Text className='text-align-middle'>
          Students count: {place.students_count}
        </Text>
        <Text className='text-align-middle'>
          Volunteers: {place.volunteers}
        </Text>
        <Text className='text-align-middle'>
          Published on BBC:{place.published_about_on_BBC}
        </Text>
        <Text className='text-align-middle'>
          Published on BGG:{place.published_about_on_BoardGameGeek}
        </Text>
        <Text className='text-align-middle'>
          Published on GEM:{place.published_about_on_GaultEtMilau}
        </Text>
        <Text className='text-align-middle'>Got award:{place.got_award}</Text>
        <Text className='text-align-middle'>
          Is in GameFAQ:{place.exists_in_GameFAQ_database}
        </Text>
        <Text className='text-align-middle'>
          Grid reference:{place.grid_reference}
        </Text>
        <Text className='text-align-middle'>
          Street address:{place.street_address}
        </Text>
        <Text className='text-align-middle'>
          Freebase id:{place.freebase_id}
        </Text>
        <Text className='text-align-middle'>Twitter id:{place.twitter_id}</Text>
        <Text className='text-align-middle'>
          WhosOnFirst id:{place.whosOnFirst_id}
        </Text>
        <Text className='text-align-middle'>ROR id:{place.ROR_id}</Text>
        <Text className='text-align-middle'>
          NNPedia id:{place.nicoNicoPedia_id}
        </Text>
        <Text className='text-align-middle'>
          Tiktok username:{place.tiktok_username}
        </Text>
        <Text className='text-align-middle'>TopTens id:{place.topTens_id}</Text>
        <Text className='text-align-middle'>
          DownDetector id:{place.downDetector_id}
        </Text>
        <Text className='text-align-middle'>
          Formation location:{place.formation_location}
        </Text>
        <Text className='text-align-middle'>
          Significant event:{place.significant_event}
        </Text>
        <Text className='text-align-middle'>WMI code:{place.wmi_code}</Text>
        <Text className='text-align-middle'>
          Description:{place.description}
        </Text>
      </Flex>
    </Container>
  )
}

export default DetailedPlace
