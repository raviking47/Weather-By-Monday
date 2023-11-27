import { Box, Center, Container, Text } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
   <Center> <Box  justifyContent={"center"} width={"80%"}  mt={6}
    p="4"
    shadow={"3px 5px 5px 2px blue "}
    borderWidth="2px"
    borderRadius="lg"
  > 
     <Text fontSize={"4xl"} fontWeight={"extrabold"}>About me </Text>
      <Text fontSize="2xl" fontWeight="bold">As a Full Stack Developer, I am driven by a fervent desire to craft inventive and user-friendly web applications. My proficiency lies in front-end development, where I am well-versed in leveraging HTML, CSS, JavaScript, and React to build visually appealing and responsive interfaces. Complementing this, I possess strong back-end skills, particularly in working with Node.js, enabling me to develop robust and efficient server-side functionalities. My repertoire includes hands-on experience with widely used databases like MySQL, PostgreSQL, and MongoDB, providing me with the ability to design and manage data storage effectively. With a keen eye for detail and a passion for problem-solving, I am committed to delivering high-quality solutions that meet both user expectations and business objectives. I thrive in collaborative environments, always seeking to stay abreast of the latest industry trends and best practices to continuously enhance my skill set.
</Text>
    </Box></Center>
  )
}
