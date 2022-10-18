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

const PhotoClusterForm = ({ setPlace }: { setPlace: any }) => {
  const { onClose } = useDisclosure()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <Formik
      initialValues={{
        title: '',
      }}
      validationSchema={yup.object({
        title: yup.string().trim(),
      })}
      onSubmit={async ({ title }) => {
        try {
          setError('')
          setLoading(true)

          const response = await fetch('http://localhost:5000/photo', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ title }),
          })
          const json = await response.json()
          console.log(json)
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
                name='title'
                label='Title'
                placeholder='Please enter title'
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

export default PhotoClusterForm
