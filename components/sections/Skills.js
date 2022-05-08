import { 
  Box, Container, VStack, Heading, Text, Tabs, TabList, 
  Tab, TabPanels, TabPanel, useBreakpointValue, Stack, Image, HStack
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bounce, Flip } from "react-reveal";

const tabItems = [
  "Programming",
  "Other Skills"
]

const programmingData = [
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
    title: "ReactJS",
    image: "../images/react.png",
    link: "https://reactjs.org/"
  },
  {
    title: "NextJS",
    image: "../images/next.png",
    link: "https://nextjs.org/"
  },
  {
    title: "Chakra UI",
    image: "../images/chakra.png",
    link: "https://chakra-ui.com/"
  },
  {
    title: "Java",
    image: "../images/java.png",
  },
  {
    title: "Kotlin",
    image: "../images/kotlin.png",
    link: "https://kotlinlang.org/"
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

export const Skills = ({ image }) => {
  const orientation = useBreakpointValue({ base: 'horizontal', md: 'vertical' })
  const [orient, setOrient] = useState('vertical')

  useEffect(() => {
    setOrient(orientation)
  }, [orientation])

  return (  
    <Box id="skills" minH="1000px" bgImg={image} bgSize="cover">
      <Box h="1000px" bgColor="rgba(0,0,0,0.7)">
        <Container maxW="container.xl" color="white" py={36}> 
          <VStack align="center">
            <Heading size="2xl">Skills</Heading>
            <Text fontSize="lg" fontWeight="bold" color="blue.200" pb={12}>This is the list of all of my technical skills in my chosen field</Text>
            <Tabs 
              variant="unstyled"
              orientation={orient}>
              <TabList minW="200px" overflow="auto" mr={12} mb={12}>
                {
                  tabItems.map((tabItem, tabKey) => (
                    <Tab
                      key={tabKey}
                      fontSize="lg"
                      fontWeight="bold"
                      clipPath={{ base: '', md: 'polygon(5% 0%, 100% 0%, 100% 80%, 95% 100%, 5% 100%, 0% 50%)' }}
                      justifyContent="center"
                      _selected={{ bgGradient: 'linear(to-r, #3182CE, #00B5D8)', }}
                      _focus={{ borderColor: 'blue.500' }}>
                      {tabItem}
                    </Tab>
                  ))
                }
              </TabList>
              <TabPanels>
                <TabPanel px={{ base: 0, lg: 24 }} py={0}>
                  <Bounce duration={2000}>
                    <VStack spacing={2} align="start">
                      <Text fontSize="xl" fontWeight="bold" color="blue.300">Web Development</Text>
                      <Text fontSize="lg" color="white" pb={4}>Basic Fundamentals</Text>
                      <HStack spacing={12} pb={4}>
                        {
                          programmingData.slice(0, 3).map((data, dataKey) =>(
                            <VStack align="center" spacing={2} key={dataKey}>
                              <Image src={data.image} boxSize="50px" _hover={{ transform: 'scale(1.1)' }} alt={data.title} />
                              <Text color="white">{data.title}</Text>
                            </VStack>
                          ))
                        }
                      </HStack>
                      <Text fontSize="lg" color="white" pb={4}>Frameworks</Text>
                      <HStack spacing={12} pb={4}>
                        {
                          programmingData.slice(3, 6).map((data, dataKey) =>(
                            <VStack align="center" spacing={2} key={dataKey}>
                              <Box as="a" target="_blank" href={data.link}>
                                <Image src={data.image} boxSize="50px" _hover={{ transform: 'scale(1.1)' }} alt={data.title} />
                              </Box>
                              <Text color="white">{data.title}</Text>
                            </VStack>
                          ))
                        }
                      </HStack>
                      <Text fontSize="xl" fontWeight="bold" color="blue.300">Mobile Development</Text>
                      <Text fontSize="lg" color="white" pb={4}>Android</Text>
                      <HStack spacing={12} pb={4}>
                        {
                          programmingData.slice(6, 8).map((data, dataKey) =>(
                            <VStack align="center" spacing={2} key={dataKey}>
                              {
                                data.link ?
                                  <Box as="a" target="_blank" href={data.link}>
                                    <Image src={data.image} boxSize="50px" _hover={{ transform: 'scale(1.1)' }} alt={data.title} />
                                  </Box> :
                                  <Image src={data.image} boxSize="50px" _hover={{ transform: 'scale(1.1)' }} alt={data.title} />
                              }
                              <Text color="white">{data.title}</Text>
                            </VStack>
                          ))
                        }
                      </HStack>
                    </VStack>
                  </Bounce>
                </TabPanel>
                <TabPanel px={{base: 0, lg: 24 }} py={0}>
                  <Bounce duration={2000}>
                    <VStack spacing={2} align="start">
                      <Text fontSize="xl" fontWeight="bold" color="blue.300">Operating Systems</Text>
                      <Text fontSize="lg" color="white" pb={6}>Basic Knowledge</Text>
                    </VStack>
                    <HStack spacing={12}>
                      {
                        programmingData.slice(8, 11).map((data, dataKey) =>(
                          <VStack align="center" spacing={2} key={dataKey}>
                            <Image src={data.image} boxSize="50px" _hover={{ transform: 'scale(1.1)' }} alt={data.title} />
                            <Text color="white">{data.title}</Text>
                          </VStack>
                        ))
                      }
                    </HStack>   
                  </Bounce>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}