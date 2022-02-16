import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
    render () {
        return (
            <Html lang="pt-br">
                <Head />
                <body>
                    <ColorModeScript 
                        initialColorMode={theme.config.initialColorMode} 
                    />
                </body>
                <Main />
                <NextScript />
            </Html>
        )
    }
} 