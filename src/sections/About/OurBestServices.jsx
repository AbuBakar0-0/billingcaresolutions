import React from 'react'
import Heading from './../../components/Heading';
import ServicesCard from '../../components/About/ServicesCard';


function OurBestServices() {
    
    const data = [
        {
            title: "Medical Billing & Coding Services",
            description: "Billing Care Solutions offers precise and compliant medical billing and coding to maximize reimbursements and minimize claim denials. Certified coders handle ICD-10, CPT, and HCPCS with accuracy, ensuring timely claims submission and reducing errors. Tailored solutions across various specialties, combined with real-time reporting, ensure full compliance and enhanced revenue.",
            img:"/assets/services/icons/1.svg",
        },
        {
            title: "Revenue Cycle Management",
            description: "Billing Care Solutions expertly manages the entire revenue cycle, from patient onboarding to final remittance. Seamless claims processing, accurate payment allocation, and proactive denial resolution drive faster reimbursements and reduce financial setbacks. Advanced reporting and strategic follow-ups enhance cash flow, enabling financial success and regulatory compliance.",
            img:"/assets/services/icons/3.svg",
        },
        {
            title: "Medical Credentialing Services",
            description: "Billing Care Solutions streamlines the credentialing process with precision and efficiency. From verifying qualifications to conducting comprehensive compliance assessments, Billing Care Solutions ensures seamless and expedited credentialing. This service removes administrative barriers, allowing physicians to focus on patient care while upholding the highest standards of regulatory compliance.",
            img:"/assets/services/icons/2.svg",
        },
        {
            title: "VOB & Prior Authorization",
            description: "Billing Care Solutions ensures unparalleled precision in verification and prior authorization. Rigorous patient eligibility checks and meticulous management of authorization requests streamline approvals, reduce claim rejections, and accelerate patient access to services. BCS’s expert handling supports optimal revenue flow and operational excellence.",
            img:"/assets/services/icons/7.svg",
        },
        {
            title: "AR & Denial Management",
            description: "Billing Care Solutions enhances financial performance with expert AR and denial management services. By meticulously managing accounts receivable and strategically resolving denials, Billing Care Solutions ensures streamlined revenue cycles and maximized cash flow. Proactive denial management and sophisticated analytics turn financial challenges into growth opportunities.",
            img:"/assets/services/icons/6.svg",
        },
        {
            title: "Reporting and Analytics",
            description: "Billing Care Solutions delivers sophisticated reporting and analytics that turn complex data into actionable insights. Utilizing advanced analytical tools, BCS provides a comprehensive view of financial and operational performance. This data-driven approach helps healthcare providers make informed decisions, identify trends, and optimize strategies for enhanced success.",
            img:"/assets/services/icons/5.svg",
        },
    ];

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-3 p-10'>
                <Heading data={'Our Best Services'} />
                
                <div className='w-full flex flex-wrap justify-between items-center my-5 gap-3'>
                    {data.map((item) => (
                        <ServicesCard title={item.title} description={item.description} img={item.img}/>
                    ))}
                </div>

            </div>
        </>
    )
}

export default OurBestServices