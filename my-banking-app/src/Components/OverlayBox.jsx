import { Box, Text, Divider, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

const OverlayBox = () => {
  return (
    <div>
      <Text fontSize={"4xl"} color="tomato">
        AboutUs
      </Text>
      <Divider />
      <Button mt={"5%"} colorScheme="blue">
        let Know More
      </Button>
    </div>
  );
};

export default OverlayBox;
