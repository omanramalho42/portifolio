import React from 'react'
import { 
    Container,
    Box,
    Heading,
    SimpleGrid,
    Divider
} from '@chakra-ui/react'

import { WorkGridItem } from '../components/GridItem'
import Section from '../components/Section'
import Article from '../components/layouts/Article'

import thumbStyly from '../public/images/works/styly_eyecatch.png'

import thumbUberClone from '../public/images/projects/uber_clone.jpeg'
import thumbGoFinances from '../public/images/projects/gofinances.jpeg'
import thumbOpensea from '../public/images/projects/opensea_blockchain.png'
import thumbPortifolio from '../public/images/projects/potifolio.png'
import thumbAmazon from '../public/images/projects/amazon.png'
import thumbCrypto from '../public/images/projects/crypto.jpeg'
import thumbDashboard from '../public/images/projects/dashboard.jpeg'
import thumbJlPods from '../public/images/projects/jlpods.jpeg'

const works = () => {
  return (
      <Article>  
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projetos
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="uber-clone" title="Uber-Clone" thumbnail={thumbUberClone}>
                        Uber Clone
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="go-finances" title="GoFinances" thumbnail={thumbGoFinances}>
                        Gestão de finanças
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="opensea"
                        title="Opensea BlockChain Clone"
                        thumbnail={thumbOpensea}
                    >
                        Opensea blockChain web 3.0 usando 
                        react js e ThirdWeb.
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="portifolio" thumbnail={thumbPortifolio} title="Portifólio">
                        Portifólio moderno usando apenas 
                        react js e react icons
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="amazon" thumbnail={thumbAmazon} title="Amazon Clone">
                        Clone amazon usando next js 
                        mongodb, redux e typescript.
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="dashboard" thumbnail={thumbDashboard} title="Dashboard">
                        Dashboard usando react js 
                        typescript e react icons
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="crypto" thumbnail={thumbCrypto} title="Crypto tracker">
                        Listagem de Cryptomoedas usando
                        React js e axios.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Projetos Em andamento
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem
                        id="jlpods"
                        thumbnail={thumbJlPods}
                        title="JlPods"
                    >
                        Empresa de venda de pods descartáveis.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="styly" thumbnail={thumbStyly} title="higidry">
                        Empresa de Limpeza de estofados.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Projetos conlcuídos
                </Heading>
            </Section>
        </Container>
    </Article>
  )
}

export default works
export { getServerSideProps } from '../components/Chakra'