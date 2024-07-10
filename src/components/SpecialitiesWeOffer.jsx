import React from 'react'
import SpecialityCard from './SpecialityCard'

function SpecialitiesWeOffer() {
    const data = [
        {
            title: "Durable Medical Equipment (DME)",
            description: "We handle billing services for DME providers, ensuring accurate coding and timely submission of claims for equipment like wheelchairs, oxygen supplies, and prosthetics. Our services focus on maximizing reimbursements from Medicare and other insurance providers.",
            link: "Link to DME services",
            image: "./assets/specialities_we_offer/1. DME billingcaresolutions.com.svg"
        },
        {
            title: "Mental Health",
            description: "Our billing services for mental health providers include handling claims for therapy sessions, psychiatric evaluations, and medication management. We specialize in mental health-specific coding (e.g., CPT and DSM-5 criteria) to ensure compliance and optimize revenue.",
            link: "Link to Mental Health services",
            image: "./assets/specialities_we_offer/2. Mental Health billingcaresolutions.com.svg"
        },
        {
            title: "Radiology",
            description: "We manage billing for radiology practices, processing claims for imaging procedures such as X-rays, MRIs, and CT scans. Our expertise includes accurate coding for diagnostic interpretations and technical components to maximize reimbursement.",
            link: "Link to Radiology services",
            image: "./assets/specialities_we_offer/3. Radiology billingcaresolutions.com.svg"
        },
        {
            title: "Internal Medicine",
            description: "We provide comprehensive billing services for internal medicine practices, covering office visits, preventive care, chronic disease management, and coordination with specialists. Our goal is to streamline billing processes and ensure timely payments.",
            link: "Link to Internal Medicine services",
            image: "./assets/specialities_we_offer/4. Internal Medicine billingcaresolutions.com.svg"
        },
        {
            title: "Cardiology",
            description: "Our billing services for cardiology practices encompass diagnostic tests (e.g., EKG, echocardiography), procedures (e.g., cardiac catheterization, pacemaker insertion), and ongoing cardiovascular care. We optimize revenue by adhering to cardiology-specific coding and documentation requirements.",
            link: "Link to Cardiology services",
            image: "./assets/specialities_we_offer/5. Cardiology billingcaresolutions.com.svg"
        },
        {
            title: "Physical Therapy",
            description: "We specialize in billing for physical therapy practices, handling claims for therapeutic exercises, manual therapy, modalities (e.g., ultrasound, electrical stimulation), and functional assessments. Our services focus on maximizing reimbursements and reducing billing errors.",
            link: "Link to Physical Therapy services",
            image: "./assets/specialities_we_offer/6. Physical Therapy billingcaresolution.com.svg"
        },
        {
            title: "Plastic Surgery",
            description: "Our billing services for plastic surgery practices cover elective and reconstructive procedures, cosmetic surgeries, and related services such as consultations and post-operative care. We ensure accurate coding and compliance with payer policies to optimize revenue.",
            link: "Link to Plastic Surgery services",
            image: "./assets/specialities_we_offer/7. Plastic Surgery billingcaresolutions.com.svg"
        },
        {
            title: "Primary Care",
            description: "We offer billing services tailored for primary care providers, managing claims for preventive care, acute illnesses, chronic disease management, vaccinations, and routine screenings. Our services aim to streamline revenue cycles and improve financial outcomes.",
            link: "Link to Primary Care services",
            image: "./assets/specialities_we_offer/8. Primary Care billingcaresolutions.com.svg"
        },
        {
            title: "General Practice",
            description: "Our billing services cater to general practice providers, handling a wide range of medical services including routine exams, minor procedures, acute and chronic disease management, and diverse patient needs. We focus on efficient billing processes to enhance revenue and practice efficiency.",
            link: "Link to General Practice services",
            image: "./assets/specialities_we_offer/9. General Practice billingcaresolutions.com.svg"
        }
    ];

    return (
        <div className='flex flex-col justify-center p-10'>
            <div className='flex flex-row justify-center items-center space-x-3 text-secondary font-custom text-3xl font-medium mb-10'>
                <div className='bg-secondary w-[2rem] h-[0.2rem]'></div>
                    <p>Specialities We Offer</p>
                <div className='bg-secondary w-[2rem] h-[0.2rem]'></div>
            </div>
            <div className='flex flex-wrap justify-around'>
                {data.map((item) => (
                    <SpecialityCard data={item} />
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <button className='px-6 py-3 bg-primary rounded-2xl text-white'>Explore More</button>

            </div>
        </div>
    )
}

export default SpecialitiesWeOffer