import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import AddArticles from "./pages/(adminPanel)/Articles/AddArticles";
import AllArticles from "./pages/(adminPanel)/Articles/AllArticles";
import EditArticles from "./pages/(adminPanel)/Articles/EditArticles";
import AddBlogs from "./pages/(adminPanel)/Blogs/AddBlogs";
import AllBlogs from "./pages/(adminPanel)/Blogs/AllBlogs";
import EditBlogs from "./pages/(adminPanel)/Blogs/EditBlogs";
import AddDomainAreas from "./pages/(adminPanel)/DomainArea/AddDomainAreas";
import AllDomainAreas from "./pages/(adminPanel)/DomainArea/AllDomainAreas";
import EditDomainAreas from "./pages/(adminPanel)/DomainArea/EditDomainAreas";
import AddServiceFaqs from "./pages/(adminPanel)/Services/AddServiceFaqs";
import AddServices from "./pages/(adminPanel)/Services/AddServices";
import AllServices from "./pages/(adminPanel)/Services/AllServices";
import EditServices from "./pages/(adminPanel)/Services/EditServices";
import AddSpecialities from "./pages/(adminPanel)/Specialities/AddSpecialities";
import AddSpecialityFaqs from "./pages/(adminPanel)/Specialities/AddSpecialityFaqs";
import AddSpecialitySubcontent from "./pages/(adminPanel)/Specialities/AddSpecialitySubcontent";
import AddSpecialityTestimonials from "./pages/(adminPanel)/Specialities/AddSpecialityTestimonials";
import AllSpecialities from "./pages/(adminPanel)/Specialities/AllSpecialities";
import EditSpecialities from "./pages/(adminPanel)/Specialities/EditSpecialities";
import GetSpeciality from "./pages/(adminPanel)/Specialities/GetSpeciality";
import UpdatedSpecialityContent from "./pages/(adminPanel)/Specialities/UpdatedSpecialityContent";
import About from "./pages/About";
import ArticleDetails from "./pages/ArticleDetails";
import Articles from "./pages/Articles";
import Login from "./pages/Auth/Login";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import DomainArea from "./pages/DomainArea";
import Faqs from "./pages/Faqs";
import FaqsDetails from "./pages/FaqsDetails";
import Forbidden from "./pages/Forbidden";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ServiceDetails from "./pages/ServiceDetails";
import Services from "./pages/Services";
import ServiceDetails2 from "./pages/ServicesDetails2";
import Specialities from "./pages/Specialities";
import SpecialitiesDetails from "./pages/SpecialitiesDetails";
import TermsAndConditions from "./pages/TermsAndConditions";
import AddServiceSubcontent from "./pages/(adminPanel)/Services/AddServiceSubcontent";
import GetService from "./pages/(adminPanel)/Services/GetService";
import UpdatedServiceContent from "./pages/(adminPanel)/Services/UpdatedServiceContent";

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
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articledetails/:id" element={<ArticleDetails />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />

          {/* --------------------------------admin-side-------------------------------- */}
          <Route path="/login" element={<Login />} />

          {/* --------------------------------Blogs-side-------------------------------- */}
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route path="/addBlogs" element={<AddBlogs />} />
          <Route path="/editBlog/:id" element={<EditBlogs />} />

          {/* --------------------------------Articles-side-------------------------------- */}
          <Route path="/allArticles" element={<AllArticles />} />
          <Route path="/addArticles" element={<AddArticles />} />
          <Route path="/editArticle/:id" element={<EditArticles />} />

          {/* --------------------------------Domain-Area-side-------------------------------- */}
          <Route path="/allDomainAreas" element={<AllDomainAreas />} />
          <Route path="/addDomainAreas" element={<AddDomainAreas />} />
          <Route path="/editDomainAreas/:id" element={<EditDomainAreas />} />

          {/* --------------------------------Speciality-side-------------------------------- */}
          <Route path="/allSpecialities" element={<AllSpecialities />} />
          <Route path="/addSpecialities" element={<AddSpecialities />} />
          <Route path="/editSpecialities/:id" element={<EditSpecialities />} />

          <Route path="/addSpecialityFaqs/:id" element={<AddSpecialityFaqs />} />
          <Route path="/addSpecialityTestimonials/:id" element={<AddSpecialityTestimonials />} />
          <Route path="/addSpecialitySubcontent/:id/:content_no" element={<AddSpecialitySubcontent />} />
          <Route path="/updatedSpeciality/:id" element={<UpdatedSpecialityContent />} />

          {/* --------------------------------Services-side-------------------------------- */}
          <Route path="/allServices" element={<AllServices />} />
          <Route path="/addServices" element={<AddServices />} />
          <Route path="/editServices/:id" element={<EditServices />} />

          <Route path="/addServiceFaqs/:id" element={<AddServiceFaqs />} />
          <Route path="/addServiceSubcontent/:id/:content_no" element={<AddServiceSubcontent />} />

          <Route path="/getService/:id" element={<GetService />} />
          <Route path="/updatedService/:id" element={<UpdatedServiceContent />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Forbidden />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
