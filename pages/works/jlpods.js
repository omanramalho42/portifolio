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
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="jlpods">
      <Container>
        <Title>
          JlPods <Badge>2022</Badge>
        </Title>
        <P>
          Ecommerce de vendas de pods descartáveis e
          essências para vapes
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://www.github.com/omanramalho42/jlpods">www.github.com/omanramalho42/jlpods</Link>
            <br />
            <Meta>Platform</Meta>
            <span>Windows / Mac</span>
          </ListItem>
          <ListItem>
            <Meta>Resume</Meta>
            <Link href="">
              JlPods é um eccomerce de pods descartáveis{' '}
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
              <Badge mr={2}>appbank</Badge>
              
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
export { getServerSideProps } from '../../components/chakra'