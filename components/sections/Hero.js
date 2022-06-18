import { Box, Heading, HStack, Text, Container, VStack, Button, IconButton, Image, Stack } from "@chakra-ui/react";
import { AiFillFilePdf } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const Hero = () => (
  <Box pt={8} pb={40}>
    <Container maxW="container.xl" h="full" justifyContent="center">
      <Stack direction={{ base: 'column', md: 'row' }} align="center" justify="center" h="full" w="full">
        <VStack align="start" justify="center" h="700px" w="full" spacing={4}>
          <Heading color="blue.500" w={{ base: 'auto', lg: '400px' }} size="3xl">I Have Frontend Web Development Skills and Experience</Heading>
          <Text fontWeight="semibold" fontSize="lg" w={{ base: 'auto', lg: '500px' }} pb={4}>Hi, I&rsquo;m Ian Sui and I&rsquo;m a Frontend Developer on Appdeture and Xircus NFT Marketplace.</Text>
          <Stack direction={{ base: 'column', lg: 'row' }} pb={8}>
            <Button 
              as="a" 
              href="https://www.linkedin.com/in/ronan-ian-d-sui-913100134/" 
              target="_blank"
              _hover={{ bgColor: 'blue.200', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
              _active={{ bgColor: 'blue.200' }}
              _focus={{ borderColor: 'blue.500' }} 
              color="white"
              bgColor="blue.500" 
              size="lg"
              rounded="full"
              leftIcon={<BsLinkedin fontSize={18} color="white" />}>
                LinkedIn Profile
            </Button>
            <Button 
              as="a" 
              href="../files/portfolio.pdf"
              target="_blank"
              _hover={{ bgColor: 'gray.900', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
              _active={{ bgColor: 'gray.900' }}
              _focus={{ borderColor: 'gray.900' }}
              bgColor="black" 
              color="white"
              size="lg"
              rounded="full"
              leftIcon={<AiFillFilePdf fontSize={18} color="white" />}>
                My Portfolio
            </Button>
          </Stack>
          <HStack spacing={8}>
            <Text fontWeight="semibold">Check out my projects on</Text>
            <IconButton
              as="a" 
              href="https://github.com/iansui2" 
              target="_blank"
              _hover={{ bgColor: 'gray.900' }}
              _active={{ bgColor: 'gray.900' }}
              _focus={{ borderColor: 'gray.900' }}
              bgColor="black" 
              size="md"
              rounded="full"
              icon={<BsGithub fontSize={16} color="white" />} />
          </HStack>
        </VStack>
        <Box pos="relative" bgImg="../images/design.png" bgSize="cover" h="500px" w={{ base: '350px', md: 'full' }}>
          <Image pos="absolute" bottom={4} left={{ base: 2, md: 16 }} right={{ base: 2, md: 16 }} src="../images/image.png" alt="Design" w={{ base: '350px', md: '300px', lg: '400px', xl: '500px' }} />
        </Box>
      </Stack>
    </Container>
  </Box>
)