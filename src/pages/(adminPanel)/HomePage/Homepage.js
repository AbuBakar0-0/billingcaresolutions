import React from "react";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

export default function HomePage() {
  const cardLinks = [
    { name: "First Slide", link: "/firstSlide" },
    { name: "Rest of Slides", link: "/addRestOfSlides" },
    { name: "Who We Are", link: "/addWhoWeAre" },
    { name: "What We Provide", link: "/addWhatWeProvide" },
    { name: "Why Choose BCS", link: "/addWhyChooseBcs" },
    { name: "Why Do HealthCare", link: "/whyHealthCareProviders" },
    { name: "Specialities We Offer", link: "/globalSpecialities" },
    { name: "Clients Testimonials", link: "/globalTestimonials" },
    { name: "Softwares", link: "/addSoftwares" },
    { name: "Let Us Handle", link: "/addLetUsHandle" },
    { name: "Counter", link: "/addCounterIcons" },
];
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="w-full flex flex-wrap justify-start items-center gap-4 mt-10">
        {cardLinks.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="min-w-44 p-5 h-20 rounded-lg shadow-xl flex justify-center items-center text-center border-secondary border-2">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
}
