// import React from "react";
// import { Box, Image, Center, VStack, Button } from "@chakra-ui/react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Heading,
//   Stack,
//   Text,
//   Divider,
//   ButtonGroup,
// } from "@chakra-ui/react";
// const CardOnImage = () => {
//   return (
//     <div>
//       <Box width="100%" position="relative">
//         <Image
//           src="https://img.freepik.com/premium-vector/bank-office-interior-with-clients-getting-financial-banking-services-consultation-with-finance-specialists-credit-payment-advisors-cartoon-flat-vector-illustration_341509-2421.jpg"
//           alt="Image"
//           width="100%"
//         />
//         <Center
//           position="absolute"
//           top="30%"
//           left="80%"
//           transform="translate(-5%, 10%)"
//         >
//           <VStack spacing="10">
//             <Card maxW="sm" bg={"red"}>
//               <CardBody>
//                 <Stack mt="6" spacing="3">
//                   <Heading size="xl">Change the Way You Bank</Heading>
//                   <Text>
//                     Take your next step with PNC Virtual Wallet - checking,
//                     savings and financial tools designed to go wherever you do.
//                   </Text>
//                 </Stack>
//               </CardBody>
//               <Button
//                 variant="solid"
//                 colorScheme="blue"
//                 width={"70%"}
//                 left="10%"
//               >
//                 Learn More and Explore
//               </Button>
//               <CardFooter>
//                 <ButtonGroup spacing="2"></ButtonGroup>
//               </CardFooter>
//             </Card>
//           </VStack>
//         </Center>
//       </Box>
//     </div>
//   );
// };

// export default CardOnImage;
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"8xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>Change the Way You Bank</Heading>
          <Text color={"black.800"} fontSize={"xl"}>
            Take your next step with Your Virtual Wallet - checking, savings and
            financial tools designed to go wherever you do.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Business Planning"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Financial Planning"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Market Analysis"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
