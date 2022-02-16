import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Uber-Clone">
    <Container>
      <Title>
        Uber Clone <Badge>2022-</Badge>
      </Title>
      <P>
        App Mobile inspirado no Uber, usando React native.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repositório</Meta>
          <Link href="https://www.github.com/omanramalho42/uber-clone">
          https://www.github.com/omanramalho42/uber-clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>IOS / ANDROID</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, </span>
          <span>Google places auto Complete, </span>
          <span>React Map, </span>
          <span>Tailwindcss. </span>
        </ListItem>
        <ListItem>
          <Meta>Resume</Meta>
          <Link href="https://www.github.com/omanramalho42/uber-clone">
            App mobile com simulação de viajens de uber a partir de duas
            distancias, indicando preço, tempo de viajem e distância entre os pontos.
             <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <WorkImage src="../public/images/works/uberclone.png" alt="UberClone" />
      <WorkImage src="/images/works/uberclone_02.png" alt="UberClone" /> */}
    </Container>
  </Layout>
)
export default Work
export { getServerSideProps } from '../../components/chakra'