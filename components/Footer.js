import { Box, HStack, Text, Spacer, Container, Stack, IconButton } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const Footer = ({ }) => (
  <Box pt={16} pb={4}>
    <Container maxW="container.xl">
      <Stack direction={{ base: 'column', md: 'row' }} color="white">
        <HStack spacing={1}>
          <Text>Powered by</Text>
          <Text color="gray">Heroku</Text>
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
        <HStack spacing={1}>
          <Text>Last Updated on</Text>
          <Text color="gray">April 17</Text>
        </HStack>
      </Stack>
    </Container>
  </Box>
)