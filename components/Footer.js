import { Box, HStack, Text, Spacer, Container, Stack, IconButton, useColorModeValue as mode } from "@chakra-ui/react";
import { AiFillFilePdf } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const Footer = () => (
  <Box py={4}>
    <Container maxW="container.xl">
      <Stack direction={{ base: 'column', md: 'row' }} w="full">
        <HStack spacing={1} fontWeight="bold">
          <Text>Powered by</Text>
          <Text as="a" href={process.env.REACT_APP_VERCEL} target="_blank" color="blue.500" _hover={{ transform: 'scale(1.1)' }}>Vercel</Text>
        </HStack>
        <Spacer />
        <HStack>
          <IconButton 
            as="a" 
            href={process.env.REACT_APP_LINKEDIN}
            target="_blank"
            _hover={{ bgColor: 'blue.200', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
            _active={{ bgColor: 'blue.200' }}
            _focus={{ borderColor: 'blue.500' }} 
            bgColor="blue.500" 
            size="md"
            rounded="full"
            icon={<BsLinkedin fontSize={16} color="white" />} />
          <IconButton
            as="a" 
            href={process.env.REACT_APP_GITHUB} 
            target="_blank"
            _hover={{ bgColor: mode('gray.900', 'gray.300'), transform: 'scale(1.05)', transition: 'all 300ms ease' }}
            _active={{ bgColor: mode('gray.900', 'gray.300') }}
            _focus={{ borderColor: mode('gray.900', 'gray.300') }}
            bgColor={mode('black', 'white')}
            size="md"
            rounded="full"
            icon={<BsGithub fontSize={16} color={mode('white', 'black')} />} />
          <IconButton 
            as="a" 
            href={`../${process.env.REACT_APP_PORTFOLIO}`}
            target="_blank"
            _hover={{ bgColor: 'yellow.300', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
            _active={{ bgColor: 'yellow.300' }}
            _focus={{ borderColor: 'yellow.300' }}
            bgColor="yellow.500" 
            color="white"
            size="md"
            rounded="full"
            icon={<AiFillFilePdf fontSize={18} color="white" />} />
        </HStack>
        <Spacer />
        <HStack spacing={1} fontWeight="bold">
          <Text>Last Updated on</Text>
          <Text color="blue.500" cursor="default" _hover={{ transform: 'scale(1.05)' }}>June 10, 2024</Text>
        </HStack>
      </Stack>
    </Container>
  </Box>
)