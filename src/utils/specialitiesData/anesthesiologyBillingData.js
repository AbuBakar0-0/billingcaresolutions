import anesthesiologyFaqs from "./../specialitiesFaqs/anesthesiologyFaqs";

const anesthesiologyBillingData = {
  faqs: anesthesiologyFaqs,
  header: "/assets/specialities/headers/Anesthesiology.webp",
  title: "Anesthesiology Billing Services",
  image: "/assets/specialities/cardImages/Anesthesiology.webp",
  short_description:
    "Anesthesia billing and coding requires precision and expertise to navigate complex reimbursement regulations, ensuring accurate payment for life-saving procedures. Effective anesthesia billing harmonizes medical coding (CPT, ICD-10), patient eligibility verification, and insurance payer guidelines.",

  content: {
    sub_content_1: {
      title: "Calculating Anesthesia Charges",
      image: "",
      details: {
        title: `To accurately determine anesthesia charges, apply the following formula:`,
        data: [
          {
            title: "Anesthesia Charge Calculation",
            description: `Anesthesia Charge = (Base Units + Time Units + Modifying Units) x Conversion Factor <br /> <p class="text-secondary font-semibold">Common CPT Codes for Anesthesia Services</p>
              <p>Familiarity with the following CPT codes is vital for effective anesthesia billing</p>
              <ul class='list-disc list-inside'>
                <li><span>00100-01999: General anesthesia procedures.</span></li>
                <li><span>00902-00974: Codes for critical care services.</span></li>
                <li><span>99100-99140: Modifying units for special circumstances.</span></li>
              </ul>`,
          },
        ],
      },
    },
    sub_content_2: {
      title: "Our Anesthesia Billing Expertise",
      image: "",
      details: {
        title: `  `,
        data: [
          {
            title: "Accurate Calculation",
            description:
              "Mastery of the formula for calculating anesthesia charges.",
          },
          {
            title: "Base Unit Assignment",
            description:
              "Knowledge of base unit assignments for various procedures (CPT codes 00100-01999)",
          },
          {
            title: "Time Unit Tracking",
            description:
              "Expertise in tracking time units in 15-minute increments and applying modifying units (CPT 99100-99140).",
          },
          {
            title: "Conversion Factor Management",
            description:
              "Understanding Medicare and commercial conversion rates.",
          },
        ],
      },
    },
    sub_content_3: {
      title: "Coding Expertise",
      image: "",
      details: {
        title: `  `,
        data: [
          {
            title: "CPT Code Selection",
            description: "Proficient selection of CPT codes for anesthesia procedures (00100-01999).",
          },
          {
            title: "Critical Care Services Coding",
            description: "Expertise in coding critical care services (00902-00974).",
          },
          {
            title: "Modifying Unit Application",
            description: "Knowledge of modifying unit applications (99100-99140).",
          },
          {
            title: "Modifier Proficiency",
            description: "Effective use of relevant modifiers (QX, QY, QK, AA, AD) to denote various anesthesia service conditions.",
          },
        ],
      },
    },
  },
  testimonials: [
    {
      title: "Faster Payments",
      description:
        "Our rejection rates have dropped, and payments come in faster, leading to better cash flow.",
    },
    {
      title: "Increased Revenue",
      description:
        "We saw a measurable revenue increase in the first few months of outsourcing.",
    },
    {
      title: "Compliance Confidence",
      description:
        "The team ensures our practice is compliant with healthcare regulations, reducing audit risks.",
    },
  ],
};

export default anesthesiologyBillingData;
