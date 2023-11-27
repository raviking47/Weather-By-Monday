import React from 'react';
import { Flex, Box, Button, Text, IconButton, Spacer, Image } from '@chakra-ui/react';
import SidebarDrawer from './ SidebarDrawer';

const Navbar = () => {
  return (
    <Flex   shadow={"2px 5px 5px blue "} borderRadius={"40px"}  align="center" justify="space-between" p={4}>
      <Text fontFamily={"Patrick Hand SC"} fontSize="3xl">Weather By @Monday</Text>
      <Spacer />
      <Text fontFamily={"Patrick Hand SC"} fontSize="2xl">   Make your code's reliability.</Text>
      <Spacer />
      <SidebarDrawer/>
    </Flex>
  );
};

export default Navbar;
