import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import { 
  IoLogoTwitter, 
  IoLogoInstagram, 
  IoLogoGithub, 
  IoLogoFacebook 
} from 'react-icons/io5'

import thumbLinkedin from '../public/images/linkedin.jpeg'
import thumbPortifolio from '../public/images/projects/potifolio.png'

const Home = () => (
  <Layout title="Homepage">
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        🤗, Olá sou desenvolvedor web e mobile usando react.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Oman Ramalho
          </Heading>
          <p>Desenvolvedor Web e mobile</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="https://avatars.githubusercontent.com/u/64960771?v=4"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Trabalho
        </Heading>
        <Paragraph>
          Recentemente desenvolvi um clone do site opensea
          que tem a finalidade de comprar e vender nfts, a
          plataforma possui acesso a carteira digital de cryptomoedas
          e as transações são feitas através de etherum
          .
          {' '}
          <NextLink href="/works/opensea">
            <Link style={{ color: '#fd00db'}}>opensea-blockchain-clone</Link>
          </NextLink>
          .
        </Paragraph>

        <Box align="center" my={4} mt={8}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meu portfólio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection style={{ marginTop: 10}}>
          <BioYear style={{ color: '#fd00db'}}>2000</BioYear>
          Nascido em Fortaleza, Ceará, Brasil. ☀
        </BioSection>
        <BioSection style={{ marginTop: 10}}>
          <BioYear style={{ color: '#fd00db'}}>[2021 - 2024]</BioYear>
          Graduando em ciências da computação na universidade
          Farias Brito em Fortaleza, Ceará, Brasil. 👨‍🎓
        </BioSection>
        <BioSection style={{ marginTop: 10}}>
          <BioYear style={{ color: '#fd00db'}}>2021</BioYear>
          Estágio na Greendot, Fortaleza, ceará.
          como desenvolvedor web e mobile 👾
        </BioSection>
        <BioSection style={{ marginTop: 10}}>
          <BioYear style={{ color: '#fd00db'}}>2022</BioYear>
          Desenvolvedor web Júnior, trabalhando de
          forma remota na MobiGap, Portugal, Lisboa. 🐱‍💻
        </BioSection>
        <BioSection style={{ marginTop: 10}}>
          <BioYear style={{ color: '#fd00db'}}>!NOW</BioYear>
          Trabalhando de forma remota em projetos de clientes. 🧠
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Eu 💜
        </Heading>
        <Paragraph>
          Programar,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Estudar
          </Link>
          , Aproveitar,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Surfar
          </Link>
          , Aprender coiasas novas.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading mt={20} as="h3" variant="section-title">
          Minhas Redes Sociais
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/omanramalho42" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @omanramalho42
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/oman_company" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @omancompany
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/profile.php?id=100066750481861" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @omancompany
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/oman.company/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @oman_company
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={10}>
          <GridItem
            href="https://www.linkedin.com/in/oman-ramalho-92749a210/"
            title="Linkedin"
            thumbnail={thumbLinkedin}
          >
            Meu Linkedin
          </GridItem>
          <GridItem
            href="https://www.omancompany.com.br"
            title="Oman Company"
            thumbnail={thumbPortifolio}
          >
            Oman Company
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Últimos Posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'