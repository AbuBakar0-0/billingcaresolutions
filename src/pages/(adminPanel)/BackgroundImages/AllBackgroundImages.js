import React from "react";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

export default function AllBackgroundImages() {
  const cardLinks = [
    { name: "Testimonials", link: "/addBackgroundImages/testimonials" },
    { name: "Talk To Expert", link: "/addBackgroundImages/talkToExpert" },
    { name: "Let Us Handle", link: "/addBackgroundImages/letusHandle" },
  ];
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Background Images</h1>
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
