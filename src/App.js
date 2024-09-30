import "./App.css";
import Home from "../src/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Specialities from "./pages/Specialities";
import DomainArea from "./pages/DomainArea";
import Faqs from "./pages/Faqs";
import FaqsDetails from "./pages/FaqsDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import SpecialitiesDetails from "./pages/SpecialitiesDetails";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whybcs" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails" element={<ServiceDetails />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route
            path="/specialitiesDetails"
            element={<SpecialitiesDetails />}
          />
          <Route path="/domain" element={<DomainArea />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/faqDetails" element={<FaqsDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
