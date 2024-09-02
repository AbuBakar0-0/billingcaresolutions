import "./App.css";
import Home from "../src/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whybcs" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
