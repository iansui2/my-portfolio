import { Avatar, Box, Container, Grid, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi";
import { IoCodeSlash } from 'react-icons/io5'
import { MdOutlineWork } from 'react-icons/md'
import { Slide } from "react-reveal";

const aboutData = [
  {
    icon: <GiGraduateCap fontSize={64} />,
    title: "Career Choice",
    description: "I took BS Computer Science at AMA Computer College Fairview on 2018. This is where I learned how to code and develop simple applications in different programming languages. I did enjoyed and fell in love in programming. This is the career that I chose and that I will continue to choose and do."
  },
  {
    icon: <IoCodeSlash fontSize={64} />,
    title: "Programming",
    description: "I have started to code on 2016. Since then, I have not stopped in coding and I continue to develop applications for the web and on mobile devices as well. Currently, I'm a frontend developer and my main job is to develop beautiful web pages with fast and easy interaction with the backend part of the website."
  },
  {
    icon: <MdOutlineWork fontSize={64} />,
    title: "Work Path",
    description: "When I was just an intern, the kind of work that I'm doing is programming. This is really the work that I want to do. It followed when I first landed a job at Xircus NFT Marketplace. Currently, I'm a frontend developer and my journey as a programmer continues."
  },
]

export const About = ({ image }) => (
  <Box pt={32}>
    <Container maxW="container.xl">
      <VStack spacing={12} color="white">
        <Heading size="2xl">About Me</Heading>
        <Avatar src={image} boxShadow="base" boxSize="200px" />
        <Slide right duration={2000}>
          <VStack spacing={1} bgColor="blue.500" p={6} borderRadius="lg" fontSize="lg">
            <Text>{`I'm Ian Sui and I'm a graduating student on the degree of BS Computer Science.`}</Text>
            <Text>{`I'm currently working as a Frontend Developer at Xircus NFT Marketplace.`}</Text>
          </VStack>
          <Grid templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6}>
            {
              aboutData.map((data, dataKey) => (
                <VStack key={dataKey} spacing={4} bgColor="blue.500" p={6} borderRadius="lg" fontSize="lg">
                  {data.icon}
                  <Heading>{data.title}</Heading>
                  <Text textAlign="start">{data.description}</Text>
                </VStack>
              ))
            }
          </Grid>
        </Slide>
      </VStack>
    </Container>
  </Box>
)