import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import DetailedAbout from "./components/DetailedAbout";
import { useState } from "react";
import { Routes, Route } from "react-router";

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <>
                <Showcase />
              </>
            </>
          }
        ></Route>
        <Route exact path="/about" element={<DetailedAbout />}></Route>
      </Routes>
      <Footer />
      {activeModal === "contact" && <ContactModal onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
