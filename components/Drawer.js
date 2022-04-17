import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, useColorModeValue as mode } from "@chakra-ui/react"

export const MobileDrawer = ({ children, header, footer, isLoading, onClose, ...rest }) => (
  <Drawer placement="right" size="md" onClose={onClose} {...rest}>
    <DrawerOverlay />
    <DrawerContent ml={4} backdropFilter="blur(20px)" bg="rgba(0, 0, 0, 0.4)">
      <DrawerBody>{children}</DrawerBody>
    </DrawerContent>
  </Drawer>
)