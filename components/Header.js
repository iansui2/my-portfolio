import { useState } from 'react'
import { 
  Box, Button, Container, Heading, HStack, IconButton, 
  Spacer, useDisclosure, VStack, Image
} from "@chakra-ui/react"
import { MobileDrawer } from "./Drawer"
import Link from "next/link"
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoSchool, IoPersonCircle, IoSettings } from 'react-icons/io5'
import { MdOutlineWork } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose, AiFillProject } from 'react-icons/ai'

const links = [
  {
    title: 'About',
    href: '#about',
    icon: <IoPersonCircle size={24} />
  },
  {
    title: 'Education',
    href: '#education',
    icon: <IoSchool size={24} />
  },
  {
    title: 'Experience',
    href: '#experience',
    icon: <MdOutlineWork size={24} />  
  },
  {
    title: 'Skills',
    href: '#skills',
    icon: <IoSettings size={24} />  
  },
  {
    title: 'Projects',
    href: '#projects',
    icon: <AiFillProject size={24} />    
  }
]

export const Header = ({ title, image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenLink, setChosenLink] = useState('')

  console.log(chosenLink)

  return (
    <Box pt={6} w="full" pos="fixed" zIndex={1000}>
      <Container maxW="container.xl" color="white">
        <HStack justify="space-between" display={{ base: 'flex', md: 'none' }}>
          <Link href="/" passHref>
            <Image h="50px" src={image} alt="Ian Sui Icon" />
          </Link>          
          <IconButton 
            variant="ghost"
            borderRadius="xs"
            size="md"
            _focus={{ borderColor: 'primary.500' }}
            icon={<GiHamburgerMenu fontSize={24} />}
            onClick={onOpen}
          />
        </HStack>
        <MobileDrawer isOpen={isOpen} onClose={onClose}>
          <VStack h="full" w="full" align="start">
            <HStack w="full" justify="space-between" spacing={2} py={6} color="white">
              <Link href="/" passHref>
                <Image h="50px" src={image} alt="Ian Sui Icon" />
              </Link>  
              <IconButton
                variant="outline"
                borderRadius="xs"
                size="sm"
                borderColor="blue.500"
                borderWidth={1}
                _focus={{ borderColor: 'blue.500', bgColor: 'black' }}
                icon={<AiOutlineClose fontSize={16} />}
                onClick={onClose} />
            </HStack>
            <VStack align="start" w="full" spacing={4} color="white">
              {
                links.map((link, linkKey) => (
                  <HStack w="full" justify="space-between">
                    <Link key={linkKey} href={link.href} passHref>
                      <Button _focus={{ borderColor: 'white' }} variant="ghost" fontSize="lg" _hover={{ color: 'blue.500'}} _active={{ color: 'blue.500' }} color={chosenLink == link.title ? 'blue.500' : 'white'} 
                      onClick={() => {
                        onClose()
                        setChosenLink(link.title)
                      }}>{link.title}</Button>
                    </Link>
                    <Link key={linkKey} href={link.href} passHref>
                      <IconButton variant="unstyled" color={chosenLink == link.title ? 'blue.500' : 'white'} icon={link.icon} 
                        onClick={() => {
                          onClose()
                          setChosenLink(link.title)
                        }} />
                    </Link>
                  </HStack>  
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
            <Image h="50px" src={image} alt="Ian Sui Icon" />
          </Link>
          <Spacer />
          {
            links.map((link, linkKey) => (
              <Link key={linkKey} href={link.href} passHref>
                <Button _focus={{ borderColor: 'white' }} variant="link" fontSize="lg" _hover={{ color: 'blue.500'}} color={chosenLink == link.title ? 'blue.500' : 'white'} onClick={() => setChosenLink(link.title)}>{link.title}</Button>
              </Link>  
            ))  
          }
        </HStack>
      </Container>
    </Box>
  )
}