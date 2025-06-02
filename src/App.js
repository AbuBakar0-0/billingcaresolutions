import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";

import AddArticles from "./pages/(adminPanel)/ArticlesPage/AddArticles";
import AllArticles from "./pages/(adminPanel)/ArticlesPage/AllArticles";
import EditArticles from "./pages/(adminPanel)/ArticlesPage/EditArticles";
import ArticlesPage from "./pages/(adminPanel)/ArticlesPage/ArticlesPage";

import AddBlogs from "./pages/(adminPanel)/BlogsPage/AddBlogs";
import AllBlogs from "./pages/(adminPanel)/BlogsPage/AllBlogs";
import EditBlogs from "./pages/(adminPanel)/BlogsPage/EditBlogs";
import BlogsPage from "./pages/(adminPanel)/BlogsPage/BlogsPage";

import AddDomainAreas from "./pages/(adminPanel)/DomainAreaPage/AddDomainAreas";
import AllDomainAreas from "./pages/(adminPanel)/DomainAreaPage/AllDomainAreas";
import EditDomainAreas from "./pages/(adminPanel)/DomainAreaPage/EditDomainAreas";
import DomainAreaPage from "./pages/(adminPanel)/DomainAreaPage/DomainAreaPage";

import FaqsPage from "./pages/(adminPanel)/FaqsPage/FaqsPage";

import AllClientReasons from "./pages/(adminPanel)/GlobalComponents/AddClientReasons";
import AddGlobalTestimonials from "./pages/(adminPanel)/GlobalComponents/AddGlobalTestimonials";
import AddSpecialtiesWeOffer from "./pages/(adminPanel)/GlobalComponents/AddSpecialitiesWeOffer";
import AllStats from "./pages/(adminPanel)/GlobalComponents/AddStats";
import AddWhyHealthCareProviders from "./pages/(adminPanel)/GlobalComponents/AddWhyHealthCareProviders";
import AllHeaders from "./pages/(adminPanel)/GlobalComponents/AllHeaders";

import HomePage from "./pages/(adminPanel)/HomePage/Homepage";
import AddServiceFaqs from "./pages/(adminPanel)/ServicesPage/AddServiceFaqs";
import AddServices from "./pages/(adminPanel)/ServicesPage/AddServices";
import AddServiceSubcontent from "./pages/(adminPanel)/ServicesPage/AddServiceSubcontent";
import AllServices from "./pages/(adminPanel)/ServicesPage/AllServices";
import EditServices from "./pages/(adminPanel)/ServicesPage/EditServices";
import ServicesPage from "./pages/(adminPanel)/ServicesPage/ServicesPage";

import AddSpecialities from "./pages/(adminPanel)/SpecialitiesPage/AddSpecialities";
import AddSpecialityFaqs from "./pages/(adminPanel)/SpecialitiesPage/AddSpecialityFaqs";
import AddSpecialitySubcontent from "./pages/(adminPanel)/SpecialitiesPage/AddSpecialitySubcontent";
import AddSpecialityTestimonials from "./pages/(adminPanel)/SpecialitiesPage/AddSpecialityTestimonials";
import AllSpecialities from "./pages/(adminPanel)/SpecialitiesPage/AllSpecialities";
import EditSpecialities from "./pages/(adminPanel)/SpecialitiesPage/EditSpecialities";
import SpecialitiesPage from "./pages/(adminPanel)/SpecialitiesPage/SpecialitiesPage";

import AddBestService from "./pages/(adminPanel)/WhyBcsPage/AddBestServices";
import AddMilestone from "./pages/(adminPanel)/WhyBcsPage/AddMilestones";
import AddPayoff from "./pages/(adminPanel)/WhyBcsPage/AddPayoff";
import AddWhyBcsIcons from "./pages/(adminPanel)/WhyBcsPage/AddWhyBcsIcons";
import AllWhyBcs from "./pages/(adminPanel)/WhyBcsPage/AllWhyBcs";
import WhyBcsAboutBcs from "./pages/(adminPanel)/WhyBcsPage/WhyBcsAboutBcs";
import WhyBcsVisionMission from "./pages/(adminPanel)/WhyBcsPage/WhyBcsVisionMission";

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
import Specialities from "./pages/Specialities";
import SpecialitiesDetails from "./pages/SpecialitiesDetails";
import TermsAndConditions from "./pages/TermsAndConditions";

