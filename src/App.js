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
import ServiceDetails2 from "./pages/ServicesDetails2";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import Login from "./pages/adminPanel/Login";
import Dashboard from "./pages/adminPanel/Dashboard";
import Headers from "./pages/adminPanel/Headers";
import Forbidden from "./pages/Forbidden";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* --------------------------------client-side-------------------------------- */}
          <Route path="/" element={<Home />} />
          <Route path="/whybcs" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails" element={<ServiceDetails />} />
          <Route path="/servicesdetails" element={<ServiceDetails2 />} />
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
          <Route path="/articles" element={<Articles />} />
          <Route path="/articledetails" element={<ArticleDetails />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />

          {/* --------------------------------admin-side-------------------------------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/headers" element={<Headers />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Forbidden />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
