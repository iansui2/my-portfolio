import { Box, Container, VStack, Heading, Text, HStack, Image, Button, Stack, Center } from "@chakra-ui/react";
import { Roll } from "react-reveal";

const projectsData = [
  {
    title: "Earthquake Report",
    description: "An app that lets you view the earthquakes that happened around the world",
    image: "../images/earthquake.png",
    file: "../files/earthquake-report.apk"
  },
  {
    title: "My Notes",
    description: "An app that lets you take some notes",
    image: "../images/my-notes.png",
    file: "../files/my-notes.apk"
  }
]

export const Projects = ({ }) => (
  <Box id="projects" py={32}>
    <Container maxW="container.xl">
      <VStack align="start" color="white">
        <Heading size="2xl">Projects</Heading>
        <Text fontSize="lg" fontWeight="bold" color="blue.200" pb={12}>This is the list of demo projects that I have made</Text>
        <HStack spacing={4} pb={6}>
          <Image src="../images/android.png" boxSize="50px" alt="Android" />
          <Heading size="xl" color="green.300">Android</Heading>
        </HStack>
        <VStack align="start" spacing={8} pb={16}>
          <Roll duration={2000}>
            {
              projectsData.map((data, dataKey) => (
                <Stack key={dataKey} direction={{ base: 'column', md: 'row' }} align="center" spacing={8}>
                  <Image src={data.image} h="500px" alt={data.title} />
                  <VStack align="start">
                    <Heading>{data.title}</Heading>
                    <Text pb={4}>{data.description}</Text>
                    <Button as="a" href={data.file} target="_blank" bgColor="green.400" _hover={{ bgColor: 'green.100' }} _active={{ bgColor: 'green.100' }} _focus={{ borderColor: 'green.400' }}>Download</Button>
                  </VStack>
                </Stack>  
              ))
            }
          </Roll>
        </VStack> 
      </VStack>
    </Container>
  </Box>
)