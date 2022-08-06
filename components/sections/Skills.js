import { 
  Box, Container, VStack, Heading, Text, Grid, Image, useColorModeValue as mode
} from "@chakra-ui/react"
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

const skillsData = [
  {
    title: "ReactJS",
    image: "../images/react.png"
  },
  {
    title: "HTML",
    image: "../images/html.png"
  },
  {
    title: "CSS",
    image: "../images/css.png"
  },
  {
    title: "Javascript",
    image: "../images/javascript.png"
  },
  {
    title: "Material UI",
    image: "../images/mui.png",
  },
  {
    title: "Sass",
    image: "../images/sass.png"
  },
  {
    title: "NextJS",
    image: "../images/next.png",
  },
  {
    title: "Chakra UI",
    image: "../images/chakra.png"
  },
  {
    title: "Node",
    image: "../images/node.png"
  },
  {
    title: "MySQL",
    image: "../images/mysql.png"
  },
  {
    title: "MongoDB",
    image: "../images/mongo.png"
  },
  {
    title: "GraphQL",
    image: "../images/graphql.png"
  },
  {
    title: "Java",
    image: "../images/java.png"
  },
  {
    title: "Kotlin",
    image: "../images/kotlin.png"
  },
  {
    title: "Windows",
    image: "../images/windows.png"
  },
  {
    title: "Mac OS",
    image: "../images/mac.png",
  },
  {
    title: "Android",
    image: "../images/android.png"
  },
]

export const Skills = ({ }) => (
  <Box py={40} h="full" bg={mode('white', 'black')}>
    <Container maxW="container.xl" py={4} id="skills"> 
      <MotionBox
        variants={container}
        initial="hidden"
        animate="visible">
        <VStack align="center" spacing={8}>
          <Heading size="2xl">Skills</Heading>
          <Heading size="lg">Featured Skills</Heading>
          <Grid templateColumns={{ base: 'auto', md: 'repeat(3, 1fr)' }} gap={12} pb={10}>
            {
              skillsData.slice(0,6).map((skill, skillKey) => (
                <MotionBox key={skillKey} variants={item}> 
                  <VStack boxShadow="xl" borderRadius="xl" bg="blue.500" color="white" p={8} align="center" spacing={2} _hover={{ transform: 'scale(1.1)' }}>
                    <Image src={skill.image} boxSize="70px" alt={skill.title} />
                    <Text fontSize="xl" fontWeight="bold">{skill.title}</Text>
                  </VStack>
                </MotionBox>  
              ))
            }
          </Grid>
          <Heading size="lg">Other Skills</Heading>
          <Grid templateColumns={{ base: 'auto', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap={12} pb={10}>
            {
              skillsData.slice(6,14).map((skill, skillKey) => (
                <MotionBox key={skillKey} variants={item}> 
                  <VStack boxShadow="xl" borderRadius="xl" bg="blue.500" color="white" p={8} align="center" spacing={2} _hover={{ transform: 'scale(1.1)' }}>
                    <Image src={skill.image} boxSize="70px"  alt={skill.title} />
                    <Text fontSize="xl" fontWeight="bold">{skill.title}</Text>
                  </VStack>
                </MotionBox>  
              ))
            }
          </Grid>
          <Heading size="lg">Operating Systems</Heading>
          <Grid templateColumns={{ base: 'auto', md: 'repeat(3, 1fr)' }} gap={12}>
            {
              skillsData.slice(14,17).map((skill, skillKey) => (
                <MotionBox key={skillKey} variants={item}> 
                  <VStack boxShadow="xl" borderRadius="xl" bg="blue.500" color="white" p={8} align="center" spacing={2} _hover={{ transform: 'scale(1.1)' }}>
                    <Image src={skill.image} boxSize="70px"  alt={skill.title} />
                    <Text fontSize="xl" fontWeight="bold">{skill.title}</Text>
                  </VStack>
                </MotionBox>  
              ))
            }
          </Grid>
        </VStack>
      </MotionBox>  
    </Container>
  </Box>
)