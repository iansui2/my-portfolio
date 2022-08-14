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
import { useRouter } from 'next/router'

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
  }
]

export const Header = ({ title, image }) => {
  const router = useRouter()
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
          <HStack spacing={2}>
            <IconButton
              size="sm"
              rounded="full"
              bg="blue.500"
              _hover={{ bgColor: 'blue.200', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
              _active={{ bgColor: 'blue.200' }}
              _focus={{ borderColor: 'white' }}
              onClick={toggleColorMode}
              icon={colorMode == 'light' ? <IoMoonOutline color="white" /> : <IoSunnyOutline color="white" />}
            />
            <IconButton 
              variant="ghost"
              borderRadius="xs"
              size="md"
              _focus={{ borderColor: 'primary.500' }}
              icon={<GiHamburgerMenu fontSize={24} color={mode('black', 'white')} />}
              onClick={onOpen}
            />
          </HStack>  
        </HStack>
        <MobileDrawer isOpen={isOpen} onClose={onClose}>
          <VStack h="full" w="full" align="start">
            <HStack w="full" justify="space-between" py={10} color="white">
              <Link href="/" passHref>
                <HStack 
                  spacing={4} 
                  onClick={() => {
                    setChosenLink('')
                    onClose()
                  }}>
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
                  _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease' }}
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
                  _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease' }}
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
                    <Button 
                      variant="link" 
                      fontSize="lg" 
                      color={chosenLink == link.title ? 'blue.500' : mode('black', 'white')} 
                      _focus={{ borderColor: 'blue.500' }} 
                      borderColor="blue.500" 
                      borderBottomWidth={chosenLink == link.title ? 4 : 0} 
                      _hover={{ color: 'blue.500', borderBottomWidth: 4, borderColor: 'blue.500' }} 
                      onClick={() => {
                        onClose()
                        setChosenLink(link.title)
                      }}>
                        {link.title}
                    </Button>
                  </Link>
                ))  
              }
            </VStack>
            <Spacer />
            <HStack pb={4}>
              <IconButton 
                as="a" 
                href="https://www.linkedin.com/in/ronan-ian-d-sui-913100134/"
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
                href="https://github.com/iansui2"
                target="_blank"
                _hover={{ bgColor: mode('gray.900', 'gray.300'), transform: 'scale(1.05)', transition: 'all 300ms ease' }}
                _active={{ bgColor: mode('gray.900', 'gray.300') }}
                _focus={{ borderColor: mode('gray.900', 'gray.300') }}
                bgColor={mode('black', 'white')}
                size="md"
                rounded="full"
                icon={<BsGithub fontSize={16} color={mode('white', 'black')} />} />
            </HStack>
          </VStack>  
        </MobileDrawer>
        <HStack pos="relative" display={{ base: 'none', md: 'flex' }}>
          <Link href="/" passHref>
            <HStack spacing={4} onClick={() => setChosenLink('')}>
              <Image h="50px" src={image} alt="Ian Sui Icon" />
              <Heading size="lg" color="blue.500">Ian Sui</Heading>
            </HStack>
          </Link>     
          <HStack spacing={12} pos="absolute" top={4} left={0} w="full" justify="center">
            {
              links.map((link, linkKey) => (
                <Link key={linkKey} href={link.href} passHref>
                  <Button variant="link" fontSize="lg" color={chosenLink == link.title ? 'blue.500' : mode('black', 'white')} _focus={{ borderColor: 'blue.500' }} borderColor="blue.500" borderBottomWidth={chosenLink == link.title ? 4 : 0} _hover={{ color: 'blue.500', borderBottomWidth: 4, borderColor: 'blue.500' }} onClick={() => setChosenLink(link.title)}>{link.title}</Button>
                </Link>  
              ))  
            }
          </HStack>      
          <Spacer />
          <IconButton
            size="sm"
            rounded="full"
            bg="blue.500"
            _hover={{ bgColor: 'blue.200', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
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