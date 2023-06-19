import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;

// import React, { useState } from "react";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//   });

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div>
//             <h1>Step 1</h1>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//             />
//             <button onClick={nextStep}>Next</button>
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <h1>Step 2</h1>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="Phone Number"
//             />
//             <button onClick={nextStep}>Next</button>
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             <h1>Step 3</h1>
//             <p>First Name: {formData.firstName}</p>
//             <p>Last Name: {formData.lastName}</p>
//             <p>Email: {formData.email}</p>
//             <p>Phone Number: {formData.phoneNumber}</p>
//             <button onClick={handleSubmit}>Submit Details</button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return <div>{renderStep()}</div>;
