import { Box, Heading, Text, VStack, Container, Stack, Image } from "@chakra-ui/react"

const experienceData = [
  {
    title: "Frontend Developer",
    company: "Appdeture",
    description: "I'm currently a frontend developer at Appdeture and Xircus NFT Marketplace with the skills in using ReactJS, Chakra UI and NextJS.",
    timeframe: "January 2022 - Present"
  },
  {
    title: "Software Developer",
    company: "Evotech",
    description: "I was trained as an Intern on Evotech to be a software developer in the field that I want. I chose the filed of mobile development and created a simple application in Kotlin.",
    timeframe: "May 2021 - June 2021"
  },
  {
    title: "C# Developer",
    company: "BC TECH HQ",
    description: "I was trained as an Intern on BC TECH HQ to be familiarized with C# and to develop applications using C#.",
    timeframe: "February 2018"
  }
]

export const Experience = ({ }) => (
  <Box id="experience" pos="relative" h="full" bg="white" py={40}>
    <Container maxW="container.xl"> 
      <Stack direction={{ base: 'column', lg: 'row' }} align="start" spacing={32}>
        <VStack align="start" spacing={8}>
          <Heading size="3xl">Work Experience</Heading>
          <Text fontSize="xl" w={{ base: 'auto', lg: '500px' }}>Hi, I'm currently a Frontend Developer 👨‍💻. I have 6 Months Experience on using ReactJS, Chakra UI, and NextJS. I currently work on Xircus NFT Marketplace and Appdeture.</Text>
          <Image src="../images/design-2.png" alt="Design" />
        </VStack>
        <VStack spacing={16}>
          {
            experienceData.map((data, dataKey) => (
              <VStack key={dataKey} borderLeftWidth={5} pl={4} borderColor="blue.500" align="start" direction={{ base: 'column', md: 'row' }} spacing={2}>
                <Heading size="lg" textAlign="center">{data.title}</Heading>
                <Text fontWeight="bold" fontSize="xl" textAlign="center">{data.company}</Text>
                <Text fontWeight="bold" fontSize="xl" textAlign="center">{data.timeframe}</Text>
                <Text fontSize="lg">{data.description}</Text>
              </VStack>
            )) 
          }
        </VStack>
      </Stack>
    </Container>
  </Box>
)