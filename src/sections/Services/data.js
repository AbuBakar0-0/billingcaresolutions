import physiciansCredentialingData from "../../utils/services/physiciansCredentialingData";
import medicalBillingAndCodingAuditsData from "../../utils/services/medicalBillingAndCodingAuditsData";
import reportingAndAnalyticsData from "./../../utils/services/reportingAndAnalyticsData";
import arAndDenialData from "./../../utils/services/arAndDenialData";
import vobData from "../../utils/services/vobData";
import consultationData from "./../../utils/services/consultationData";
import complianceData from "./../../utils/services/complianceData";
import patientHelpData from "./../../utils/services/patientHelpData";
import medicalBillingAndCodingData from "../../utils/services/medicalServicesData";
import revenueCycleManagementData from "../../utils/services/revenueCycleData";

const services = [
  {
    title: "Medical Billing & Coding",
    img: "/assets/what_do_we_offer/1.webp",
    icon: "/assets/services/icons/1.svg",
    data: medicalBillingAndCodingData,
  },
  {
    title: "Credentialing Services",
    img: "/assets/what_do_we_offer/3.webp",
    icon: "/assets/services/icons/2.svg",
    data: physiciansCredentialingData,
  },
  {
    title: "Revenue Cycle Management",
    img: "/assets/what_do_we_offer/2.webp",
    icon: "/assets/services/icons/3.svg",
    data: revenueCycleManagementData,
  },
  {
    title: "Billing and Coding Audits",
    img: "/assets/what_do_we_offer/4.webp",
    icon: "/assets/services/icons/4.svg",
    data: medicalBillingAndCodingAuditsData,
  },
  {
    title: "Reporting and Analytics",
    img: "/assets/what_do_we_offer/5.webp",
    icon: "/assets/services/icons/5.svg",
    data: reportingAndAnalyticsData,
  },
  {
    title: "AR & Denial Management",
    img: "/assets/what_do_we_offer/6.webp",
    icon: "/assets/services/icons/6.svg",
    data: arAndDenialData,
  },
  {
    title: "VOB & Prior Authorization",
    img: "/assets/what_do_we_offer/8.webp",
    icon: "/assets/services/icons/7.svg",
    data: vobData,
  },
  {
    title: "Consultation Services",
    img: "/assets/what_do_we_offer/7.webp",
    icon: "/assets/services/icons/8.svg",
    data: consultationData,
  },
  {
    title: "Compliance Assistance",
    img: "/assets/what_do_we_offer/9.webp",
    icon: "/assets/services/icons/9.svg",
    data: complianceData,
  },
  {
    title: "Patient Help Support",
    img: "/assets/what_do_we_offer/10.webp",
    icon: "/assets/services/icons/10.svg",
    data: patientHelpData,
  },
];

export default services;
