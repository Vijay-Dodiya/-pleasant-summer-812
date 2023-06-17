import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./Context/AuthContextProvider";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const { name } = useContext(AuthContext);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
