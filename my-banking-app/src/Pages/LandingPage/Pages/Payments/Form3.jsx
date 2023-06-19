import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Divider,
  Center,
} from "@chakra-ui/react";
import axios from "axios";

const Form3 = ({ formData, setFormData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTransfer = () => {
    // Check if the account has sufficient balance
    axios
      .get(`/balance/${formData.account_holder_number}`)
      .then((response) => {
        const accountBalance = response.data.balance;
        const depositAmount = parseFloat(formData.deposit_amount);

        if (depositAmount > parseFloat(accountBalance)) {
          console.error("Insufficient balance");
          alert("Insufficient balance");
          return;
        }

        // If the balance is sufficient, proceed with the money transfer
        setIsSubmitting(true);

        // Make the API request to transfer money
        axios
          .post("/transfer", formData)
          .then((response) => {
            console.log("Transfer successful:", response.data);
            // Handle success, display a confirmation message, update UI, etc.
          })
          .catch((error) => {
            console.error("Transfer failed:", error);
            // Handle error, display an error message, etc.
          })
          .finally(() => {
            setIsSubmitting(false);
          });
      })
      .catch((error) => {
        console.error("Error fetching account balance:", error);
        // Handle error, display an error message, etc.
      });
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Heading w="100%" textAlign={"center"} fontWeight="normal">
          Money Transfering Details
        </Heading>
        <Divider
          margin={"auto"}
          mt={2}
          width={"70%"}
          borderWidth="3px"
          borderColor="blue"
        ></Divider>
        <SimpleGrid columns={2} spacing={6} mt={5}>
          <FormControl as={GridItem} colSpan={[3, 1]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{ color: "gray.50" }}
            >
              Account Holder Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Account Name"
              rounded="md"
              name="account_name"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl as={GridItem} colSpan={[3, 1]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{ color: "gray.50" }}
            >
              Transfer Holder Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Transfer Account Name"
              rounded="md"
              name="transfer_account_older_name"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl as={GridItem} colSpan={[3, 1]}>
            <FormLabel htmlFor="number" fontWeight={"normal"} mt="2%">
              Account Holder Number
            </FormLabel>
            <Input
              id="account_holder_number"
              type="number"
              name="account_holder_number"
              placeholder="Account Holder Number"
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[3, 1]}>
            <FormLabel htmlFor="number" fontWeight={"normal"} mt="2%">
              Transfer Holder Account Number
            </FormLabel>
            <Input
              id="transfer_number"
              type="number"
              name="transfer_number"
              placeholder="Transfer Holder Account Number"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{ color: "gray.50" }}
            >
              Deposit Amount
            </FormLabel>
            <Input
              type="number"
              name="deposite_amount"
              onChange={handleInputChange}
              placeholder="Deposit Amount"
              rounded="md"
            />
          </FormControl>

          <FormControl>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{ color: "gray.50" }}
            >
              Bank Email
            </FormLabel>
            <Input
              type="email"
              name="bankemail"
              placeholder="Bank@example.com"
              rounded="md"
              onChange={handleInputChange}
            />
          </FormControl>

          <Center as={GridItem} colSpan={[3, 2]}>
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              onClick={handleTransfer}
              isLoading={isSubmitting}
            >
              Transfer
            </Button>
          </Center>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Form3;
