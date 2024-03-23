'use client'
import { 
    chakra, 
    Stack, 
    Container, 
    Link, 
    Box, 
    Button 
} from '@chakra-ui/react';

const CTA = () => {
  return (
    <Container maxW={'5xl'} mb={20}>
        <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={5}
        alignItems={{ base: 'flex-start', md: 'center' }}
        textAlign={{ base: 'center', md: 'left' }}
        justifyContent="space-between"
        rounded="lg"
        boxShadow="md"
        bg={'gray.100'}
        p={{ base: 8, md: 16 }}
        >
        <Box width={'100%'}>
            <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
            Ready to get started?
            </chakra.h1>
            <chakra.h2
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            bg={'primary.500'}
            bgClip="text"
            >
            Set up CampusLots!
            </chakra.h2>
        </Box>
        <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: 0, sm: 3 }}
            w={{ base: '100%', sm: 'auto' }}
            margin={'auto'}
        >
            <Button
            as={Link}
            href="#"
            color="white"
            variant="solid"
            size="lg"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            lineHeight={1}
            bg={'primary.500'}
            _hover={{ bg: 'primary.600' }}
            >
            Get Started
            </Button>
            <Button
            as={Link}
            href="#"
            size="lg"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            bg={'gray.300'}
            _hover={{ bg: 'gray.400' }}
            lineHeight={1}
            >
            Learn more
            </Button>
        </Stack>
        </Stack>
    </Container>
  );
};

export default CTA;
