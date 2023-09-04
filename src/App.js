import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Body isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
