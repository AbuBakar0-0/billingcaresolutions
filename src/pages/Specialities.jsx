import React from 'react'
import Hero from './../sections/Services/Hero';
import Header from './../sections/Header';
import SpecialityCard from '../components/Specialities/SpecialityCard';
import Footer from './../sections/Footer';

function Specialities() {
    const data = [
        { title: "Anesthesiology", image: "", icon: "" },
        { title: "Behavioral Health", image: "", icon: "" },
        { title: "Cardiology", image: "", icon: "" },
        { title: "Chiropractic", image: "", icon: "" },
        { title: "Dental", image: "", icon: "" },
        { title: "Dermatology", image: "", icon: "" },
        { title: "DME", image: "", icon: "" },
        { title: "Emergency Medicine", image: "", icon: "" },
        { title: "Endocrinology", image: "", icon: "" },
        { title: "Family Medicine", image: "", icon: "" },
        { title: "Gastroenterology", image: "", icon: "" },
        { title: "General Surgery", image: "", icon: "" },
        { title: "Gynecology", image: "", icon: "" },
        { title: "Geriatrics", image: "", icon: "" },
        { title: "Home Health", image: "", icon: "" },
        { title: "Internal Medicine", image: "", icon: "" },
        { title: "Laboratory", image: "", icon: "" },
        { title: "Neurology", image: "", icon: "" },
        { title: "Neurosurgery", image: "", icon: "" },
        { title: "Obstetrics and Gynecology (OB/GYN)", image: "", icon: "" },
        { title: "Ophthalmology", image: "", icon: "" },
        { title: "Oncology", image: "", icon: "" },
        { title: "Orthopedics", image: "", icon: "" },
        { title: "Otolaryngology (ENT)", image: "", icon: "" },
        { title: "Pain Management", image: "", icon: "" },
        { title: "Pediatrics", image: "", icon: "" },
        { title: "Physical Therapy", image: "", icon: "" },
        { title: "Plastic Surgery", image: "", icon: "" },
        { title: "Podiatry", image: "", icon: "" },
        { title: "Psychiatry", image: "", icon: "" },
        { title: "Pulmonology", image: "", icon: "" },
        { title: "Radiology", image: "", icon: "" },
        { title: "Rheumatology", image: "", icon: "" },
        { title: "Urology", image: "", icon: "" },
        { title: "Vascular Surgery", image: "", icon: "" },
        { title: "Allergy and Immunology", image: "", icon: "" },
        { title: "Critical Care Medicine", image: "", icon: "" },
        { title: "Infectious Diseases", image: "", icon: "" },
        { title: "Nephrology", image: "", icon: "" },
        { title: "Physical Medicine and Rehabilitation", image: "", icon: "" },
        { title: "Sleep Medicine", image: "", icon: "" },
        { title: "Urgent Care", image: "", icon: "" },
        { title: "Doula / Midwife", image: "", icon: "" }
      ];

    return (
        <>
            <Header />
            <div className='bg-secondary text-white'>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <p className='w-full uppercase text-2xl font-semibold'>Quality First</p>
                        <p className='w-full uppercase text-6xl font-bold'>BCS SERVICES</p>
                        <p className='text-justify'>We understand that every healthcare practice is different, so we
                            work closely with our clients to develop bespoke solutions that
                            help them achieve their goals. Whether you want to improve
                            your practice's financial performance, increase patient
                            satisfaction, or streamline your operations, our comprehensive
                            healthcare management services can help you achieve it.</p>
                        <button className='px-3 py-2 rounded-2xl md:w-1/2 lg:w-1/4  border-[1px] bg-primary p-4 text-white'>Talk to an Expert</button>
                    </div>
                </div>
            </div>
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