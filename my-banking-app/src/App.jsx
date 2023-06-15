import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./Context/AuthContextProvider";

function App() {
  const { name } = useContext(AuthContext);

  return (
    <>
      <h1 style={{ fontSize: "100px" }}>{name}</h1>
    </>
  );
}

export default App;
