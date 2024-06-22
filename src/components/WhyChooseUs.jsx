import React from 'react'
import ServicesCard from './ServicesCard';

function WhyChooseUs() {
    const data = [
        {
            id: 1,
            title: "15 Minutes Free Consultancy",
            img: "./assets/img.jpg",
            description: ""
        },
        {
            id: 2,
            title: "Free Audit",
            img: "./assets/img.jpg",
            description: ""
        },
        {
            id: 3,
            title: "Practice Help Plan",
            img: "./assets/img.jpg",
            description: ""
        },
        {
            id: 4,
            title: "Error Free Billing",
            img: "./assets/img.jpg",
            description: ""
        },
        {
            id: 5,
            title: "Revenue Boost",
            img: "./assets/img.jpg",
            description: "45%"
        },
        {
            id: 6,
            title: "Claims Success Rate",
            img: "./assets/img.jpg",
            description: "99%"
        },
        {
            id: 7,
            title: "Fast Revenue Restoration",
            img: "./assets/img.jpg",
            description: "20 Days"
        },
        {
            id: 8,
            title: "Rapid Response Time  ",
            img: "./assets/img.jpg",
            description: "24/7"
        },
    ];

    return (
        <>
            <div className='w-full flex flex-col md:flex-row justify-between p-10 items-center'>
                <div className='w-full md:w-2/4 flex flex-col p-10 space-y-4'>
                    <p className='text-3xl'>Why Choose Billing Care Solutions?</p>
                    <p className='mt-5 text-justify'>
                        We provide extensive Medical Billing and Credentialing Services tailored to a wide range of medical specialties, including behavioral health, dental care, and various medical disciplines such as Physiotherapy, Orthopedics, Dermatology, Neurology, Psychology, Cardiology, Oncology, Family Practice, Internal Medicine, Surgeons, Allergy and Immunology, Neonatology, Pathology, Urology, Anesthesiology, Endocrinology, Gynecology, Pediatrics, Radiology, Psychiatry, Pulmonology, Gastroenterology, Rheumatology, Ophthalmology, Nephrology, Infectious Diseases, Emergency Medicine, Hematology, Plastic Surgery, Geriatrics, Otorhinolaryngology (ENT), Dentistry, Podiatry, Chiropractic Medicine, Andrology and more. Our services offer both affordability and flexibility, ensuring seamless integration into your practice's workflow. Moreover, we prioritize patient care through our dedicated Patient Support System, enabling you to concentrate on delivering exceptional healthcare. Experience the advantages of our weekly Practice Health Presentations, which provide insightful demonstrations of your practice's ongoing health and performance metrics.
                    </p>
                    <p className='text-3xl'>Why Do Healthcare Professionals Choose Our Medical Billing Services?</p>
                    <div className='flex flex-wrap justify-around items-center'>
                        {data.map((item) => (
                            <ServicesCard data={item} />
                        ))}

                    </div>
                </div>
                <img src="./assets/img.jpg" alt="" className='w-full md:w-2/4 py-10 lg:py-0 object-fit h-max' />
            </div>
        </>
    )
}

export default WhyChooseUs