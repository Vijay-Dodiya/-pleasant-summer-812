import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcPortraitMode,
} from "react-icons/fc";
import { FaCcMastercard } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Link to={href}>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Products & Services
        </Heading>
        <Box>
          <Divider borderWidth={5} borderColor="blue.500"></Divider>
        </Box>
        <Text color={"gray.600"} fontSize={{ base: "xl", sm: "2xl" }}>
          Explore and apply online.
        </Text>
      </Stack>

      <Container maxW={"8xl"} mt={12} ml={"10%"}>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <Card
            heading={"Account"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/account"}
          />

          <Card
            heading={"Payments"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/payments"}
          />

          <Card
            heading={"Loans"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/loans"}
          />
          <Card
            heading={"Cards"}
            icon={<Icon as={FaCcMastercard} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/cards"}
          />
          <Card
            heading={"Offers"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/offers"}
          />

          <Card
            heading={"Insurance"}
            icon={<Icon as={FcPortraitMode} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/insurance"}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
