import { Box, Container, Heading, HStack, IconButton, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi"
import { FcSettings } from "react-icons/fc"
import { FaMedal } from "react-icons/fa"
import { CustomTag } from "../CustomTag"
import { useState } from "react";
import { Fade } from "react-reveal";

const educationData = [
  {
    level: "Tertiary",
    course: "BS Computer Science",
    specialization: "Web Development",
    school: "AMA Computer College Fairview",
    award: "Dean's Lister",
    timeframe: "2018-2022"
  },
  {
    level: "Secondary",
    course: "Tech Voc-ICT",
    school: "AMA Computer College Fairview",
    award: "Highest Honor",
    timeframe: "2016-2018"
  }
]

export const Education = ({ image }) => {
  const [sliderValue, setSliderValue] = useState(100)
  return (
    <Box id="education" mt={48} h="full" bgImg={image} bgSize="cover">
      <Box h="full" bgColor="rgba(0,0,0,0.7)">
        <Container pt={32} pb={64} maxW="container.xl"> 
          <VStack align="center" color="white">
            <Heading size="2xl">Education</Heading>
            <Text fontSize="lg" fontWeight="bold" color="blue.200" pb={12}>This is the list of all of my educational attaintment</Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={24}>
              <Fade duration={2000}>
                {
                  educationData.map((data, dataKey) => (
                    <VStack key={dataKey} spacing={4} align="start" fontSize="xl">
                      <HStack spacing={4}>
                        <IconButton 
                          variant="unstyled"
                          _focus={{ borderColor: 'white' }}
                          icon={<GiGraduateCap fontSize={48} />}
                          onClick={() => dataKey === 0 ? setSliderValue(100) : setSliderValue(40)}/>
                        <Heading size="lg">{data.level}</Heading>
                      </HStack>
                      <Heading size="lg" pb={3}>{data.course}</Heading>
                      {
                        data.specialization &&
                          <VStack align="start">
                            <CustomTag label="Specialization" icon={FcSettings} />
                            <Text fontWeight="bold">{data.specialization}</Text>
                          </VStack>
                      }
                      <Text>{data.school}</Text>
                      <CustomTag label="Award" icon={FaMedal} />
                      <Text fontWeight="bold">{data.award}</Text>
                      <Text>{data.timeframe}</Text>
                    </VStack>
                  ))
                }
              </Fade>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}