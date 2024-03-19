'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: '4xl', sm: '6xl', md: '7xl' }}
            lineHeight={'110%'}>
              Effortless Parking<br />
            <Text as={'span'} color={'accent.500'}>
              Simplified!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          Find the perfect parking spot hassle-free with Campus Lots. Our smart app uses advanced technology to ensure you never waste time searching for parking again.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              rounded={'full'}
              px={6}
            >
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
