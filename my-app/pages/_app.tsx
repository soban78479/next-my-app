import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import '../styles/Button/Button.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HypeIndustry_concept from "./posts/HypeIndustry_concept"
import NavBar from '../component/footer/navBar/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <ChakraProvider>

      <Component {...pageProps} />
    
    </ChakraProvider>
  

  )
}
