import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Tab from "./components/Tab/Tab";

const App = () => (
  <Wrapper
    addStyle={{ width: "98vw", height: "96vh", border: "none", alignItems: "center", padding: "1rem" }}
    content={<>
      <Tab content={<>
        <header>Header, in work</header>
        <Input placeholder="try this input" />
        <Button text="click" style={{ color: "purple", backgroundColor: "plum", borderColor: "purple" }} />
        <footer>bottom</footer>
      </>}
        buttonStyle={{ backgroundColor: "pink", borderColor: "rosybrown" }}
        tabStyle={{ backgroundColor: "pink", borderColor: "rosybrown", alignItems: "center" }}
      />
      <Tab content={<>
        <header>Header, in work</header>
        <footer>bottom</footer>
      </>} />
    </>}
  />
);

export default App;
