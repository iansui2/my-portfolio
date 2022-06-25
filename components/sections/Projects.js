import { Box, Container, VStack, Heading, Text, HStack, Image, Button, Stack, Center, UnorderedList, ListItem } from "@chakra-ui/react";
import { Slide } from "react-reveal";

const projectsData = [
  {
    title: "Earthquake Report",
    description: "An app that lets you view the earthquakes that happened around the world",
    listItems: [
      "Lists the earthquakes happend around the world for the past 24 hours",
      "Provides details about the earthquake that has happened",
      "Shows trivia about earthquakes"
    ],
    image: "../images/earthquake-report.png",
    file: "../files/earthquake-report.apk"
  },
  {
    title: "My Notes",
    description: "An app that lets you take some notes",
    listItems: [
      "Takes notes and shows the list of notes",
      "You can edit and delete notes",
      "You can add a category for a note"
    ],
    image: "../images/my-notes.png",
    file: "../files/my-notes.apk"
  }
]

export const Projects = ({ }) => (
  <Box id="projects" bg="blue.500" color="white" py={40}>
    <Container maxW="container.lg" centerContent>
      <VStack align="center">
        <Heading size="2xl" mb={12}>Projects</Heading>
        <VStack align={{ base: 'center', md: 'start' }} spacing={12} pb={16}>
          <Slide left duration={1000}>
            {
              projectsData.map((data, dataKey) => (
                <Stack key={dataKey} direction={{ base: 'column', md: 'row' }} align="center" spacing={12}>
                  <Image src={data.image} h="500px" alt={data.title} />
                  <VStack align={{ base: 'center', md: 'start' }}>
                    <Heading>{data.title}</Heading>
                    <Text pb={4} textAlign="center" fontSize="lg">{data.description}</Text>
                    <UnorderedList pl={6} pb={3}>
                      {
                        data.listItems.map((desc, descKey) => <ListItem key={descKey} fontSize="lg">{desc}</ListItem>)
                      }
                    </UnorderedList>
                    <Button as="a" href={data.file} target="_blank" rounded="full" minW="130px" bgColor="green.400" _hover={{ bgColor: 'green.100' }} _active={{ bgColor: 'green.100' }} _focus={{ borderColor: 'green.400' }}>Download</Button>
                  </VStack>
                </Stack>  
              ))
            }
          </Slide>
        </VStack>
      </VStack>
    </Container>
  </Box>
)