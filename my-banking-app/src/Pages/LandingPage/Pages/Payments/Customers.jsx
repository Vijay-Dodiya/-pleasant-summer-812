import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link as ChakraLink,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Customers() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios.get("/customers").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Box p={4}>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>S No.</Th>
            <Th>Name</Th>
            <Th>Amount</Th>
            <Th>Transfer</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={item.name}>
              <Td>{index + 1}</Td>
              <Td>{item.name}</Td>
              <Td>{item.amount}</Td>
              <Td>
                <ChakraLink as={Link} to={`/customers/${item._id}`}>
                  <Button colorScheme="blue" size="sm">
                    Transfer
                  </Button>
                </ChakraLink>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
