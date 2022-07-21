import { Box, HStack, Text, Spacer, Container, Stack, IconButton } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const Footer = ({ }) => (
  <Box py={4}>
    <Container maxW="container.xl">
      <Stack direction={{ base: 'column', md: 'row' }} w="full">
        <HStack spacing={1} fontWeight="bold">
          <Text>Powered by</Text>
          <Text as="a" href="https://vercel.com/" target="_blank" color="blue.500" _hover={{ transform: 'scale(1.1)' }}>Vercel</Text>
        </HStack>
        <Spacer />
        <HStack>
          <IconButton 
            as="a" 
            href="https://www.linkedin.com/in/ronan-ian-d-sui-913100134/" 
            target="_blank"
            _hover={{ bgColor: 'blue.200' }}
            _active={{ bgColor: 'blue.200' }}
            _focus={{ borderColor: 'blue.500' }} 
            bgColor="blue.500" 
            size="md"
            rounded="full"
            icon={<BsLinkedin fontSize={16} color="white" />} />
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
        <Spacer />
        <HStack spacing={1} fontWeight="bold">
          <Text>Last Updated on</Text>
          <Text color="blue.500" cursor="default" _hover={{ transform: 'scale(1.05)' }}>July 21, 2022</Text>
        </HStack>
      </Stack>
    </Container>
  </Box>
)