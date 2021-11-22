import "./App.css";
import { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import MainInput from "./MainInput";

const App = () => {
  const [name, setName] = useState("God");

  return (
    <div>
      <MainInput setName={setName} /> {name}
      <br />
      { name==="Go" ? 
        <PrimaryBtn fullName="Go" /> 
      : 
        <PrimaryBtn fullName="Submit" />
      }
      <br />
    </div>
  );
};

export default App;
