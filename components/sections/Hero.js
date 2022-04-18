import { Box, Heading, Text, Container, VStack, Button, Spacer, Stack } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Typer from 'react-type-animation'
import { Fade, Bounce } from "react-reveal"

export const Hero = ({ image }) => (
  <Box bgImage={image} h="800px" bgSize="cover">
    <Box h="full" bgColor="rgba(0,0,0,0.5)">
    <Container maxW="container.md" h="full" centerContent justifyContent="center">
      <VStack spacing={4} color="white">
        <Fade left cascade duration={2000}>
          <Heading color="white" size="4xl">{`I'am Ian Sui`}</Heading>
        </Fade>
        <Heading size="lg" color="blue.500">
          <Typer sequence={[
            "Frontend Developer at Xircus NFT Marketplace", 15000,
            '', 15000,
            "Current Skillset: ReactJS, NextJS, Chakra UI", 15000,
            '', 15000,
            "BS Computer Science Graduating Student", 15000,
            '', 15000
          ]} repeat={Infinity} wrapper="span" />   
        </Heading>
        <Spacer />
        <Bounce duration={2000}>
          <Stack direction={{ base: 'column', md: 'row'}} spacing={4}>
            <Button 
              as="a" 
              href="https://www.linkedin.com/in/ronan-ian-d-sui-913100134/" 
              target="_blank"
              _hover={{ bgColor: 'blue.200' }}
              _active={{ bgColor: 'blue.200' }}
              _focus={{ borderColor: 'blue.500' }} 
              bgColor="blue.500" 
              size="lg"
              rounded="full"
              leftIcon={<BsLinkedin fontSize={16} color="white" />}>
                LinkedIn Profile
            </Button>
            <Button 
              as="a" 
              href="https://github.com/iansui2" 
              target="_blank"
              _hover={{ bgColor: 'gray.900' }}
              _active={{ bgColor: 'gray.900' }}
              _focus={{ borderColor: 'gray.900' }}
              bgColor="black" 
              size="lg"
              rounded="full"
              leftIcon={<BsGithub fontSize={16} color="white" />}>
                Github
            </Button>
          </Stack> 
        </Bounce>
      </VStack>
    </Container>
    </Box>
  </Box>
)