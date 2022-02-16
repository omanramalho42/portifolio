import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from "framer-motion"
import Layout from '../components/layouts/layout'

const App = ({ Component, pageProps, router}) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                        <Component {...pageProps} key={router.route}/>    
                </AnimatePresence>
            </Layout>  
        </ChakraProvider>
    )
}

export default App