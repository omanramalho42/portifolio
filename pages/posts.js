import { 
  Container, 
  Heading, 
  SimpleGrid 
} from '@chakra-ui/react'
import dynamic from 'next/dynamic';
// import Layout from '../components/layouts/Article'
const Layout = dynamic(() => import("../components/layouts/Article"));
import Section from '../components/Section'
import { GridItem } from '../components/GridItem'

import thumbReact from '../public/images/react.png'
import thumbReactNative from '../public/images/reactnative.jpg'
import thumbNodejs from '../public/images/nodejs.jpg'
import thumbTypescript from '../public/images/typescript.png'
import thumbThirdWeb from '../public/images/thirdweb.png'
import thumbRedux from '../public/images/redux.png'
import thumbTailwind from '../public/images/tailwindcss.jpg'
import thumbStyledComponents from '../public/images/styledcomponents.png'
import thumbChakraUi from '../public/images/chakra.png'
import thumbEmotion from '../public/images/emotion.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts Populares
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="React Js"
            thumbnail={thumbReact}
            href="https://pt-br.reactjs.org/"
          />
          <GridItem
            title="React Native"
            thumbnail={thumbReactNative}
            href="https://reactnative.dev/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Node js"
            thumbnail={thumbNodejs}
            href="https://nodejs.org/en/about/"
          />
          <GridItem
            title="Typescript"
            thumbnail={thumbTypescript}
            href="https://www.typescriptlang.org/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Web 3.0"
            thumbnail={thumbThirdWeb}
            href="https://thirdweb.com/"
          />
          <GridItem
            title="Redux js"
            thumbnail={thumbRedux}
            href="https://redux.js.org/introduction/getting-started"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="TailwindCss"
            thumbnail={thumbTailwind}
            href="https://tailwindcss.com/"
          />
          <GridItem
            title="Chakra Ui"
            thumbnail={thumbChakraUi}
            href="https://chakra-ui.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Emotion"
            thumbnail={thumbEmotion}
            href="https://emotion.sh/docs/introduction"
          />
          <GridItem
            title="Styled Components"
            thumbnail={thumbStyledComponents}
            href="https://styled-components.com/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/Chakra'