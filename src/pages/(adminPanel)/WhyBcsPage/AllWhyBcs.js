import React from "react";
import DashboardLayout from "../layout";
import { Link } from "react-router-dom";

export default function AllWhyBcs() {
  const cardLinks = [
    { name: "Header", link: "/allHeaders/whybcs" },
    { name: "Top 4 Icons", link: "/whyBcsIcons" },
    { name: "About BCS", link: "/whyBcsAboutBcs" },
    { name: "Vision & Mission", link: "/whyBcsVisionMission" },
    { name: "Payoff", link: "/whyBcsPayoff" },
    { name: "Best Services", link: "/whyBcsBestServices" },
    { name: "Milestones", link: "/whyBcsMilestones" },
    { name: "Stats", link: "/allStats" },
    { name: "Why Client Remain with Us", link: "/allClientReasons" },
  ];
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Why BCS</h1>
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
