import { Box, Button, Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
 
  return (
    <> 
    <Container centerContent>
      <Text fontSize={"2xl"} fontFamily={"comic neue"} fontWeight={"bold"} m={3} p={2} borderWidth={"2px"} borderRadius={"20px"} _hover={{opacity:"0.5"} } > You can contact me</Text>
    </Container>
      <Container >
        <Box fontFamily={"comic neue"} className="cards">
          <Box className="cards red">
            <Heading fontSize={"20px"}><Link fontFamily={"comic neue"}  href="https://www.linkedin.com/in/ravi-tomer-785385165/" target="_blank">Linkedin</Link></Heading>
          </Box>
         
          <Box className="cards red">
          <Heading fontSize={"20px"}><Link fontFamily={"comic neue"} href="https://www.instagram.com/im_rtomer/" target="_blank">Instagram</Link></Heading>
          </Box>
          <Box className="cards red">
            <Heading fontSize={"20px"}><Link fontFamily={"comic neue"} href="https://github.com/raviking47" target="_blank">Github</Link></Heading>
          </Box>
          <Box className="cards red">
            <Heading fontSize={"20px"}><Link fontFamily={"comic neue"} href="https://portfolioravitomer.netlify.app/" target="_blank">Portfolio</Link></Heading>
          </Box>
          
        </Box>
      </Container>
     
    
    </>
  );
}