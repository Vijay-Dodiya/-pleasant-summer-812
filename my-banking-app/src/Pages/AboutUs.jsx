import React from "react";
import OverlayComponent from "./../Components/Overlay";
import {
  Stack,
  Box,
  Text,
  Center,
  Divider,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  ButtonGroup,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <div>
      <OverlayComponent />
      <Center>
        <Text fontSize="4xl" mt={"2%"}>
          About Us
        </Text>
      </Center>
      <Divider />

      <Container maxW="8xl" bg="green.400" color="#262626" fontSize="3xl">
        For more than 170 years, we have been committed to providing our clients
        with great service and powerful financial expertise to help them meet
        their financial goals. We are proud of our longstanding history of
        supporting not only our customers but also our communities, employees
        and shareholders.
      </Container>

      <Center mt={"2%"}>
        <Text fontSize="4xl">Our Commitment</Text>
      </Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={"8%"}>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://www.pnc.com/content/dam/pnc-thought-leadership/about/our_commitments/customers/pnc_insights_commitments_evolution-banking-digital-tools.jpg"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  The Evolution of Banking: Digital Tools Combined with
                  In-person Interaction
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  View More...
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://www.pnc.com/content/dam/pnc-thought-leadership/about/our_commitments/communities/pnc_insights_commitments_pbs_lessons_kids.jpg"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  PNC and PBS KIDS Team Up to Elevate Pre-K Lesson Plans
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  View More...
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://www.pnc.com/content/dam/pnc-thought-leadership/about/our_commitments/communities/pnc_insights_commitments_mobile_branch_atm_atlanta.jpg"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  Mobile Branches Provide Better Banking Access, Promote
                  Economic Empowerment
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  View More...
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://www.pnc.com/content/dam/pnc-thought-leadership/about/our_commitments/communities/pnc_insights_commitments_coraluscollective3.jpg"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  PNC Supports Women Entrepreneurs Through New PNC Bank +
                  Coralus Collective
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  View More...
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://www.pnc.com/content/dam/pnc-thought-leadership/about/our_commitments/communities/pnc_insights_commitments_pnc_angel_city_logo.jpg"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Angel City Partnership Takes Flight</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  View More...
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://www.pnc.com/content/dam/pnc-thought-leadership/about/our_commitments/customers/pnc_insights_commitments_econoutlook_spring.jpg"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  Small Business Owners Optimistic About Business Success in
                  Near-Term
                </Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  View More...
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};

export default AboutUs;
