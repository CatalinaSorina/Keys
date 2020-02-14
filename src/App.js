import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

const App = () => (
  <Wrapper
    addStyle={{ borderColor: "orange", alignItems: "center" }}
    content={<>
      <header>Header, in work</header>
      <Input placeholder="try this input" />
      <Button text="click" />
      <footer>bottom</footer>
    </>}
  />
);

export default App;
