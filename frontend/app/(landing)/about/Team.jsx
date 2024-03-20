'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  HStack, 
  IconButton,
  Image,
  Grid,
  Tooltip
} from '@chakra-ui/react'

import { FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa";

const persons = [
  {
    name: 'Rojae Wedderburn',
    imageUrl: 'https://media.licdn.com/dms/image/D4D35AQHHgAx38mpvlg/profile-framedphoto-shrink_400_400/0/1705028266059?e=1711530000&v=beta&t=HOWT9-fDX-5h6PxnaseVIDxyN_WU-DoKG0sRxeW9RAA',
    socialLinks: [
     {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rojaewedderburn/',
      icon: <FaLinkedin />
     },
    ],
    description: 'Full-Stack dev from Jamaica bringing websites and applications to life.'
  },
  {
    name: 'Roschelle Matthews-Rhoden',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialLinks: [
     {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/roschelle-rhoden-8470271b0/',
      icon: <FaLinkedin />
     },
    ],
    description: 'Full-Stack dev from Jamaica bringing websites and applications to life.'
  },
  {
    name: 'Kareem Ellis',
    imageUrl: 'https://media.licdn.com/dms/image/D4E03AQE5Pq4bangpEg/profile-displayphoto-shrink_400_400/0/1700352212175?e=1716422400&v=beta&t=q7rgY62-F2tTgmvHNRKMw2GzyIx-c6qq2qyuOWucuVE',
    socialLinks: [
     {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kareem-ellis-1b14a318b/',
      icon: <FaLinkedin />
     },
     {
      label: 'GitHub',
      url: 'https://github.com/KareemEllis',
      icon: <FaGithub />
     },
     {
      label: 'Website',
      url: 'https://www.kareemellis.com/',
      icon: <FaGlobe />
     },
    ],
    description: 'Full-Stack dev from Jamaica bringing websites and applications to life.'
  },
  {
    name: 'Alyssa Walker',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialLinks: [
     {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kareem-ellis-1b14a318b/',
      icon: <FaLinkedin />
     },
     {
      label: 'GitHub',
      url: 'https://github.com/KareemEllis',
      icon: <FaGithub />
     },
     {
      label: 'Website',
      url: 'https://www.kareemellis.com/',
      icon: <FaGlobe />
     },
    ],
    description: 'Full-Stack dev from Jamaica bringing websites and applications to life.'
  },
  
]

const PersonInfo = ({ name, imageUrl, socialLinks, description }) => {
  return (
    <Box display="flex" alignItems="center">
      <Image
        src={imageUrl}
        alt={name}
        borderRadius="lg"
        boxSize="120px"
        objectFit="cover"
        marginRight="4"
      />
      <Stack spacing="2">
        <Text fontWeight="bold">{name}</Text>
        <HStack>
          {socialLinks.map((link, index) => (
            <Tooltip label={link.label} fontSize='md'>
              <IconButton
                key={index}
                aria-label={link.label}
                icon={link.icon}
                color={'primary.500'}
                variant="ghost"
                size="lg"
              />
            </Tooltip>
            
          ))}
        </HStack>
        <Text>{description}</Text>
      </Stack>
    </Box>
  );
};

export default function Team() {
  return (
    <>
      <Container maxW={'5xl'} mt={20} mb={10}>
        <Stack
          as={Box}
          textAlign={'center'}
          py={{ base: 20, md: 20 }}
        >
          <Heading
            fontWeight={700}
            fontSize={'2xl'}
            mb={5}
          >
            CampusLots Team and Contributors
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Amazing developers who have contributed time, effort, and thought to CampusLots. Without them, this project would not be possible.
          </Text>
        </Stack>

        <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}
        textAlign={{ base: 'center', sm: 'left' }}
      >
        {persons.map((person, index) => (
          <PersonInfo
            key={index}
            name={person.name}
            imageUrl={person.imageUrl}
            socialLinks={person.socialLinks}
            description={person.description}
          />
        ))

        }
      </Grid>
      </Container>
    </>
  )
}
