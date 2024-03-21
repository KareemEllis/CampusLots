'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoTime, IoMapOutline } from 'react-icons/io5'
import { LiaMapMarkerAltSolid, LiaParkingSolid } from "react-icons/lia";

const features = [
  {
    icon: <Icon as={IoTime} color={'accent.700'} w={5} h={5} />,
    text: 'Real-time Parking Availability Updates'
  },
  {
    icon: <Icon as={LiaMapMarkerAltSolid} color={'accent.700'} w={5} h={5} />,
    text: 'Efficient Route Recommendations'
  },
  {
    icon: <Icon as={LiaParkingSolid} color={'accent.700'} w={5} h={5} />,
    text: 'Optimal Parking Lot Suggestions'
  },
  {
    icon: <Icon as={IoMapOutline} color={'accent.700'} w={5} h={5} />,
    text: 'Seamless Integration with Maps'
  }
]

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} id='Features'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
        <Stack 
          spacing={4} 
          alignItems={{ base: 'center', md: 'start' }} 
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text
            textTransform={'uppercase'}
            color={'primary.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            
            rounded={'md'}>
            Features
          </Text>
          <Heading>Why Choose Campus Lots?</Heading>
          <Text color={'gray.500'} fontSize={'lg'} mb={4}>
            Discover the Power of Campus Lots
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }
          >
            {features.map((item) => (
              <Feature
                icon={item.icon}
                iconBg={useColorModeValue('accent.100', 'accent.900')}
                text={item.text}
              />
            ))
            }
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1500333070776-343c73e1eb4a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

