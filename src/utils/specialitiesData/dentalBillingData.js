import dentalCareFaqs from "./../specialitiesFaqs/dentalFaqs";

const dentalBillingData = {
  faqs: dentalCareFaqs, // assuming FAQs for dental billing are available
  title: "Dental Billing Services",
  header: "./assets/specialities/headers/Dental.webp", // Placeholder header image
  image: "./assets/specialities/cardImages/Dental.webp", // Placeholder image reference
  short_description:
    "Effective dental billing and coding are crucial for a successful dental practice, ensuring timely reimbursement and compliance with insurance regulations. Accurate documentation and reporting of dental procedures using Current Dental Terminology (CDT) codes are essential for optimizing revenue.",

  content: {
    sub_content_1: {
      title: "Key CDT Codes for Dental Procedures",
      image: "",
      details: {
        title: "Commonly Used CDT Codes:",
        data: [
          {
            title: "Core Buildups",
            description: "CDT Code D2950",
          },
          {
            title: "Periodic Oral Evaluations",
            description: "CDT Code D0120",
          },
          {
            title: "Other Relevant Codes",
            description:
              "Ensure accurate coding for a range of dental services to facilitate reimbursement.",
          },
        ],
      },
    },
    sub_content_2: {
      title: "Best Practices for Seamless Dental Billing",
      image: "",
      details: {
        title: `To enhance the efficiency of dental billing processes, consider the following strategies:`,
        data: [
          {
            title: "Regularly Update CDT Codes",
            description:
              "Stay informed about annual revisions to CDT codes to ensure compliance and avoid claim denials.",
          },
          {
            title: "Verify Patient Insurance Coverage",
            description:
              "Confirm patient eligibility and insurance details before providing services to minimize payment issues.",
          },
          {
            title: "Track Claim Denials",
            description:
              "Monitor and analyze claim denials to identify patterns and improve future submissions.",
          },
          {
            title: "Leverage Technology",
            description:
              "Utilize electronic claims submission tools for streamlined billing and improved accuracy.",
          },
        ],
      },
    },
    sub_content_3: {
      title: "Our Expertise in Dental Billing",
      image: "",
      details: {
        title: "",
        data: [
          {
            title: "Precise CDT Code Utilization",
            description:
              "Ensuring correct coding for procedures like core buildups (D2950) and oral evaluations (D0120).",
          },
          {
            title: "Compliance with Annual Code Revisions",
            description:
              "Staying current with CDT updates to mitigate claim denial risks.",
          },
          {
            title: "Understanding Pricing Influencers",
            description:
              "Analyzing factors such as procedure complexity, geographic location, and practitioner expertise.",
          },
          {
            title: "Revenue Cycle Optimization",
            description:
              "Enhancing practice efficiency through accurate coding and billing.",
          },
          {
            title: "Expert Guidance",
            description:
              "Providing insights into dental practice operations and financial management strategies.",
          },
        ],
      },
    },
  },
  testimonials: [
    {
      title: "Dr. Laura M., Dental Practice Owner",
      description:
        "Billing Care Solutions has transformed our billing process. We used to struggle with denied claims and slow reimbursements, but now our revenue cycle is smooth and efficient.",
    },
    {
      title: "Mark S., Dental Clinic Manager",
      description:
        "Outsourcing our billing was the best decision we made. BCS handles everything, from claim submission to patient billing, allowing us to focus on patient care.",
    },
    {
      title: "Dr. James R., Orthodontist",
      description:
        "Their expertise in dental coding and compliance is unmatched. Our claims are processed accurately and quickly, with minimal denials.",
    },
  ],
};

export default dentalBillingData;
