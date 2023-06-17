import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import React from "react";

const NavbarUpper = () => {
  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-around"
        padding={2}
        bg="blue.100"
        color={"blackAlpha.700"}
      >
        <Link to="/logo">
          <Box fontWeight="bold">Logo</Box>
        </Link>
        <InputGroup maxW="sm">
          <Input
            placeholder="Search"
            variant="outline"
            borderColor="blue.500"
            _focus={{ borderColor: "green.500" }}
          />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              variant="ghost"
              color={"blackAlpha.900"}
            />
          </InputRightElement>
        </InputGroup>
        <Flex
          as="nav"
          align="center"
          justifyContent="space-between"
          padding={2}
          bgGradient="linear(to-r,red.500, yellow.500)"
          color="white"
          borderRadius="md"
        >
          <Link to="/login">
            <Box mr={10} bg="green.500" p={2} borderRadius="md">
              Login
            </Box>
          </Link>
          <Link to="/signup">
            <Box ml={10} bg="green.500" p={2} borderRadius="md">
              Sign Up
            </Box>
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default NavbarUpper;
