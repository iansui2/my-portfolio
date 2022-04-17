import { Box, Heading, Text, VStack, Container, HStack, Image, IconButton, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react"
import { MdOutlineWork } from "react-icons/md"
import { Zoom } from "react-reveal";

const experienceData = [
  {
    level: "Full Time",
    title: "Frontend Developer",
    logo: "../images/xircus.webp",
    company: "Appdeture",
    link: "https://xircus.app/",
    description: "I'm currently a frontend developed at Xircus NFT Marketplace with the skills in using ReactJS, Chakra UI and NextJS.",
    timeframe: "January 2022 - Present"
  },
  {
    level: "Internship",
    title: "Software Developer",
    logo: "../images/evotech.webp",
    company: "Evotech",
    link: "https://evolvesoftware.com.ph/",
    description: "I was trained as an Intern on Evotech to be a software developer in the field that I want. I chose the filed of mobile development and created a simple application in Kotlin.",
    timeframe: "May 2021 - June 2021"
  },
  {
    level: "Internship",
    title: "C# Developer",
    company: "BC TECH HQ",
    description: "I was trained as an Intern on BC TECH HQ to be familiarized with C# and to develop applications using C#.",
    timeframe: "February 2018"
  }
]

export const Experience = ({ image }) => {
  const [sliderValue, setSliderValue] = useState(100)

  return (
    <Box id="experience" h="full" bgImg={image} bgSize="cover">
      <Box h="full" bgColor="rgba(0,0,0,0.7)">
        <Container pt={32} pb={48} maxW="container.xl" color="white"> 
          <VStack align="start">
            <Heading size="2xl">Work Experience</Heading>
            <Text fontSize="lg" fontWeight="bold" color="blue.200" pb={12}>This is the list of all of my work experience</Text>
          </VStack>
          <VStack align="start" spacing={28}>
            <Zoom duration={2000}>
              {
                experienceData.map((data, dataKey) => (
                  <HStack key={dataKey} align="center">
                    <VStack spacing={4} align="start" fontSize="xl">
                      <HStack spacing={4}>
                        <IconButton 
                          variant="unstyled"
                          _focus={{ borderColor: 'white' }}
                          icon={<MdOutlineWork fontSize={48} />}
                          onClick={() => {
                            if (dataKey === 0) {
                              setSliderValue(100)
                            } else if (dataKey === 1) {
                              setSliderValue(65)
                            } else {
                              setSliderValue(27)
                            }
                          }}/>
                        <Heading size="lg">{data.title}</Heading>
                      </HStack>
                      <Heading fontWeight="bold" size="md" pb={3}>{data.company}</Heading>
                      <Text>{data.level}</Text>
                      <Text>{data.description}</Text>
                      <Text>{data.timeframe}</Text>
                    </VStack>
                    <Spacer />
                    { data.logo && 
                      <Box as="a" href={data.link} target="_blank" _hover={{ transform: 'scale(1.1)' }}>
                        <Image src={data.logo} />
                      </Box> 
                    }
                  </HStack>
                ))
              }
            </Zoom>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}