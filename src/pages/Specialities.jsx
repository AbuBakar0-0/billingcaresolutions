import React, { useEffect } from 'react'
import Header from './../sections/Header';
import SpecialityCard from '../components/Specialities/SpecialityCard';
import Footer from './../sections/Footer';
import Hero from '../sections/Specialities/Hero';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function Specialities() {
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, [])

    const data = [
        {
            title: "Allergy and Immunology",
            icon: "./assets/specialities/icons/Allergy and Immunology.svg",
            img: "./assets/specialities/images/AllergyandImmunology.webp"
        },
        {
            title: "Anesthesiology",
            icon: "./assets/specialities/icons/Anesthesiology.svg",
            img: "./assets/specialities/images/Anesthesiology.webp"
        },
        {
            title: "Behavioral Health",
            icon: "./assets/specialities/icons/Behavioral Health.svg",
            img: "./assets/specialities/images/BehavioralHealth.webp"
        },
        {
            title: "Cardiology",
            icon: "./assets/specialities_we_offer/5. Cardiology billingcaresolutions.com.svg",
            img: "./assets/specialities/images/cardiology.webp"
        },
        {
            title: "Chiropractic",
            icon: "./assets/specialities/icons/Chiropractic.svg",
            img: "./assets/specialities/images/chiropractic.webp"
        },
        {
            title: "Critical Care Medicine",
            icon: "./assets/specialities/icons/Critical Care Medicine.svg",
            img: "./assets/specialities/images/CriticalCareMedicine.webp"
        },
        {
            title: "Dental",
            icon: "./assets/specialities/icons/Dental.svg",
            img: "./assets/specialities/images/Dental.webp"
        },
        {
            title: "Dermatology",
            icon: "./assets/specialities/icons/Dermatology.svg",
            img: "./assets/specialities/images/dermatology.webp"
        },
        {
            title: "DME",
            icon: "./assets/specialities_we_offer/1. DME billingcaresolutions.com.svg",
            img: "./assets/specialities/images/DME.webp"
        },
        {
            title: "Doula / Midwife",
            icon: "./assets/specialities/icons/Doula.svg",
            img: "./assets/specialities/images/Doula.webp"
        },
        {
            title: "Emergency Medicine",
            icon: "./assets/specialities/icons/Emergency Medicine.svg",
            img: "./assets/specialities/images/EmergencyMedicine.webp"
        },
        {
            title: "Endocrinology",
            icon: "./assets/specialities/icons/Endocrinology.svg",
            img: "./assets/specialities/images/Endocrinology.webp"
        },
        {
            title: "Family Medicine",
            icon: "./assets/specialities/icons/Family Medicine.svg",
            img: "./assets/specialities/images/familypractice.webp"
        },
        {
            title: "Gastroenterology",
            icon: "./assets/specialities/icons/Gastroenterology.svg",
            img: "./assets/specialities/images/Gastroentrology.webp"
        },
        {
            title: "General Surgery",
            icon: "./assets/specialities/icons/General Surgery.svg",
            img: "./assets/specialities/images/generalsurgery.webp"
        },
        {
            title: "Gynecology",
            icon: "./assets/specialities/icons/Gynecology.svg",
            img: "./assets/specialities/images/gynecology.webp"
        },
        {
            title: "Geriatrics",
            icon: "./assets/specialities/icons/Geriatrics.svg",
            img: "./assets/specialities/images/Geriatrics.webp"
        },
        {
            title: "Home Health",
            icon: "./assets/specialities/icons/Home Health.svg",
            img: "./assets/specialities/images/homehealth.webp"
        },
        {
            title: "Infectious Diseases",
            icon: "./assets/specialities/icons/Infectious Diseases.svg",
            img: "./assets/specialities/images/InfectiousDiseases.webp"
        },
        {
            title: "Internal Medicine",
            icon: "./assets/specialities_we_offer/4. Internal Medicine billingcaresolutions.com.svg",
            img: "./assets/specialities/images/internalmedicine-1.webp"
        },
        {
            title: "Laboratory",
            icon: "./assets/specialities/icons/Laboratory.svg",
            img: "./assets/specialities/images/laboratory.webp"
        },
        {
            title: "Nephrology",
            icon: "./assets/specialities/icons/nephrology.svg",
            img: "./assets/specialities/images/nephrology.webp"
        },
        {
            title: "Neurology",
            icon: "./assets/specialities/icons/Neurology.svg",
            img: "./assets/specialities/images/Neurology.webp"
        },
        {
            title: "Neurosurgery",
            icon: "./assets/specialities/icons/Neurosurgery.svg",
            img: "./assets/specialities/images/Neurosurgery.webp"
        },
        {
            title: "Obstetrics and Gynecology (OB/GYN)",
            icon: "./assets/specialities/icons/Obstetrics and Gynecology.svg",
            img: "./assets/specialities/images/ObstetricsandGynecology.webp"
        },
        {
            title: "Ophthamology",
            icon: "./assets/specialities/icons/Ophthalmology.svg",
            img: "./assets/specialities/images/ophthamology.webp"
        },
        {
            title: "Oncology",
            icon: "./assets/specialities/icons/oncology.svg",
            img: "./assets/specialities/images/oncology.webp"
        },
        {
            title: "Orthopedics",
            icon: "./assets/specialities/icons/Orthopedics.svg",
            img: "./assets/specialities/images/orthopedic.webp"
        },
        {
            title: "Otolaryngology (ENT)",
            icon: "./assets/specialities/icons/Otolaryngology.svg",
            img: "./assets/specialities/images/otolaryngology.webp"
        },
        {
            title: "Pain Management",
            icon: "./assets/specialities/icons/Pain Management.svg",
            img: "./assets/specialities/images/painmanagement.webp"
        },
        {
            title: "Pediatrics",
            icon: "./assets/specialities/icons/Pediatrics.svg",
            img: "./assets/specialities/images/pediatrics.webp"
        },
        // {
        //     title: "Physical Medicine and Rehabilitation",
        //     icon: "./assets/specialities/icons/Physical Medicine and Rehabilitation.svg",
        //     img: "./assets/specialities/images/PhysicalMedicineandRehabilitation.webp"
        // },
        {
            title: "Physical Therapy",
            icon: "./assets/specialities_we_offer/6. Physical Therapy billingcaresolution.com.svg",
            img: "./assets/specialities/images/physicaltherapy.webp"
        },
        {
            title: "Plastic Surgery",
            icon: "./assets/specialities_we_offer/7. Plastic Surgery billingcaresolutions.com.svg",
            img: "./assets/specialities/images/plasticsurgery.webp"
        },
        {
            title: "Podiatry",
            icon: "./assets/specialities/icons/Podiatry.svg",
            img: "./assets/specialities/images/Podiatry.webp"
        },
        {
            title: "Psychiatry",
            icon: "./assets/specialities/icons/Psychiatry.svg",
            img: "./assets/specialities/images/Psychiatry.webp"
        },
        {
            title: "Pulmonology",
            icon: "./assets/specialities/icons/Pulmonology.svg",
            img: "./assets/specialities/images/Pulmonology.webp"
        },
        {
            title: "Radiology",
            icon: "./assets/specialities_we_offer/3. Radiology billingcaresolutions.com.svg",
            img: "./assets/specialities/images/radiology.webp"
        },
        {
            title: "Rheumatology",
            icon: "./assets/specialities/icons/Rheumatology.svg",
            img: "./assets/specialities/images/rheumatology.webp"
        },
        {
            title: "Sleep Medicine",
            icon: "./assets/specialities/icons/Sleep Medicine.svg",
            img: "./assets/specialities/images/sleepmedicine.webp"
        },
        {
            title: "Urgent Care",
            icon: "./assets/specialities/icons/Urgent Care.svg",
            img: "./assets/specialities/images/urgentcare.webp"
        },
        {
            title: "Urology",
            icon: "./assets/specialities/icons/Urology.svg",
            img: "./assets/specialities/images/urology.webp"
        },
        {
            title: "Vascular Surgery",
            icon: "./assets/specialities/icons/Vascular Surgery.svg",
            img: "./assets/specialities/images/vascularsurgery.webp"
        }
    ];


    return (
        <>
            {/* <Helmet>
                <title>Specialities - Billing Care Solutions</title>
                <meta name="description" content="At Billing Care Solutions, our specialties lie in delivering precise, customized services that meet the specific needs of healthcare practices. Our deep industry knowledge, paired with cutting-edge solutions, allows us to address critical areas of healthcare management, ensuring optimized revenue and smooth operations." />
                <meta property="og:title" content="Specialities - Billing Care Solutions" />
                <meta property="og:description" content="At Billing Care Solutions, our specialties lie in delivering precise, customized services that meet the specific needs of healthcare practices. Our deep industry knowledge, paired with cutting-edge solutions, allows us to address critical areas of healthcare management, ensuring optimized revenue and smooth operations." />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet> */}
            <Header />
            <Hero />
            <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                {data.map((item, index) => (
                    <Link to={`/specialitiesDetails?index=${index}`}>
                        <SpecialityCard data={item} />
                    </Link>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Specialities