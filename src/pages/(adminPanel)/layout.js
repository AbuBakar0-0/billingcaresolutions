import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = [
    { name: "Blogs", link: "/allBlogs" },
    { name: "Articles", link: "/allArticles" },
    { name: "Specialities", link: "/allSpecialities" },
    { name: "Services", link: "/allServices" },
    { name: "Domain Areas", link: "/allDomainAreas" },
  ];

  const mainlinks = [
    { name: "Home", link: "/homePage" },
    { name: "Why BCS", link: "/whyBcsPage" },
    { name: "Services", link: "/servicesPage" },
    { name: "Specialities", link: "/specialitiesPage" },
    { name: "Domain Area", link: "/domainAreaPage" },
    { name: "Blogs", link: "/blogsPage" },
    { name: "Articles", link: "/articlesPage" },
    { name: "Faqs", link: "/faqsPage" },
    { name: "Terms & Conditions", link: "/termsConditionsPage" },
    { name: "Privacy Policy", link: "/privacyPolicyPage" },
    { name: "Contact Us", link: "/contactPage" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:sticky inset-y-0 left-0 w-64 bg-secondary shadow-xl text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto h-screen`}
      >
        <div className="bg-white p-4">
          <img src="/assets/BCS Logo billingcaresolutions.com.svg" alt="Logo" />
        </div>
        <div className="p-4">
          <nav>
            {navlinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block py-2.5 px-4 rounded hover:bg-primary hover:text-white"
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <hr />
          <nav>
            {mainlinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block py-2.5 px-4 rounded hover:bg-primary hover:text-white"
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <button
            className="md:hidden bg-primary text-white p-2 rounded mb-4"
            onClick={toggleSidebar}
          >
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
