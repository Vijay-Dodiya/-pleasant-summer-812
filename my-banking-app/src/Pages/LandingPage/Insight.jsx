import {
  Grid,
  Box,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Heading,
  Text,
  Stack,
  Container,
  Center,
} from "@chakra-ui/react";

const Insight = () => {
  return (
    <>
      <Container mt={"2%"}>
        <Center>
          <Heading mt={"2%"}>Insight</Heading>
        </Center>
        <Divider
          width="50%"
          margin={"auto"}
          mt="2"
          mb="4"
          borderColor={"red.500"}
          borderWidth="5px"
        />
      </Container>
      <Center>
        <Text fontSize="4xl" mb="4">
          Make today the day you take the next step toward your financial goals.
        </Text>
      </Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={"8%"}>
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
      </Grid>
    </>
  );
};

const Card = () => {
  return (
    <Box maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            View More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Box>
  );
};

const CardBody = ({ children }) => {
  return <Box p={4}>{children}</Box>;
};

const CardFooter = ({ children }) => {
  return <Box p={4}>{children}</Box>;
};

export default Insight;
