import { Box, useColorModeValue as mode } from "@chakra-ui/react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Experience } from "../components/sections/Experience"
import { Hero } from "../components/sections/Hero"
import { Projects } from "../components/sections/Projects"
import { Skills } from "../components/sections/Skills"

export default function Home() {
  return (
    <Box bg={mode('white', 'black')}>
      <Header title="Ian Sui" image="../images/i.png" />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </Box>  
  )
}
