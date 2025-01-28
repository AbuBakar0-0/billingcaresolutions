import chiropracticFaqs from "./../specialitiesFaqs/chiropracticFaqs";

const chiropracticBillingData = {
  faqs: chiropracticFaqs,
  title: "Chiropractic Billing Services",
  header: "/assets/specialities/headers/Chiropractic.webp", // Placeholder header image
  image: "/assets/specialities/cardImages/Chiropractic.webp", 
  short_description:
    "Chiropractic billing and coding involve translating spinal manipulation, adjustments, and other services into universal codes for insurance reimbursement. Accurate documentation and coding are crucial for optimizing reimbursement and maintaining a healthy revenue cycle.",

  content: {
    sub_content_1: {
      title: "Key Codes for Chiropractic Services",
      image: "",
      details: {
        title: "Commonly Used Codes for Chiropractic Services:",
        data: [
          {
            title: "Spinal Manipulation (1-2 Regions)",
            description: "CPT Code 98940",
          },
          {
            title: "Spinal Manipulation (3-4 Regions)",
            description: "CPT Code 98941",
          },
          {
            title: "Spinal Manipulation (5 Regions)",
            description: "CPT Code 98942",
          },
          {
            title: "Evaluation and Management (E/M) Codes",
            description:
              "For patient visits, ensure proper assignment of E/M codes to optimize billing.",
          },
          {
            title: "Modifiers",
            description:
              "Utilize modifiers like -25 and -59 to clarify billing and enhance reimbursement potential.",
          },
        ],
      },
    },
    sub_content_2: {
      title: "Best Practices for Seamless Billing",
      image: "",
      details: {
        title: `To ensure effective chiropractic billing processes, consider the following strategies:`,
        data: [
          {
            title: "Accurate CPT Code Usage",
            description:
              "Implement precise CPT codes for spinal manipulation and adjustments to maximize reimbursement.",
          },
          {
            title: "ICD-10 Code Application",
            description:
              "Ensure accurate application of ICD-10 codes for diagnoses, facilitating seamless reimbursement.",
          },
          {
            title: "Documentation of Medical Necessity",
            description:
              "Maintain thorough documentation to support medical necessity and compliance with insurance policies.",
          },
          {
            title: "Effective Use of E/M Codes",
            description:
              "Utilize Evaluation and Management codes for patient visits to optimize billing.",
          },
          {
            title: "Understanding of Insurance Policies",
            description:
              "Navigate various insurance policies and regulatory requirements to minimize claim denials.",
          },
        ],
      },
    },
    sub_content_3: {
      title: "Our Expertise in Chiropractic Billing",
      image: "",
      details: {
        title: "",
        data: [
          {
            title: "Accurate Utilization of CPT Codes",
            description:
              "Ensuring correct coding for spinal manipulation (98940, 98941, 98942).",
          },
          {
            title: "Precise ICD-10 Code Application",
            description:
              "Facilitating seamless reimbursement through accurate diagnosis coding.",
          },
          {
            title: "Effective E/M Code Use",
            description:
              "Optimizing billing through appropriate evaluation and management coding.",
          },
          {
            title: "Strategic Modifier Application",
            description:
              "Leveraging modifiers (-25, -59) to enhance reimbursement potential.",
          },
          {
            title: "Expertise in Physical Medicine Modalities",
            description:
              "Coding for services ranging from 97010 to 97039 for chiropractic modalities.",
          },
          {
            title: "In-Depth Knowledge of Regulatory Compliance",
            description:
              "Ensuring adherence to insurance policies and documentation requirements for chiropractic services.",
          },
        ],
      },
    },
  },
  testimonials: [
    {
      title: "Improved Cash Flow",
      description:
        "Reduced claim rejection rates and quicker processing times lead to faster reimbursement.",
    },
    {
      title: "Increased Revenue",
      description:
        "Many clients notice significant revenue growth shortly after outsourcing their billing.",
    },
    {
      title: "Transparent Communication",
      description:
        "Regular updates and immediate responses to inquiries enhance client relationships and trust.",
    },
    {
      title: "Compliance Confidence",
      description:
        "Clients appreciate the assurance that their practice remains compliant with current regulations, reducing audit risks.",
    },
  ],
};

export default chiropracticBillingData;
