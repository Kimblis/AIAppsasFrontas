import type { AppProps } from 'next/app'
import { Box, ChakraProvider, Container } from '@chakra-ui/react'

import theme from '@/themes'
import '@/themes/styles.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.l' p={0} centerContent>
        <Box w='80%'>
          <Component {...pageProps} />
        </Box>
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
