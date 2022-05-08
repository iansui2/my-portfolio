import { Box, Container, VStack, Heading, Text, HStack, Image, Button, Stack, Center } from "@chakra-ui/react"
import Carousel from 'react-elastic-carousel'
import { FaReact } from 'react-icons/fa'

const projectsData = [
  {
    title: "Earthquake Report",
    description: "An app that lets you view the earthquakes that happened around the world",
    images: [
      {
        image: "../images/earthquake-1.JPG",
        title: "Earthquake Report Home Page"
      },
      {
        image: "../images/earthquake-2.JPG",
        title: "Individual Earthquake Report"
      },
      {
        image: "../images/earthquake-3.JPG",
        title: "Earthquake Report Webpage"
      },
      {
        image: "../images/earthquake-4.JPG",
        title: "Earthquake Trivia Page"
      }
    ],
    image: "../images/earthquake-1.JPG",
    file: "../files/earthquake-report.apk"
  },
  {
    title: "My Notes",
    description: "An app that lets you take some notes",
    images: [
      {
        image: "../images/my-notes-1.JPG",
        title: "My Notes Home Page"
      },
      {
        image: "../images/my-notes-2.JPG",
        title: "Add Note Page"
      },
      {
        image: "../images/my-notes-3.JPG",
        title: "Categories Sidebar"
      },
      {
        image: "../images/my-notes-4.JPG",
        title: "Edit Note Page"
      }
    ],
    image: "../images/my-notes-1.JPG",
    file: "../files/my-notes.apk"
  }
]

export const Projects = ({ }) => (
  <Box id="projects" py={32}>
    <Container maxW="container.xl">
      <VStack align="start" color="white" pb={16}>
        <Heading size="2xl">Projects</Heading>
        <Text fontSize="lg" fontWeight="bold" color="blue.200" pb={12}>This is the list of demo projects that I have made</Text>
        <HStack spacing={4} pb={8}>
          <Image src="../images/android.png" boxSize="50px" alt="Android" />
          <Heading size="xl" color="green.300">Android</Heading>
        </HStack>
        <VStack align={{ base: 'center', md: 'start' }} w="full" spacing={12} pb={16}>
          {
            projectsData.map((data, dataKey) => (
              <Stack key={dataKey} direction={{ base: 'column', lg: 'row' }} w="full" align="center" spacing={12}>
                <Carousel showArrows={false} autoTabIndexVisibleItems={false} itemsToShow={1}>
                  {
                    data.images.map((data, dataKey) => (
                      <Image key={dataKey} h="500px" src={data.image} alt={data.title} />
                    ))
                  }
                </Carousel>
                <VStack align={{ base: 'center', md: 'start' }} w="full">
                  <Heading>{data.title}</Heading>
                  <Text pb={4} textAlign="center">{data.description}</Text>
                  <Button as="a" href={data.file} target="_blank" bgColor="green.400" _hover={{ bgColor: 'green.100' }} _active={{ bgColor: 'green.100' }} _focus={{ borderColor: 'green.400' }}>Download</Button>
                </VStack>
              </Stack>  
            ))
          }
        </VStack>
      </VStack>
      <VStack align="center" spacing={6}>
        <FaReact fontSize={120} color="white" />  
        <Heading color="white">Web Development Projects Coming Soon!</Heading>
      </VStack>
    </Container>
  </Box>
)