import React from "react";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const cardLinks = [
    { name: "Header", link: "/allHeaders/services" },
    { name: "Why Do HealthCare Providers", link: "/whyHealthCareProviders" },
    { name: "Specialities We Offer", link: "/globalSpecialities" },
    { name: "Testimonials", link: "/globalTestimonials" },
    { name: "Services", link: "/allServices" },
  ];
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Services</h1>
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
