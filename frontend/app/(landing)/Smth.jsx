'use client'

import {
  Box,
  SimpleGrid,
  Heading,
  Container,
  Text,
  Image,
  Flex,
  Stack,
} from '@chakra-ui/react'

import { Player, Controls } from '@lottiefiles/react-lottie-player'

export default function Smth() {
  return (
    <>
        <Container maxW={'5xl'} p={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'} height={'100%'}>
            
            <Flex height={'100%'} alignItems={'center'} justifyContent={'center'}>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/5c38ae4b-7f8a-4e68-9c97-a71113cfe64b/39Bhp9rOLu.json"
                    style={{ maxWidth: '450px'}}
                    speed={0.7}
                    resizeMode='cover'
                >
                    <Controls visible={false} />
                </Player>
            </Flex>

            <Box textAlign={{ base: 'center', md: 'left' }}>
                <Heading>smth</Heading>
                <Text color={'gray.500'} fontSize={'lg'} mb={4}>
                    smth about carbon emissions, extra motivation to use app
                </Text>
            </Box>
        </SimpleGrid>
        </Container>
    </>

  )
}
