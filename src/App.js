import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const openModal = () => {
    setActiveModal("contact");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="App">
      <Header onClick={openModal} />
      <About />
      <Showcase />
      <Footer />
      {activeModal === "contact" && <ContactModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
