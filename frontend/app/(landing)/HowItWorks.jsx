'use client'

import {
  Box,
  Text,
  Button,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react'

const features = [
    {
        heading: 'Vehicle Tracking',
        text: 'Smart cameras at each parking lot count vehicles in real-time.'
    },
    {
        heading: 'User Location',
        text: 'Your current location is detected using GPS.'
    },
    {
        heading: 'Destination Input',
        text: 'Tell us where you\'re going on campus.'
    },
    {
        heading: 'Distance Calculation',
        text: 'We calculate distance to parking lots and your destination.'
    },
    {
        heading: 'Optimal Recommendation',
        text: 'We suggest the best parking lot based on availability and proximity.'
    },
    {
        heading: 'Route Guidance',
        text: 'Receive step-by-step directions to your recommended spot.'
    },
]

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  )
}

export default function HowItWorks() {
  return (
    <Box as={Container} maxW="5xl" mb={20} p={4} id='HowItWorks'>
      
      <Box textAlign={'center'}>
        <chakra.h2 fontSize="3xl" fontWeight="700" mb={4}>
          How It Works!
        </chakra.h2>
      </Box>
      

      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}
        textAlign={{ base: 'center', sm: 'left' }}
      >
        {features.map((feature, index) => (
          <Feature
            heading={
              <>
              <Text as={'span'} color={'accent.600'} mr={2}>
                {index + 1}. 
              </Text>
              {feature.heading}
              </>
              
            }
            
            text={feature.text}
          />
        ))

        }
      </Grid>
    </Box>
  )
}
