import { 
  Box, Container, VStack, Heading, Text, Grid, Stack, Image
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bounce, Flip } from "react-reveal";

const skillsData = [
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
    image: "../images/react.png"
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
  <Box py={40} h="full" bg="blue.500">
    <Container maxW="container.xl" color="white" py={36} id="skills"> 
      <Stack direction={{ base: 'column', lg: 'row' }} align="start" spacing={32}>
        <VStack align="start" spacing={8}>
          <Heading size="3xl">Skills</Heading>
          <Text fontSize="xl" w={{ base: 'auto', lg: '500px' }}>My specialization is Frontend Web Development using ReactJS, Chakra UI, and NextJS</Text>
        </VStack>
        <VStack align="start" spacing={16}>
          <VStack align="start" spacing={8}>
            <Heading size="lg">Operating Systems</Heading>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap={12}>
              {
                skillsData.slice(6,9).map((skill, skillKey) => (
                  <VStack align="center" spacing={2} key={skillKey}>
                    <Image src={skill.image} boxSize="70px" _hover={{ transform: 'scale(1.1)' }} alt={skill.title} />
                    <Text fontSize="xl" fontWeight="bold" color="white">{skill.title}</Text>
                  </VStack>
                ))
              }
            </Grid>
          </VStack>
          <VStack align="start" spacing={8}>
            <Heading size="lg">Web Development</Heading>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }} gap={12}>
              {
                skillsData.slice(0,6).map((skill, skillKey) => (
                  <VStack align="center" spacing={2} key={skillKey}>
                    <Image src={skill.image} boxSize="70px" _hover={{ transform: 'scale(1.1)' }} alt={skill.title} />
                    <Text fontSize="xl" fontWeight="bold" color="white">{skill.title}</Text>
                  </VStack>
                ))
              }
            </Grid>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  </Box>
)