import FirstSlide from './pages/(adminPanel)/HomePage/FirstSlide';
import AddWhoWeAre from "./pages/(adminPanel)/HomePage/AddWhoWeAre";
import AddRestOfSlides from "./pages/(adminPanel)/HomePage/AddRestOfSlides";
import AddWhyChooseBcs from "./pages/(adminPanel)/HomePage/AddWhyChooseBcs";
import AddLetUsHandle from "./pages/(adminPanel)/HomePage/AddLetUsHandle";
import AddCounterIcons from "./pages/(adminPanel)/HomePage/AddCounterIcons";
import AddSoftwares from "./pages/(adminPanel)/HomePage/AddSoftwares";
import AddWhatWeProvide from "./pages/(adminPanel)/HomePage/AddWhatWeProvide";
import PrivacyPolicyPage from "./pages/(adminPanel)/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/(adminPanel)/TermsConditionsPage/TermsConditionsPage";
import ContactPage from "./pages/(adminPanel)/ContactPage/ContactPage";
import AddPrivacyPolicy from "./pages/(adminPanel)/PrivacyPolicyPage/AddPrivacyPolicy";
import AddTermsConditions from "./pages/(adminPanel)/TermsConditionsPage/AddTermsConditions";
import AddNewToBcs from "./pages/(adminPanel)/FaqsPage/AddNewToBcs";
import AllBackgroundImages from "./pages/(adminPanel)/BackgroundImages/AllBackgroundImages";
import AddBackgroundImage from "./pages/(adminPanel)/BackgroundImages/AddBackgroundImage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* --------------------------------client-side-------------------------------- */}
          <Route path="/" element={<Home />} />
          <Route path="/why-bcs" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/specialities/:id" element={<SpecialitiesDetails />} />
          <Route path="/domain-areas" element={<DomainArea />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/faq/:id" element={<FaqsDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />

          {/* --------------------------------admin-side-------------------------------- */}
          <Route path="/login" element={<Login />} />

          {/* --------------------------------Blogs-side-------------------------------- */}
          <Route path="/blogsPage" element={<BlogsPage />} />
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route path="/addBlogs" element={<AddBlogs />} />
          <Route path="/editBlog/:id" element={<EditBlogs />} />

          {/* --------------------------------Articles-side-------------------------------- */}
          <Route path="/articlesPage" element={<ArticlesPage />} />
          <Route path="/allArticles" element={<AllArticles />} />
          <Route path="/addArticles" element={<AddArticles />} />
          <Route path="/editArticle/:id" element={<EditArticles />} />

          {/* --------------------------------Domain-Area-side-------------------------------- */}
          <Route path="/domainAreaPage" element={<DomainAreaPage />} />
          <Route path="/allDomainAreas" element={<AllDomainAreas />} />
          <Route path="/addDomainAreas" element={<AddDomainAreas />} />
          <Route path="/editDomainAreas/:id" element={<EditDomainAreas />} />

          {/* --------------------------------Speciality-side-------------------------------- */}
          <Route path="/specialitiesPage" element={<SpecialitiesPage />} />
          <Route path="/allSpecialities" element={<AllSpecialities />} />
          <Route path="/addSpecialities" element={<AddSpecialities />} />
          <Route path="/editSpecialities/:id" element={<EditSpecialities />} />

          <Route path="/addSpecialityFaqs/:id" element={<AddSpecialityFaqs />} />
          <Route path="/addSpecialityTestimonials/:id" element={<AddSpecialityTestimonials />} />
          <Route path="/addSpecialitySubcontent/:id/:content_no" element={<AddSpecialitySubcontent />} />

          {/* --------------------------------Services-side-------------------------------- */}
          <Route path="/servicesPage" element={<ServicesPage />} />
          <Route path="/allServices" element={<AllServices />} />
          <Route path="/addServices" element={<AddServices />} />
          <Route path="/editServices/:id" element={<EditServices />} />

          <Route path="/addServiceFaqs/:id" element={<AddServiceFaqs />} />
          <Route path="/addServiceSubcontent/:id/:content_no" element={<AddServiceSubcontent />} />

          {/* --------------------------------WHY BCS-side-------------------------------- */}
          <Route path="/whyBcsPage" element={<AllWhyBcs />} />
          <Route path="/whyBcsIcons" element={<AddWhyBcsIcons />} />
          <Route path="/whyBcsAboutBcs" element={<WhyBcsAboutBcs />} />
          <Route path="/whyBcsVisionMission" element={<WhyBcsVisionMission />} />
          <Route path="/whyBcsPayoff" element={<AddPayoff />} />
          <Route path="/whyBcsBestServices" element={<AddBestService />} />
          <Route path="/whyBcsMilestones" element={<AddMilestone />} />

          {/* --------------------------------FAQS PAGE-side-------------------------------- */}
          <Route path="/faqsPage" element={<FaqsPage />} />
          <Route path="/addNewToBcs" element={<AddNewToBcs />} />

          {/* --------------------------------Privacy Policy PAGE-side-------------------------------- */}
          <Route path="/privacyPolicyPage" element={<PrivacyPolicyPage />} />
          <Route path="/addPrivacyPolicy" element={<AddPrivacyPolicy />} />
          
          {/* --------------------------------Privacy Policy PAGE-side-------------------------------- */}
          <Route path="/termsConditionsPage" element={<TermsConditionsPage />} />
          <Route path="/addTermsConditions" element={<AddTermsConditions />} />

          {/* --------------------------------Privacy Policy PAGE-side-------------------------------- */}
          <Route path="/contactPage" element={<ContactPage />} />
          
          {/* --------------------------------HOME PAGE-side-------------------------------- */}
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/firstSlide" element={<FirstSlide />} />
          <Route path="/addRestOfSlides" element={<AddRestOfSlides />} />
          <Route path="/addWhoWeAre" element={<AddWhoWeAre />} />
          <Route path="/addWhyChooseBcs" element={<AddWhyChooseBcs />} />
          <Route path="/addLetUsHandle" element={<AddLetUsHandle />} />
          <Route path="/addCounterIcons" element={<AddCounterIcons />} />
          <Route path="/addSoftwares" element={<AddSoftwares />} />
          <Route path="/addWhatWeProvide" element={<AddWhatWeProvide />} />

          {/* --------------------------------Globals-side-------------------------------- */}
          <Route path="/allHeaders/:type" element={<AllHeaders />} />
          <Route path="/allStats" element={<AllStats />} />
          <Route path="/allClientReasons" element={<AllClientReasons />} />
          <Route path="/whyHealthCareProviders" element={<AddWhyHealthCareProviders />} />
          <Route path="/globalSpecialities" element={<AddSpecialtiesWeOffer />} />
          <Route path="/globalTestimonials" element={<AddGlobalTestimonials />} />

          {/* --------------------------------Background Images-side-------------------------------- */}
          <Route path="/backgroundImages" element={<AllBackgroundImages />} />
          <Route path="/addBackgroundImages/:type" element={<AddBackgroundImage />} />
          
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Forbidden />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
