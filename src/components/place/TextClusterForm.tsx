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

import TextAreaField from '@/components/form/TextAreaField'

const TextClusterForm = ({ setPlace }: { setPlace: any }) => {
  const { onClose } = useDisclosure()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <Formik
      initialValues={{
        description: '',
      }}
      validationSchema={yup.object({
        description: yup.string().trim(),
      })}
      onSubmit={async ({ description }) => {
        try {
          setError('')
          setLoading(true)

          const response = await fetch('http://localhost:5000/text', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ description }),
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
              <TextAreaField
                name='description'
                label='Description'
                placeholder='Please enter description'
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

export default TextClusterForm
