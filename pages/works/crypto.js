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
    <Layout title="crypto">
      <Container>
        <Title>
          Crypto Tracker <Badge>2021</Badge>
        </Title>
        <P>
          Crypto Tracker é um app web que lista
          todas as crytos moedas
        </P>
        <P>
          This service has been closed. Thank you for over 130,000 registered
          users!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://www.github.com/omanramalho42/cryptoMoeda">www.github.com/omanramalho42/crypto</Link>
            <br />
            <Meta>Platform</Meta>
            <span>Windows / Mac</span>
          </ListItem>
          <ListItem>
            <Meta>Resume</Meta>
            <Link href="">
              Crypto Tracker Lista as moedas digitais{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <UnorderedList my={4}>
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