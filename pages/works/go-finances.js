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
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="go-finances">
      <Container>
        <Title>
          Go Finances <Badge>2021</Badge>
        </Title>
        <P>
          Go Finances é um app mobile de gestão
          financeira
        </P>
        <P>
          This service has been closed. Thank you for over 130,000 registered
          users!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://www.github.com/omanramalho42/gofinances">
              www.github.com/omanramalho42/gofinances <ExternalLinkIcon mx="2px" />
            </Link>
            <Meta>Platform</Meta>
            <span>iOS / ANDROID</span>
          </ListItem>
          <ListItem>
            <Meta>Resume</Meta>
            <Link href="">
              Go Finances é um app de gestão financeira{' '}
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
        <WorkImage src="../../public/images/works/go-finance_03.jpeg" alt="go-finance" />
        <WorkImage src="../../public/images/works/go-finance_04.jpeg" alt="go-finance" />
        <WorkImage src="../../public/images/works/go-finance_05.jpeg" alt="go-finance" /> */}
      </Container>
    </Layout>
  )
  
export default Work
export { getServerSideProps } from '../../components/Chakra'