import React, { useState } from 'react'
import HeadingLine from '../HeadingLine';

function ContactForm() {
    const [phone, setPhone] = useState("");

    // Function to format the phone number as the user types
    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
        if (input.length > 3 && input.length <= 6) {
            input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
        } else if (input.length > 6) {
            input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        }
        setPhone(input);
    };

    const state = [
        { title: "Alabama" },
        { title: "Alaska" },
        { title: "Arizona" },
        { title: "Arkansas" },
        { title: "California" },
        { title: "Colorado" },
        { title: "Connecticut" },
        { title: "Delaware" },
        { title: "Florida" },
        { title: "Georgia" },
        { title: "Hawaii" },
        { title: "Idaho" },
        { title: "Illinois" },
        { title: "Indiana" },
        { title: "Iowa" },
        { title: "Kansas" },
        { title: "Kentucky" },
        { title: "Louisiana" },
        { title: "Maine" },
        { title: "Maryland" },
        { title: "Massachusetts" },
        { title: "Michigan" },
        { title: "Minnesota" },
        { title: "Mississippi" },
        { title: "Missouri" },
        { title: "Montana" },
        { title: "Nebraska" },
        { title: "Nevada" },
        { title: "New Hampshire" },
        { title: "New Jersey" },
        { title: "New Mexico" },
        { title: "New York" },
        { title: "North Carolina" },
        { title: "North Dakota" },
        { title: "Ohio" },
        { title: "Oklahoma" },
        { title: "Oregon" },
        { title: "Pennsylvania" },
        { title: "Rhode Island" },
        { title: "South Carolina" },
        { title: "South Dakota" },
        { title: "Tennessee" },
        { title: "Texas" },
        { title: "Utah" },
        { title: "Vermont" },
        { title: "Virginia" },
        { title: "Washington" },
        { title: "West Virginia" },
        { title: "Wisconsin" },
        { title: "Wyoming" }
    ];

    const speciality = [
        {
            title: "Allergy and Immunology"
        },
        {
            title: "Anesthesiology"
        },
        {
            title: "Behavioral Health"
        },
        {
            title: "Cardiology"
        },
        {
            title: "Chiropractic"
        },
        {
            title: "Critical Care Medicine"
        },
        {
            title: "Dental"
        },
        {
            title: "Dermatology"
        },
        {
            title: "DME"
        },
        {
            title: "Doula / Midwife"
        },
        {
            title: "Emergency Medicine"
        },
        {
            title: "Endocrinology"
        },
        {
            title: "Family Medicine"
        },
        {
            title: "Gastroenterology"
        },
        {
            title: "General Surgery"
        },
        {
            title: "Gynecology"
        },
        {
            title: "Geriatrics"
        },
        {
            title: "Home Health"
        },
        {
            title: "Infectious Diseases"
        },
        {
            title: "Internal Medicine"
        },
        {
            title: "Laboratory"
        },
        {
            title: "Nephrology"
        },
        {
            title: "Neurology"
        },
        {
            title: "Neurosurgery"
        },
        {
            title: "Obstetrics and Gynecology (OB/GYN)"
        },
        {
            title: "Ophthamology"
        },
        {
            title: "Oncology"
        },
        {
            title: "Orthopedics"
        },
        {
            title: "Otolaryngology (ENT)"
        },
        {
            title: "Pain Management"
        },
        {
            title: "Pediatrics"
        },
        // {
        //     title: "Physical Medicine and Rehabilitation",

        // },
        {
            title: "Physical Therapy"
        },
        {
            title: "Plastic Surgery"
        },
        {
            title: "Podiatry"
        },
        {
            title: "Psychiatry"
        },
        {
            title: "Pulmonology"
        },
        {
            title: "Radiology"
        },
        {
            title: "Rheumatology"
        },
        {
            title: "Sleep Medicine"
        },
        {
            title: "Urgent Care"
        },
        {
            title: "Urology"
        },
        {
            title: "Vascular Surgery"
        }
    ];

    const services = [
        {
            title: "Medical Billing & Coding",
        },
        {
            title: "Credentialing Services",
        },
        {
            title: "Revenue Cycle Management",
        },
        {
            title: "Billing and Coding Audits",
        },
        {
            title: "Reporting and Analytics",
        },
        {
            title: "AR & Denial Management",
        },
        {
            title: "VOB & Prior Authorization",
        },
        {
            title: "Consultation Services",
        },
        {
            title: "Compliance Assistance",
        },
        {
            title: "Patient Help Support",
        },
    ];


    const [selectedOption, setSelectedOption] = useState("");
    const [otherText, setOtherText] = useState("");

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleOtherTextChange = (e) => {
        setOtherText(e.target.value);
    };

    return (
        <>
            <HeadingLine data="Contact Us" />
            <form className="w-full flex flex-col justify-between items-center gap-3">
                <div className="w-full flex flex-col justify-between items-center text-black gap-3">
                    <input
                        type="text"
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="First Name"
                        required
                    />
                    <input
                        type="text"
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Last Name"
                        required
                    />
                    <input
                        type="text"
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Phone Number"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    <input
                        type="email"
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Email"
                        required
                    />
                    <select value={selectedOption} onChange={handleSelectChange} name="service" id="service" className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary overflow-scroll'>
                        <option value="" className='text-gray-400'>Select Service</option>
                        {services.map((item) => (
                            <option value={item.title}>{item.title}</option>
                        ))}
                        <option value="others">Others</option>
                    </select>
                    {selectedOption === "others" && (
                        <input
                            className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary'
                            type="text"
                            id="otherText"
                            value={otherText}
                            onChange={handleOtherTextChange}
                            placeholder='Please Specify'
                        />
                    )}
                    <select name="service" id="service" className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary overflow-scroll'>
                        <option value="" className='text-gray-400'>Select Speciality</option>
                        {speciality.map((item) => (
                            <option value={item.title}>{item.title}</option>
                        ))}
                    </select>
                    <select name="state" id="state" className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary overflow-scroll'>
                        <option value="" className='text-gray-400'>Select State</option>
                        {state.map((item) => (
                            <option value={item.title}>{item.title}</option>
                        ))}
                    </select>
                    <textarea
                        rows={9}
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Describe your message here..."
                    />
                </div>
                <div className="w-full">
                    <input
                        type="submit"
                        className="px-3 py-2 rounded-2xl w-full bg-secondary text-white"
                        value="Submit"
                    />
                </div>
            </form>
        </>
    )
}

export default ContactForm