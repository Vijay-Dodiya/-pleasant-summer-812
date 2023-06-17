import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Tabs bg={"green.500"} variant="soft-rounded" padding={5}>
        <Box width="100%" margin="auto">
          <TabList justifyContent="space-around">
            <Tab>
              <Link to="/">Home</Link>
            </Tab>
            <Tab>
              <Link to="/products">Products</Link>
            </Tab>
            <Tab>
              <Link to="/aboutUs">AboutUs</Link>
            </Tab>
            <Tab>
              <Link to="/contactUs">ContactUs</Link>
            </Tab>
            <Tab>
              <Link to="/openAccount">OpenAccount</Link>
            </Tab>
          </TabList>
        </Box>
      </Tabs>
      {/* <TabPanels>
          <TabPanel>
            <Box p={4}>Home Content</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>About Content</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Contact Content</Box>
          </TabPanel>
        </TabPanels> */}

      {/* <Container>Something</Container> */}
    </div>
  );
};

export default Navbar;
