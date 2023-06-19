// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {
//   Box,
//   Grid,
//   FormControl,
//   FormLabel,
//   Select as ChakraSelect,
//   Button,
//   Input,
//   InputGroup,
//   InputLeftAddon,
//   Image,
// } from "@chakra-ui/react";
// import { ArrowRightIcon } from "@chakra-ui/icons";
// // import { multiStepContext } from "../Context/StepContext";

// export default function Customer() {
//   const { id } = useParams();
//   const [id2, setId2] = useState("");
//   const [amount, setAmount] = useState("");
//   const [data, setData] = useState("");
//   const [user, setUser] = useState([]);
//   //   const history = useHistory();

//   useEffect(async () => {
//     getData(id);
//     await axios.get("/customers").then((res) => {
//       setUser(res.data);
//     });
//   }, [id]);

//   console.log(data);

//   const getData = async (id) => {
//     console.log(id);
//     const response = await axios.get(`/customers/${id}`);
//     if (response) {
//       setData(response.data);
//     }
//   };

//   async function sendMoney() {
//     console.log(transferData);
//     await axios.put("/customer/money", transferData);
//     await axios.post("/transactions", transferData);
//     // history.push("/customers");
//   }

//   const count = Number(amount);

//   const transferData = {
//     count,
//     id,
//     id2,
//   };

//   return (
//     <Box>
//       <Grid templateColumns="repeat(2, 1fr)" gap={6}>
//         <Box>
//           <Image
//             src="../assets/images/sampleProfile.pnhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST99c6DSbaLr9l2kxmLrGaFDZtAFKrb0FQDr8AxOfl450hZG__4WdJrEzfmU7kCwLHrXs&usqp=CAU"
//             alt={data.DOB}
//             boxSize="70%"
//           />
//         </Box>
//         <Box>
//           <Box>
//             <Box>
//               <h4>
//                 {data.name}
//                 <h6>₹{data.amount}</h6>
//               </h4>
//               <span>
//                 {data.accountType} {data.gender}
//               </span>
//             </Box>
//             <Box>
//               <FormControl>
//                 <FormLabel htmlFor="countrySelect">Transfer to</FormLabel>
//                 <ChakraSelect
//                   id="countrySelect"
//                   onChange={(e) => setId2(e.target.value)}
//                   value={id2}
//                 >
//                   {user.map((code, index) =>
//                     data.name !== code.name ? (
//                       <option key={index} value={code._id}>
//                         {code.name}
//                       </option>
//                     ) : null
//                   )}
//                 </ChakraSelect>
//               </FormControl>
//               <InputGroup>
//                 <InputLeftAddon children="₹" />
//                 <Input
//                   type="number"
//                   value={amount}
//                   onChange={(event) => setAmount(event.target.value)}
//                   isInvalid={amount > data.amount}
//                 />
//               </InputGroup>
//             </Box>
//             <Box>
//               {amount > data.amount ? (
//                 <Button variant="contained" disabled>
//                   Send
//                 </Button>
//               ) : (
//                 <Button
//                   variant="contained"
//                   colorScheme="blue"
//                   onClick={sendMoney}
//                 >
//                   Send <ArrowRightIcon ml={2} />
//                 </Button>
//               )}
//             </Box>
//           </Box>
//         </Box>
//       </Grid>
//     </Box>
//   );
// }
import React from "react";
import Form3 from "./Form3";

const Customer = () => {
  return (
    <div>
      <Form3 />
    </div>
  );
};

export default Customer;
