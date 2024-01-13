import { Box, Container, VStack, Heading, Text, Image, Button, UnorderedList, ListItem, useBreakpointValue } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse"

const projectsData = [
  // {
  //   title: "foodery",
  //   description: "An app that lets you add, modify and remove food products using the GraphQL endpoint",
  //   listItems: [
  //     "You can add food products",
  //     "You can modify and remove food products"
  //   ],
  //   image: "../images/foodery.png",
  //   smallImage: "../images/foodery-iphone.png",
  //   href: process.env.REACT_APP_FOODERY
  // },
  {
    title: "Listy Cars",
    description: "An app that lets you list cars, update and delete them.",
    listItems: [
      "You can list cars",
      "You can updated the listed cars",
      "You can delete the listed cars"
    ],
    image: "../images/listy-cars.png",
    smallImage: "../images/listy-cars-pixel.png",
    category: "Websites 🌐",
    href: process.env.REACT_APP_LISTYCARS
  },
  {
    title: "Mapsify",
    description: "An app that lets you explore the globe through the use of Google Maps Api",
    listItems: [
      "You can find many places using google maps",
      "You can use all of the functionalities of google maps"
    ],
    image: "../images/mapsify.png",
    smallImage: "../images/mapsify-pixel.png",
    href: process.env.REACT_APP_MAPSIFY
  },
  {
    title: "Earthquake Report",
    description: "An app that lets you view the earthquakes that happened around the world",
    listItems: [
      "Lists the earthquakes happend around the world for the past 24 hours",
      "Provides details about the earthquake that has happened",
      "Shows trivia about earthquakes"
    ],
    category: "Android Apps 📱",
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
        <VStack align={{ base: 'center', md: 'start' }} spacing={20} pb={16}>
            {
              projectsData.map((data, dataKey) => {
                const imageData = useBreakpointValue({ base: data.smallImage ? data.smallImage : data.image, md: data.image })

                return (
                  <Pulse key={dataKey} duration={1000}>
                    <Box>
                      <VStack direction={{ base: 'column', md: 'row' }} align="center" w={{ base: 'auto', md: 'container.md', lg: 'container.lg' }} spacing={12}>
                        { data.category && <Heading size="xl" color="yellow.500" align="center">{data.category}</Heading> }
                        <Image src={imageData} h="500px" alt={data.title} _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease' }} />
                        <VStack align="center">
                          <Heading>{data.title}</Heading>
                          <Text pb={4} fontSize="lg">{data.description}</Text>
                          <UnorderedList pl={6} pb={3}>
                            {
                              data.listItems.map((desc, descKey) => <ListItem key={descKey} fontSize="lg">{desc}</ListItem>)
                            }
                          </UnorderedList>
                          <Button as="a" href={data.file ? data.file : data.href} target="_blank" rounded="full" minW="130px" bgColor="green.400" _hover={{ bgColor: 'green.100', transform: 'scale(1.05)', transition: 'all 300ms ease' }} _active={{ bgColor: 'green.100' }} _focus={{ borderColor: 'green.400' }}>{data.file ? 'Download' : 'View Demo'}</Button>
                        </VStack>
                      </VStack>  
                    </Box>  
                  </Pulse>
                )
              })
            }
        </VStack>
      </VStack>
    </Container>
  </Box>
)