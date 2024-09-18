import React from 'react'
import Hero from './../sections/Services/Hero';
import Header from './../sections/Header';
import SpecialityCard from '../components/Specialities/SpecialityCard';
import Footer from './../sections/Footer';

function Specialities() {
    const data = [
        { title: "Allergy and Immunology", image: "", icon: "" },
        { title: "Anesthesiology", image: "", icon: "" },
        { title: "Behavioral Health", image: "", icon: "" },
        { title: "Cardiology", image: "", icon: "" },
        { title: "Chiropractic", image: "", icon: "" },
        { title: "Critical Care Medicine", image: "", icon: "" },
        { title: "Dermatology", image: "", icon: "" },
        { title: "Doula / Midwife", image: "", icon: "" },
        { title: "Emergency Medicine", image: "", icon: "" },
        { title: "Endocrinology", image: "", icon: "" },
        { title: "Family Medicine", image: "", icon: "" },
        { title: "Gastroenterology", image: "", icon: "" },
        { title: "General Surgery", image: "", icon: "" },
        { title: "Geriatrics", image: "", icon: "" },
        { title: "Infectious Diseases", image: "", icon: "" },
        { title: "Internal Medicine", image: "", icon: "" },
        { title: "Nephrology", image: "", icon: "" },
        { title: "Neurology", image: "", icon: "" },
        { title: "Neurosurgery", image: "", icon: "" },
        { title: "Obstetrics and Gynecology (OB/GYN)", image: "", icon: "" },
        { title: "Oncology", image: "", icon: "" },
        { title: "Ophthalmology", image: "", icon: "" },
        { title: "Orthopedics", image: "", icon: "" },
        { title: "Otolaryngology (ENT)", image: "", icon: "" },
        { title: "Pain Management", image: "", icon: "" },
        { title: "Pathology", image: "", icon: "" },
        { title: "Pediatrics", image: "", icon: "" },
        { title: "Physical Medicine and Rehabilitation", image: "", icon: "" },
        { title: "Physical Therapy", image: "", icon: "" },
        { title: "Plastic Surgery", image: "", icon: "" },
        { title: "Podiatry", image: "", icon: "" },
        { title: "Psychiatry", image: "", icon: "" },
        { title: "Pulmonology", image: "", icon: "" },
        { title: "Radiology", image: "", icon: "" },
        { title: "Rheumatology", image: "", icon: "" },
        { title: "Sleep Medicine", image: "", icon: "" },
        { title: "Urgent Care", image: "", icon: "" },
        { title: "Urology", image: "", icon: "" },
        { title: "Vascular Surgery", image: "", icon: "" }
    ]

    return (
        <>
            <Header />
            <Hero />
            <div className='w-full flex flex-wrap justify-center gap-4 my-10 transition-all duration-300 ease-in-out container mx-auto'>
                {data.map((item) => (
                    <SpecialityCard data={item} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Specialities