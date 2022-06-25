import { Box, Heading, Text, VStack, Container, Stack, Image, HStack, List, ListItem, UnorderedList } from "@chakra-ui/react"
import { Slide } from "react-reveal"

const experienceData = [
  {
    logo: "../../images/logo-1.png",
    title: "Frontend Developer",
    company: "Appdeture",
    description: [
      "Developed skins or webpages based or cloned from popular websites such as Twitter, Youtube and Instagram",
      "Have used different libraries available in React for frontend development such as React Slick Slider",
      "Have used GraphQL for getting the data and displaying it on the webpage"
    ],
    technologies: [
      "../../images/react.png",
      "../../images/next.png",
      "../../images/chakra.png"
    ],
    timeframe: "January 2022 - Present"
  },
  {
    logo: "../../images/logo-2.jpeg",
    title: "Software Developer",
    company: "Evotech",
    description: [
      "Planned about making a simple application that will help many people in my chosen programming language",
      "Developed a simple application on Kotlin showing my basic skills on Kotlin for Android Devices",
    ],   
    technologies: [
      "../../images/kotlin.png"
    ],
    timeframe: "May 2021 - June 2021"
  },
  {
    title: "C# Developer",
    company: "BC TECH HQ",
    description: [
      "Learned about C# programming language, it's rules and syntax",
      "Developed basic C# programs",
    ],      
    technologies: [
      "../../images/csharp.png"
    ],  
    timeframe: "February 2018"
  }
]

export const Experience = ({ }) => (
  <Box id="experience" pos="relative" h="full" bg="blue.500" color="white" py={40}>
    <Container maxW="container.xl"> 
      <VStack align="start" spacing={20}>
        <Heading size="2xl">Work Experience</Heading>
        {
          experienceData.map((data, dataKey) => (
            <Slide left duration={1000}>
              <Stack direction={{ base: 'column', md: 'row' }} key={dataKey} align={{ base: 'start', md: 'center' }} spacing={12}>
                { data.logo ? <Image src={data.logo} alt="Company Logo" boxSize="150px" _hover={{ transform: 'scale(1.1)' }} /> : <Box boxSize={{ base: '0px', md: '150px' }} />}
                <VStack borderLeftWidth={5} borderColor="blue.500" align="start" direction={{ base: 'column', md: 'row' }} spacing={2}>
                  <Heading size="lg" textAlign="center">{data.title}</Heading>
                  <Text fontWeight="bold" fontSize="xl" textAlign="center">{data.company}</Text>
                  <Text fontWeight="bold" fontSize="xl" textAlign="center" mb={3}>{data.timeframe}</Text>
                  <UnorderedList pl={6} pb={3}>
                    {
                      data.description.map((desc, descKey) => <ListItem key={descKey} fontSize="lg">{desc}</ListItem>)
                    }
                  </UnorderedList>
                  <Text fontSize="lg" fontWeight="semibold">Tech Stack</Text>
                  <HStack spacing={2}>
                  {
                    data.technologies.map((tech, techKey) => <Image key={techKey} src={tech} boxSize="50px" _hover={{ transform: 'scale(1.1)' }} />)
                  }
                  </HStack>
                </VStack>
              </Stack>
            </Slide>
          )) 
        }
      </VStack>
    </Container>
  </Box>
)