'use client'

import Team from './Team'

import {
    Container,
    Box,
    Heading,
    Text,
    Stack,
} from '@chakra-ui/react'

export default function page() {
  return (
    <Container maxW={'5xl'} pb={20} mt={'120px'}>
      <Heading
        fontWeight={700}
        fontSize={'6xl'}
        textAlign={'center'}
        mb={10}
        color={'accent.500'}
        id='Mission'
      >
        About Us
      </Heading>

      <Stack
        as={Box}
        textAlign={'center'}
      >
      <Heading
        fontWeight={700}
        fontSize={'2xl'}
        mb={5}
      >
        Our Mission
      </Heading>
      <Text color={'gray.500'} fontSize={'lg'}>
       Text for Mission
      </Text>
    </Stack>

    <Team />
  </Container>
  )
}
