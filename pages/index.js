import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChatIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a small indie developer based in Switzerland!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jan Lauber
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
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
            src="/images/janlauber.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jan is a small indie developer based in Bern with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          to do some sports. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop">
            <Link>BluePhish</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear> <br/>
          Born in Bern, Switzerland.
        </BioSection>
        <BioSection>
          <BioYear>2015-2019</BioYear> <br/>
          Completed the computer scientist apprenticeship at Fritz Studer AG in system technology in-depth.
        </BioSection>
        <BioSection>
          <BioYear>2015-2019</BioYear> <br/>
          Completed the part-time techinical federal vocational baccalaureate at the GIBB. 
        </BioSection>
        <BioSection>
          <BioYear>2019-2020</BioYear> <br/>
          Completed civilian service as kindergarten teacher in Konolfingen.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear> <br/>
          Working as a system and devops engineer at BlueStone AG.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music & Music Production,{' '}
            Sports, Playing Guitar{' '}
            
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/janlauber" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @janlauber
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/jaenu.lauber" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @jaenu.lauber
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://keybase.io/janlauber" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={ChatIcon} />}
              >
                Keybase: @janlauber
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home