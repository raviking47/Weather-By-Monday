import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SidebarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button fontFamily={"Patrick Hand SC"} colorScheme="blue" onClick={onOpen}>
        Menu  
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bg="#c1c2fa"
            color={"black"}
         
            fontFamily={"Patrick Hand SC"}
          
          >
            Weather By @Monday

          </DrawerHeader>

          <DrawerBody 
           
          fontFamily={"Patrick Hand SC"}
            bg="#c1c2fa"
            color={"black"}
            borderColor={"blue"}

            letterSpacing={"2px"}
          >
            <Box p={4} >
              {/* Content for your sidebar */}
              <Link mb={3} to="/">
                Home</Link>
              <Divider borderWidth="2px" borderColor="blue"/>
              <Link to={'/about'} variant="solid" colorScheme="purple" mb={3} href="#">
                About
              </Link>{" "}
              <Divider borderWidth="2px" borderColor="blue" />{" "}
              <Link to={"/contact"}variant="solid" colorScheme="purple" mb={3} href="#">
                Contact us
              </Link>{" "}
              <Divider borderWidth="2px" borderColor="blue" />
            </Box>
          </DrawerBody>

          <DrawerFooter
            bg="#c1c2fa"
            color={"black"}
            
         
          >
            {/* Footer content, e.g., additional buttons */}
            <Button
              variant="solid"
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              fontFamily={"Patrick Hand SC"}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SidebarDrawer;
