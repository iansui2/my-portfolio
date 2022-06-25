import { 
  Box, Button, Container, Heading, Input, Textarea, VStack,   
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay, 
  useDisclosure
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MotionBox } from "../Motion";

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
}

const itemState = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

export const Contact = ({ }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [values, setValues] = useState(itemState)

  const addUser = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values
      }),
    }
    fetch("https://express-api-zeta.vercel.app/api/insertUser", requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
  }

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value })
  }

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <Box id="contact" py={24}>
      <Container maxW="container.lg">
        <Heading size="2xl" mb={12}>Contact Me</Heading>
        <MotionBox
          variants={container}
          initial="hidden"
          animate="visible">
          <VStack align="start" spacing={4} pb={8}>
            <MotionBox w="full" variants={item}> 
              <Input name="name" value={values.name} onChange={handleChange} placeholder="Name" borderRadius="lg" />
            </MotionBox>
            <MotionBox w="full" variants={item}>   
              <Input name="email" value={values.email} onChange={handleChange} placeholder="Email" borderRadius="lg" />
            </MotionBox>
            <MotionBox w="full" variants={item}>   
              <Input name="subject" value={values.subject} onChange={handleChange} placeholder="Subject" borderRadius="lg" />
            </MotionBox>
            <MotionBox w="full" variants={item}>   
              <Textarea name="message" value={values.message} onChange={handleChange} minH="150px" placeholder="Message" borderRadius="lg" />
            </MotionBox>  
          </VStack>
          <MotionBox variants={item}> 
            <Button  
              _hover={{ bgColor: 'blue.200', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
              _active={{ bgColor: 'blue.200' }}
              _focus={{ borderColor: 'blue.500' }} 
              color="white"
              bgColor="blue.500" 
              size="lg"
              rounded="full"
              onClick={() => {
                addUser()
                onOpen()
              }}>
                Submit
            </Button>
          </MotionBox>  
        </MotionBox>  
        <AlertDialog
          isOpen={isOpen}
          onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader>
                Thank you for sending an email!
              </AlertDialogHeader>
              <AlertDialogBody>
                Email is succesfully sent!
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button
                 _hover={{ bgColor: 'blue.200', transform: 'scale(1.05)', transition: 'all 300ms ease' }}
                 _active={{ bgColor: 'blue.200' }}
                 _focus={{ borderColor: 'blue.500' }} 
                 color="white"
                 bgColor="blue.500" 
                 size="lg"
                 rounded="full" 
                 onClick={() => {
                   onClose()
                   setValues(itemState)
                 }}>
                  Okay
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Container>  
    </Box>
  )
}