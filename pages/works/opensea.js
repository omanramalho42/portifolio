import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/Article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/Work'
  import P from '../../components/Paragraph'

  const Work = () => (
    <Layout title="opensea">
      <Container>
        <Title>
          Opensea BlockChain Clone <Badge>2022</Badge>
        </Title>
        <P>
          Opensea Blockchain Clone é uma plataforma
          de venda e compra de Nft`s
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://www.github.com/omanramalho42/opensea-blockchain-clone">
              www.github.com/omanramalho42/opensea-blockchain-clone
            </Link><br />
            <Meta>Platform</Meta>
            <span>WINDOWS / MAC</span>
          </ListItem>
          <ListItem>
            <Meta>Resume</Meta>
            <Link href="">
              Opensea Blockchain Clone{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next Js</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="">
              <Badge mr={2}>Acessos</Badge>
              nenhum
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Link href="">
              <Badge mr={2}>link</Badge>
            </Link>
            <ExternalLinkIcon mx="2px" />
          </ListItem>
  
          <ListItem>
            <Badge mr={2}>other</Badge>
            <Link href="">
            </Link>
            <ExternalLinkIcon mx="2px" />
          </ListItem>
        </UnorderedList>
  
        {/* <SimpleGrid columns={2} gap={2}>
          <WorkImage src={GoFinances} alt="go-finance" />
          <WorkImage src="../../public/images/works/go-finance_02.jpeg" alt="go-finance" />
        </SimpleGrid>
        <WorkImage src="../../publc/images/works/go-finance_03.jpeg" alt="go-finance" />
        <WorkImage src="../../public/images/works/go-finance_04.jpeg" alt="go-finance" />
        <WorkImage src="../../public/images/works/go-finance_05.jpeg" alt="go-finance" /> */}
      </Container>
    </Layout>
  )
  
export default Work
export { getServerSideProps } from '../../components/Chakra'