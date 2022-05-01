import { Box, VStack, Heading, Spinner } from "@chakra-ui/react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { About } from "../components/sections/About"
import { Education } from "../components/sections/Education"
import { Experience } from "../components/sections/Experience"
import { Hero } from "../components/sections/Hero"
import { Projects } from "../components/sections/Projects"
import { Skills } from "../components/sections/Skills"

export default function Home() {
  return (
    <Box>
      <Header title="Ian Sui" image="../images/i.png" />
      <Hero image="../images/background.jpg" />
      <Box bgColor="rgba(0,0,0,0.9)">
        <About image="../images/profile.jpg" />
        <Education image="../images/background-2.jpg" />
        <Experience image="../images/background-3.jpg" />
        <Skills image="../images/background-4.jpg" />
        <Projects />
        <Footer />
      </Box>
    </Box>  
  )
}
