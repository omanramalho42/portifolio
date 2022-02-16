import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager
  } from '@chakra-ui/react'
  import theme from '../libs/theme'
  
  export default function Chakra({ cookies, children }) {
    const colorModeManager =
      typeof cookies === 'string'
        ? cookieStorageManager(cookies)
        : localStorageManager
  
    return (
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    )
  }
  
  export async function getServerSideProps({ req }) {
    return {
      props: {
        cookies: req.headers.cookie ?? ''
      }
    }
  }

  export async function getInitialProps({ req }) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }