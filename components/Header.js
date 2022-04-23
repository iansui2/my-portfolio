import { 
  Box, Button, Container, Heading, HStack, IconButton, 
  Spacer, useDisclosure, VStack, Image
} from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { MobileDrawer } from "./Drawer"
import Link from "next/link"

const links = [
  {
    title: 'Education',
    href: '#education'
  },
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
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <HStack justify="space-between" spacing={2} py={6} color="white">
            <Link href="/" passHref>
              <Image h="50px" src={image} alt="Ian Sui Icon" />
            </Link>  
            <IconButton
              variant="outline"
              borderRadius="xs"
              size="sm"
              borderColor="blue.500"
              borderWidth={1}
              _focus={{ borderColor: 'blue.500' }}
              icon={<AiOutlineClose fontSize={16} />}
              onClick={onClose} />
          </HStack>
          <VStack align="start" spacing={4} color="white">
            {
              links.map((link, linkKey) => (
                <Link key={linkKey} href={link.href} passHref>
                  <Button _focus={{ borderColor: 'white' }} variant="ghost" fontSize="md" _hover={{ color: 'blue.500'}}>{link.title}</Button>
                </Link>  
              ))  
            }
          </VStack>
        </MobileDrawer>
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Link href="/" passHref>
            <Image h="50px" src={image} alt="Ian Sui Icon" />
          </Link>
          <Spacer />
          {
            links.map((link, linkKey) => (
              <Link key={linkKey} href={link.href} passHref>
                <Button _focus={{ borderColor: 'white' }} variant="ghost" fontSize="md" _hover={{ color: 'blue.500'}}>{link.title}</Button>
              </Link>  
            ))  
          }
        </HStack>
      </Container>
    </Box>
  )
}