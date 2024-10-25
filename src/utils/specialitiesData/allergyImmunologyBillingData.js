import allergyAndImmunologyFaqs from "../specialitiesFaqs/allergyFaqs";

const allergyBillingData = {
  faqs: allergyAndImmunologyFaqs,
  title: "Allergy and Immunology Billing Services",
  header:"./assets/specialities/headers/AllergyandImmunology.webp",
  image: "./assets/specialities/cardImages/allergy.webp",
  short_description:
    "Effective billing for allergy testing and immunotherapy demands strict adherence to Medicare guidelines and CPT coding regulations to ensure accurate reimbursement. Understanding the key codes involved is essential for healthcare providers.",

  content: {
    sub_content_1: {
      title: "Key Codes for Allergy Testing",
      image: "",
      details: {
        title: `Key Codes for Allergy Testing`,
        data: [
          {
            title: "Percutaneous Tests",
            description: "Codes 95004-95078",
          },
          {
            title: "Intracutaneous Tests",
            description: "Codes 95024-95056",
          },
          {
            title: "Photo Patch Tests",
            description: "Code 95052",
          },
        ],
      },
    },
    
    sub_content_2: {
      title: "Best Practices for Seamless Billing",
      image: "",
      details: {
        title: `To facilitate seamless billing processes, consider the following strategies:`,
        data: [
          {
            title: "E/M Codes",
            description: "Always report Evaluation and Management (E/M) codes with modifier -25 for separately identifiable services.",
          },
          {
            title: "Reporting Restrictions",
            description: "Be aware that allergy testing and immunotherapy services should not be reported on the same day to avoid claim denials.",
          },
          {
            title: "Unit Reporting",
            description: "Accurate reporting for antigen preparation is crucial; 1 cc aliquot is considered one unit, in compliance with Medicare guidelines.",
          },
        ],
      },
    },
    sub_content_3: {
      title: "Our Expertise in Allergy Billing",
      image: "",
      details: {
        title: `  `,
        data: [
          {
            title: "Accurate CPT Coding and Billing",
            description: "Ensuring precision in coding for optimal reimbursement.",
          },
          {
            title: "Compliance with Medicare Guidelines",
            description: "Staying up-to-date with the latest regulations.",
          },
          {
            title: "Maximizing Reimbursement",
            description: "Strategies to enhance revenue cycle management.",
          },
          {
            title: "Efficient Claims Processing and Submission",
            description: "Streamlining the billing workflow.",
          },
          {
            title: "Specialized Knowledge",
            description: "Proficient in allergy testing and immunotherapy coding (95004-95078, 95115-95117, 95144-95170).",
          },
        ],
      },
    },
  },
  testimonials: [
    {
      title: "Dr. Sarah J., Allergy Specialist",
      description:
        "“Billing Care Solutions has transformed our billing process. Our revenue has improved, and we can focus more on our patients.”",
    },
    {
      title: "Dr. Peter W., Immunology Practice Owner",
      description:
        "“Since partnering with BCS, our claim denials have decreased dramatically. Their expertise in allergy billing is invaluable.”",
    },
    {
      title: "Dr. Michelle K., Allergy and Immunology Practitioner",
      description:
        "“The BCS team is responsive and dedicated. Their tailored approach has made a significant difference in our billing operations.”",
    },
    {
      title: "Dr. Jason H., Allergy and Immunology Clinic Director",
      description:
        "“With Billing Care Solutions handling our billing, we’ve seen our financial health stabilize. Their knowledge of the field is impressive.”",
    },
  ],
};

export default allergyBillingData;


