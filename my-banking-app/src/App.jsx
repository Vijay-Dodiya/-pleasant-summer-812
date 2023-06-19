import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./Context/AuthContextProvider";
import AllRoutes from "./Routes/AllRoutes";

import LargeWithNewsletter from "./Components/Footer"; // this is for the footer

function App() {
  const { name } = useContext(AuthContext);

  return (
    <>
      <AllRoutes />
      <LargeWithNewsletter />
    </>
  );
}

export default App;
