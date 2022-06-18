import { Box } from "@chakra-ui/react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Education } from "../components/sections/Education"
import { Experience } from "../components/sections/Experience"
import { Hero } from "../components/sections/Hero"
import { Skills } from "../components/sections/Skills"

export default function Home() {
  return (
    <Box bg="white">
      <Header title="Ian Sui" image="../images/i.png" />
      <Hero />
      <Education />
      <Experience />
      <Skills image="../images/background-4.jpg" />
      <Footer />
    </Box>  
  )
}
