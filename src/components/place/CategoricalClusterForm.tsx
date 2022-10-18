import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  Button,
  SimpleGrid,
  GridItem,
  Alert,
  AlertIcon,
  useDisclosure,
} from '@chakra-ui/react'

import TextField from '@/components/form/TextField'

const CategoricalClusterForm = ({ setPlace }: { setPlace: any }) => {
  const { onClose } = useDisclosure()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <Formik
      initialValues={{
        qwikidataId: '',
      }}
      validationSchema={yup.object({
        qwikidataId: yup.string().trim(),
      })}
      onSubmit={async ({ qwikidataId }) => {
        try {
          setError('')
          setLoading(true)

          const response = await fetch('http://localhost:5000/categorical', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ qwikidataId }),
          })

          const places = await response.json()
          setPlace(places)
        } catch (error) {
          console.warn(error)
          setError('Please try again later')
        }

        setLoading(false)
        onClose()
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
            <GridItem colSpan={2}>
              <TextField
                name='qwikidataId'
                label='Qwikidata Id'
                placeholder='Please enter qwikidata id'
                isRequired={true}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                isLoading={loading}
                variant='primary'
                width='full'
                mt={4}
                type='submit'
              >
                Search
              </Button>
            </GridItem>
            {error && (
              <Alert status='error'>
                <AlertIcon />
                {error}
              </Alert>
            )}
          </SimpleGrid>
        </form>
      )}
    </Formik>
  )
}

export default CategoricalClusterForm
