import React from 'react'
import SpecialityCard from './../../components/Home/SpecialityCard';
import Heading from './../../components/Heading';
import { Link } from 'react-router-dom';



function SpecialitiesWeOffer() {
    
    const data = [
        {
            title: "Durable Medical Equipment (DME)",
            description: "We manage billing services for DME providers, focusing on coding for wheelchairs (K0001-K0108), oxygen supplies (E0424-E0486), and prosthetics (L5000-L9900). Our expertise ensures reimbursements from Medicare and insurers. Staying updated on DMEPOS competitive bidding programs and regulatory changes helps us maximize reimbursements and ensure compliance for durable medical equipment providers.",
            link: "Link to DME services",
            image: "/assets/specialities_we_offer/1. DME billingcaresolutions.com.svg"
        },
        {
            title: "Mental Health Billing",
            description: "Our specialized billing services for mental health practices cover therapy sessions (90832-90838), psychiatric evaluations (90791-90792), and medication management (99211-99215). We ensure accurate coding for mental health assessments (96150-96155) and maintain compliance with regulations. Our tailored billing strategies optimize revenue and help mental health providers manage their claims effectively and efficiently.",
            link: "Link to Mental Health services",
            image: "/assets/specialities_we_offer/2. Mental Health billingcaresolutions.com.svg"
        },
        {
            title: "Radiology Billing",
            description: "We handle billing for radiology practices, managing imaging procedures like X-rays (70000-79999), MRIs (70336-70559), and CT scans (70450-70498). Our team ensures precise coding for both diagnostic interpretations and technical components (76377 for 3D rendering). By following radiology-specific guidelines, we help practices maximize reimbursements and streamline their revenue cycle operations.",
            link: "Link to Radiology services",
            image: "/assets/specialities_we_offer/3. Radiology billingcaresolutions.com.svg"
        },
        {
            title: "Internal Medicine Billing",
            description: "Our services for internal medicine billing include office visits (99201-99215), preventive care (99381-99397), and chronic disease management (99490-99491). We also manage coding for EKGs (93000-93010) and pulmonary function tests (94010-94799). Through accurate billing and adherence to internal medicine coding guidelines, we help practices improve financial performance and optimize revenue.",
            link: "Link to Internal Medicine services",
            image: "/assets/specialities_we_offer/4. Internal Medicine billingcaresolutions.com.svg"
        },
        {
            title: "Cardiology Billing",
            description: "We provide billing services for cardiology practices, managing diagnostic tests like EKGs (93000-93010) and echocardiography (93303-93355). Our expertise also covers cardiac catheterization (93451-93572) and cardiovascular care (99201-99215, 99291-99292). With cardiology-specific coding and documentation, we ensure maximum reimbursements and compliance for cardiology practices.",
            link: "Link to Cardiology services",
            image: "/assets/specialities_we_offer/5. Cardiology billingcaresolutions.com.svg"
        },
        {
            title: "Physical Therapy Billing",
            description: "Our billing services for physical therapy include coding for therapeutic exercises (97110), manual therapy (97140), and modalities (97010-97039). We also handle evaluations (97161-97163), re-evaluations (97164), and functional assessments (97750). By following physical therapy billing guidelines, we help practices optimize revenue and improve their financial processes efficiently.",
            link: "Link to Physical Therapy services",
            image: "/assets/specialities_we_offer/6. Physical Therapy billingcaresolution.com.svg"
        },
        {
            title: "Plastic Surgery Billing",
            description: "We specialize in billing for plastic surgery practices, handling reconstructive surgeries (15002-15261), breast reconstruction (19357-19396), and skin grafts (15100-15278). Our expertise also covers cosmetic procedures, including facial surgeries (15820-15839). Through accurate coding and compliance with regulations, we help plastic surgery practices optimize revenue and manage their billing effectively.",
            link: "Link to Plastic Surgery services",
            image: "/assets/specialities_we_offer/7. Plastic Surgery billingcaresolutions.com.svg"
        },
        {
            title: "Primary Care Billing",
            description: "Our primary care billing services cover preventive care (99381-99397), acute illnesses (99201-99215), and chronic disease management (99490-99491). We also manage coding for vaccinations (90460-90474) and routine screenings such as occult blood tests (82270). Our goal is to maximize revenue for primary care providers while ensuring accurate coding and regulatory compliance.",
            link: "Link to Primary Care services",
            image: "/assets/specialities_we_offer/8. Primary Care billingcaresolutions.com.svg"
        },
        {
            title: "General Practice Billing",
            description: "Our billing services for general practice cover routine exams (99201-99215), minor procedures (10000-69990), and chronic disease management (99490-99491). We ensure compliance with industry guidelines and focus on optimizing revenue through accurate billing processes. By offering tailored solutions, we help general practice providers improve their financial performance and streamline their billing operations.",
            link: "Link to General Practice services",
            image: "/assets/specialities_we_offer/9. General Practice billingcaresolutions.com.svg"
        }
    ];

    return (
        <div className='flex flex-col justify-center p-10'>
            <Heading data="Specialities We Offer" />

            <div className='flex flex-wrap justify-around'>
                {data.map((item) => (
                    <SpecialityCard data={item} />
                ))}
            </div>
            <div className='flex justify-center items-center mt-6'>
                <Link to="/specialities" className='bg-secondary text-white px-4 py-3 rounded-xl hover:bg-primary hover:transition-all hover:duration-300 hover:ease-in-out'>Explore More</Link>
            </div>
        </div>
    )
}

export default SpecialitiesWeOffer