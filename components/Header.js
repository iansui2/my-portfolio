import { useState } from 'react'
import { 
  Box, Button, Container, Heading, HStack, IconButton, 
  Spacer, useDisclosure, VStack, Image, useColorModeValue as mode, useColorMode, Icon
} from "@chakra-ui/react"
import { MobileDrawer } from "./Drawer"
import Link from "next/link"
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoSettings, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { MdOutlineWork } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose, AiFillProject } from 'react-icons/ai'

const links = [
  {
    title: 'Experience',
    href: '#experience'
  },
  {
    title: 'Skills',
    href: '#skills'
  },
  {
    title: 'Projects',
    href: '#projects'
  },
  {
    title: 'Contact Me',
    href: '#contact'
  }
]

export const Header = ({ title, image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenLink, setChosenLink] = useState('')
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w="full" zIndex={1000} bg={mode('rgba(255,255,255,0.7)', 'rgba(0,0,0,0.7)')} pos="fixed" py={6}>
      <Container maxW="container.xl" color="white">
        <HStack justify="space-between" display={{ base: 'flex', md: 'none' }} spacing={2}>
          <Link href="/" passHref>
            <HStack spacing={4}>
              <Image h="50px" src={image} alt="Ian Sui Icon" />
              <Heading size="lg" color="blue.500">Ian Sui</Heading>
            </HStack>
          </Link>        
          <IconButton 
            variant="ghost"
            borderRadius="xs"
            size="md"
            color="black"
            _focus={{ borderColor: 'primary.500' }}
            icon={<GiHamburgerMenu fontSize={24} />}
            onClick={onOpen}
          />
        </HStack>
        <MobileDrawer isOpen={isOpen} onClose={onClose}>
          <VStack h="full" w="full" align="start">
            <HStack w="full" justify="space-between" py={10} color="white">
              <Link href="/" passHref>
                <HStack spacing={4}>
                  <Image h="50px" src={image} alt="Ian Sui Icon" />
                  <Heading size="lg" color="blue.500">Ian Sui</Heading>
                </HStack>
              </Link>   
              <HStack spacing={2}>
                <IconButton
                  variant="outline"
                  borderRadius="xs"
                  size="sm"
                  borderColor="blue.500"
                  borderWidth={1}
                  _active={{ bgColor: 'blue.500' }}
                  _focus={{ borderColor: 'blue.500' }} 
                  onClick={toggleColorMode}
                  icon={colorMode == 'light' ? <IoMoonOutline color={mode('black', 'white')} /> : <IoSunnyOutline color="white" />}
                />     
                <IconButton
                  variant="outline"
                  borderRadius="xs"
                  size="sm"
                  borderColor="blue.500"
                  borderWidth={1}
                  _active={{ bgColor: 'blue.500' }}
                  _focus={{ borderColor: 'blue.500' }} 
                  icon={<AiOutlineClose color={mode('black', 'white')} fontSize={16} />}
                  onClick={onClose} />
              </HStack>
            </HStack>
            <VStack align="start" w="full" spacing={10}>
              {
                links.map((link, linkKey) => (
                  <Link key={linkKey} href={link.href} passHref>
                    <Button variant="link" fontSize="lg" color={chosenLink == link.title ? 'blue.500' : mode('black', 'white')} _focus={{ borderColor: 'blue.500' }} borderColor="blue.500" borderBottomWidth={chosenLink == link.title ? 4 : 0} _hover={{ color: 'blue.500', borderBottomWidth: 4, borderColor: 'blue.500' }} onClick={() => setChosenLink(link.title)}>{link.title}</Button>
                  </Link>
                ))  
              }
            </VStack>
            <Spacer />
            <HStack pb={6}>
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
          </VStack>  
        </MobileDrawer>
        <HStack spacing={12} display={{ base: 'none', md: 'flex' }}>
          <Link href="/" passHref>
            <HStack spacing={4}>
              <Image h="50px" src={image} alt="Ian Sui Icon" />
              <Heading size="lg" color="blue.500">Ian Sui</Heading>
            </HStack>
          </Link>      
          <Spacer />
          {
            links.map((link, linkKey) => (
              <Link key={linkKey} href={link.href} passHref>
                <Button variant="link" fontSize="lg" color={chosenLink == link.title ? 'blue.500' : mode('black', 'white')} _focus={{ borderColor: 'blue.500' }} borderColor="blue.500" borderBottomWidth={chosenLink == link.title ? 4 : 0} _hover={{ color: 'blue.500', borderBottomWidth: 4, borderColor: 'blue.500' }} onClick={() => setChosenLink(link.title)}>{link.title}</Button>
              </Link>  
            ))  
          }
          <IconButton
            size="sm"
            rounded="full"
            bg="blue.500"
            _hover={{ bgColor: 'blue.200' }}
            _active={{ bgColor: 'blue.200' }}
            _focus={{ borderColor: 'white' }}
            onClick={toggleColorMode}
            icon={colorMode == 'light' ? <IoMoonOutline color="white" /> : <IoSunnyOutline color="white" />}
          />
        </HStack>
      </Container>
    </Box>
  )
}