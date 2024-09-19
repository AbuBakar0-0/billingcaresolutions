import "./App.css";
import Home from "../src/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Specialities from "./pages/Specialities";
import DomainArea from "./pages/DomainArea";
import Faqs from "./pages/Faqs";
import FaqsDetails from "./pages/FaqsDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whybcs" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/domain" element={<DomainArea />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/faqDetails" element={<FaqsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
