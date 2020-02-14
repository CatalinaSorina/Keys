import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";

const App = () => (
  <Wrapper
    addStyle={{ borderColor: "orange" }}
    content={<>
      <header className="App-header">In work</header>
    </>}
  />
);

export default App;
