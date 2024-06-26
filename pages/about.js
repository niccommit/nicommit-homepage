import {
  Container,
  Box,
  Heading,
  Button,
  Link,
  List,
  ListItem,
  Icon,
  Divider
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import {
  IoLogoTwitter,
  // IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram
} from 'react-icons/io5'
import { FaLastfm } from 'react-icons/fa6'
import Paragraph from '../components/paragraph'

export default function About() {
  return (
    <Container maxW="container.lg" px={{ base: 'initial', md: '4em' }} mb={10}>
      <Section delay={0.4}>
        <Heading as="h2" fontSize={24} mb={8} variant="section-title">
          About
        </Heading>

        <Paragraph>
          Nicolás is a software developer based in Ipiales, Colombia, where his
          passion for backend code takes flight. He thrives on crafting digital
          services that enhance people&apos;s lives, and his talent for
          connecting with others fuels his ability to solve problems and conjure
          innovative ideas. When he&apos;s not coding, Nicolás immerses himself
          in the world of music, savoring the sounds of his LP collection and
          sharing his passion with his son.
        </Paragraph>
        <Box align="center" my={10}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Divider my={8} />

      <Section delay={0.6}>
        <Heading as="h3" fontSize={24} my={8} variant="section-title">
          I ❤
        </Heading>
        <Paragraph>
          Family,{' '}
          <Link
            href="https://open.spotify.com/playlist/7ETbaX34v31mWeQYo3lac7?si=dbb23dc31fa44420"
            target="_blank"
          >
            Music
          </Link>
          , Playing Turntable, Concerts and Festivals, Cybersecurity.
        </Paragraph>
      </Section>

      <Section delay={0.8}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <iframe
            style={{ borderRadius: '14px' }}
            src="https://open.spotify.com/embed/playlist/7ETbaX34v31mWeQYo3lac7?utm_source=generator&theme=0"
            width="80%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowtransparency="true"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Section>

      <Divider my={8} />

      <Section delay={0.9}>
        <Heading as="h3" fontSize={24} my={8} variant="section-title">
          On the web
        </Heading>
        <List
          display={{ base: 'initial', md: 'flex' }}
          justifyContent="center"
          align="center"
        >
          <ListItem>
            <Link href="https://github.com/niccommit" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @niccommit
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.x.com/niccommit" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @niccommit
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/nicccccolass" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @nicccccolass
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.last.fm/user/Nicccccolas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={FaLastfm} />}
              >
                @Nicccccolas
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Divider my={8} />
    </Container>
  )
}
