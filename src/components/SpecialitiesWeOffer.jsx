import React from 'react'
import SpecialityCard from './SpecialityCard'

function SpecialitiesWeOffer() {
    const data = [
        {
            title: "Durable Medical Equipment (DME)",
            description: "We handle billing services for DME providers, ensuring accurate coding and timely submission of claims for equipment like wheelchairs, oxygen supplies, and prosthetics. Our services focus on maximizing reimbursements from Medicare and other insurance providers.",
            link: "Link to DME services"
        },
        {
            title: "Mental Health",
            description: "Our billing services for mental health providers include handling claims for therapy sessions, psychiatric evaluations, and medication management. We specialize in mental health-specific coding (e.g., CPT and DSM-5 criteria) to ensure compliance and optimize revenue.",
            link: "Link to Mental Health services"
        },
        {
            title: "Radiology",
            description: "We manage billing for radiology practices, processing claims for imaging procedures such as X-rays, MRIs, and CT scans. Our expertise includes accurate coding for diagnostic interpretations and technical components to maximize reimbursement.",
            link: "Link to Radiology services"
        },
        {
            title: "Internal Medicine",
            description: "We provide comprehensive billing services for internal medicine practices, covering office visits, preventive care, chronic disease management, and coordination with specialists. Our goal is to streamline billing processes and ensure timely payments.",
            link: "Link to Internal Medicine services"
        },
        {
            title: "Cardiology",
            description: "Our billing services for cardiology practices encompass diagnostic tests (e.g., EKG, echocardiography), procedures (e.g., cardiac catheterization, pacemaker insertion), and ongoing cardiovascular care. We optimize revenue by adhering to cardiology-specific coding and documentation requirements.",
            link: "Link to Cardiology services"
        },
        {
            title: "Physical Therapy",
            description: "We specialize in billing for physical therapy practices, handling claims for therapeutic exercises, manual therapy, modalities (e.g., ultrasound, electrical stimulation), and functional assessments. Our services focus on maximizing reimbursements and reducing billing errors.",
            link: "Link to Physical Therapy services"
        },
        {
            title: "Plastic Surgery",
            description: "Our billing services for plastic surgery practices cover elective and reconstructive procedures, cosmetic surgeries, and related services such as consultations and post-operative care. We ensure accurate coding and compliance with payer policies to optimize revenue.",
            link: "Link to Plastic Surgery services"
        },
        {
            title: "Primary Care",
            description: "We offer billing services tailored for primary care providers, managing claims for preventive care, acute illnesses, chronic disease management, vaccinations, and routine screenings. Our services aim to streamline revenue cycles and improve financial outcomes.",
            link: "Link to Primary Care services"
        },
        {
            title: "General Practice",
            description: "Our billing services cater to general practice providers, handling a wide range of medical services including routine exams, minor procedures, acute and chronic disease management, and diverse patient needs. We focus on efficient billing processes to enhance revenue and practice efficiency.",
            link: "Link to General Practice services"
        }
    ];

    return (
        <div className='flex flex-col justify-center'>
            <p className='text3xl text-center'>Specialties We Offer</p>
            <div className='flex flex-wrap justify-around'>
                {data.map((item) => (
                    <SpecialityCard data={item} />
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <button className='px-3 py-4 bg-primary rounded-2xl text-white'>Explore More</button>

            </div>
        </div>
    )
}

export default SpecialitiesWeOffer