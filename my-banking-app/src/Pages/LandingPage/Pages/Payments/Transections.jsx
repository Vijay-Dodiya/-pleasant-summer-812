import React, { useEffect, useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Alert } from "@chakra-ui/react";
import axios from "axios";
import HeroSection from "./../../../BetWeenContact";

export default function Transections() {
  const [transactions, setTransactions] = useState([]);

  useEffect(async () => {
    await axios.get("/transfer").then((res) => {
      setTransactions(res.data);
    });
  }, []);

  return (
    <>
      {/* <HeroSection /> */}

      <Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Transaction Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((data, index) => (
              <Tr key={index}>
                <Td>
                  <Alert status="success">
                    {data.userOne} transferred ₹{data.amount} to {data.userTwo}
                  </Alert>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}
