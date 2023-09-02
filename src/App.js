import "./App.css";
import Header from './components/Header';
import Body from './components/Body';
import { useState } from "react";
import Modal from "./components/Modal";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  // const getModalOpen = (data) => { // data = isOpen

  // }

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Body/>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  );
}

export default App;
