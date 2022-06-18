import { Box, Container, Heading, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { IoSchool } from "react-icons/io5"
import { FaSchool } from "react-icons/fa"

const educationData = [
  {
    course: "BS Computer Science",
    school: "AMA Computer College Fairview",
    icon: IoSchool,
    description: "Expecting to be a BS Computer Science Graduate this year with a specialization in Web Development."
  },
  {
    course: "Tech Voc-ICT",
    school: "AMA Computer College Fairview",
    icon: FaSchool,
    description: "A High School Graduate with an award of Highest Honor and specialized in ict specifically on programming."
  }
]

export const Education = ({ }) => (
  <Box id="education" py={40} h="full" bg="blue.500">
    <Container maxW="container.xl">
      <VStack align="start" spacing={12}>
        <VStack align="start" spacing={8}>
          <Heading size="3xl" color="white">Education</Heading>
          <Text color="white" fontSize="xl">This is my educational background as a former student on Computer Studies</Text>
        </VStack>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={16}>
          {
            educationData.map((data, dataKey) => (
              <VStack key={dataKey} align="center" color="white" direction={{ base: 'column', md: 'row' }} _hover={{ bg: 'white', color: 'blue.500', transform: 'scale(1.05)' }} p={12} spacing={2}>
                <Icon as={data.icon} boxSize="100px" />
                <Heading size="lg" textAlign="center">{data.course}</Heading>
                <Text fontWeight="bold" fontSize="xl" textAlign="center">{data.school}</Text>
                <Text fontSize="lg" textAlign="center">{data.description}</Text>
              </VStack>
            )) 
          }
        </Stack>
      </VStack>
    </Container>
  </Box>
)