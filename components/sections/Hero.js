import { Box, Heading, Wrap, HStack, Text, Container, VStack, Button, IconButton, Image, Stack, useColorModeValue as mode } from "@chakra-ui/react";
import { AiFillFilePdf } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MotionBox } from "../Motion";

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
}

const techData = [
  "../../images/react.png",
  "../../images/html.png",
  "../../images/css.png",
  "../../images/javascript.png",
  "../../images/sass.png",
  "../../images/mui.png",
  "../../images/api.png",
  "../../images/form.io.png",
  "../../images/php.png",
  "../../images/lumen.png",
  "../../images/nodejs.png",
  "../../images/mysql.png",
]

export const Hero = () => (
  <Box pt={32} pb={40}>
    <Container maxW="container.xl" h="full" justifyContent="center">
      <Stack direction={{ base: 'column', md: 'row' }} align="center" justify="center" h="full" w="full" spacing={{ base: 0, lg: 24 }}>
        <MotionBox
          variants={container}
          initial="hidden"
          animate="visible">
          <VStack align="start" justify="center" h="700px" w={{ base: 'full', md: '300px', lg: '400px', xl: 'full' }} spacing={4}>
            <MotionBox variants={item}>
              <Heading color="blue.500" w={{ base: 'auto', lg: '400px' }} size="2xl">I Have Frontend Web Development Skills and Experience</Heading>
            </MotionBox>  
            <MotionBox variants={item}>
              <Text fontWeight="semibold" fontSize="lg">Hi, I&rsquo;m Ian Sui and I&rsquo;m a Web Developer.</Text>
            </MotionBox>  
            <MotionBox variants={item}>
              <Text fontWeight="semibold" fontSize="lg">Current Tech Stack</Text>
            </MotionBox>  
            <Wrap pb={4}>
              {
                techData.map((tech, techKey) => 
                  <MotionBox key={techKey} variants={item}>
                    <Image src={tech} alt="Tech" boxSize="50px" _hover={{ transform: 'scale(1.1)' }} />
                  </MotionBox>
                )
              }
            </Wrap>
            <MotionBox variants={item}>
              <Stack direction={{ base: 'column', lg: 'row' }} spacing={4} pb={8}>
                <Button 
                  as="a" 
                  href={process.env.REACT_APP_LINKEDIN}
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
                  href={`../${process.env.REACT_APP_PORTFOLIO}`}
                  target="_blank"
                  _hover={{ bgColor: mode('gray.900', 'gray.300'), transform: 'scale(1.05)', transition: 'all 300ms ease' }}
                  _active={{ bgColor: mode('gray.900', 'gray.300') }}
                  _focus={{ borderColor: mode('gray.900', 'gray.300') }}
                  bgColor={mode('black', 'white')} 
                  color={mode('white', 'black')}
                  size="lg"
                  rounded="full"
                  leftIcon={<AiFillFilePdf fontSize={18} color={mode('white', 'black')} />}>
                    My Portfolio
                </Button>
              </Stack>
            </MotionBox>
            <MotionBox variants={item}>  
              <HStack spacing={8}>
                <Text fontWeight="semibold">Check out my projects on</Text>
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
              </HStack>
            </MotionBox>
          </VStack>
        </MotionBox>  
        <MotionBox           
          animate={{
            scale: [1, 1.1, 1.1, 1.1, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "5%"],
          }} 
          pos="relative" bgImg="../images/design.png" bgSize="cover" h="500px" w={{ base: '300px', md: 'full' }}>
          <Image pos="absolute" bottom={4} left={{ base: 2, md: 16 }} right={{ base: 2, md: 16 }} src="../images/image.png" alt="Design" w={{ base: '350px', md: '300px', lg: '400px', xl: '500px' }} />
        </MotionBox>
      </Stack>
    </Container>
  </Box>
)