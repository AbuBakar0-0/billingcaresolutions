
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import HeadingLine from '../HeadingLine';
import { Link } from 'react-router-dom';

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

function ContactForm() {
    const [phone, setPhone] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [message, setMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [otherText, setOtherText] = useState("");

    const handleCheckbox = () => setCheckbox(!checkbox);

    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/\D/g, "");
        if (input.length > 3 && input.length <= 6) {
            input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
        } else if (input.length > 6) {
            input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
        }
        setPhone(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!lastName.trim() || !firstName.trim() || !phone.trim() || !email.trim()) {
            alert("Please fill in all required fields (marked with *)");
            return;
        }

        const serviceValue = selectedOption === "others" ? otherText : selectedOption;

        const templateParams = {
            to_email: "billingcaresolutions@gmail.com",
            lastName: lastName,
            firstName: firstName,
            phone: phone,
            email: email,
            service: serviceValue,
            specialty: selectedSpecialty,
            state: selectedState,
            message: message,
            optIn: checkbox ? "Yes" : "No",
        };

        emailjs
            .send(
                "service_5qe514z",
                "template_m4vazqe",
                templateParams,
                "J8mPA0rHkN5D87yHl"
            )
            .then((response) => {
                alert("Message sent successfully!");
                setLastName("");
                setFirstName("");
                setPhone("");
                setEmail("");
                setSelectedOption("");
                setOtherText("");
                setSelectedSpecialty("");
                setSelectedState("");
                setMessage("");
                setCheckbox(false);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Error sending message. Please try again.");
            });
    };

    return (
        <>
            <HeadingLine data="Contact Us" />
            <form onSubmit={handleSubmit} className="w-full flex flex-col justify-between items-center gap-3">
                <div className="w-full flex flex-col justify-between items-center text-black gap-3">
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Last Name *"
                        required
                    />
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="First Name *"
                        required
                    />
                    <input
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Phone Number *"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Email *"
                        required
                    />
                    <select 
                        value={selectedOption} 
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary'
                    >
                        <option value="">Select Service</option>
                        {services.map((item) => (
                            <option key={item.title} value={item.title}>{item.title}</option>
                        ))}
                        <option value="others">Others</option>
                    </select>
                    {selectedOption === "others" && (
                        <input
                            className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary'
                            type="text"
                            value={otherText}
                            onChange={(e) => setOtherText(e.target.value)}
                            placeholder='Please Specify'
                        />
                    )}
                    <select 
                        value={selectedSpecialty} 
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                        className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary'
                    >
                        <option value="">Select Speciality</option>
                        {speciality.map((item) => (
                            <option key={item.title} value={item.title}>{item.title}</option>
                        ))}
                    </select>
                    <select 
                        value={selectedState} 
                        onChange={(e) => setSelectedState(e.target.value)}
                        className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary'
                    >
                        <option value="">Select State</option>
                        {state.map((item) => (
                            <option key={item.title} value={item.title}>{item.title}</option>
                        ))}
                    </select>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={9}
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Describe your message here..."
                    />
                    <div className='w-full flex gap-4 justify-start'>
                        <input 
                            type="checkbox" 
                            checked={checkbox} 
                            onChange={handleCheckbox} 
                        />
                        <span>Opt-in to receive text message updates</span>
                    </div>
                    {checkbox && (
                        <div className='text-secondary'>
                            By Checking this, you agree to &nbsp;
                            <Link to='/termsandconditions' className='text-primary underline'>
                                terms & conditions
                            </Link> & &nbsp;
                            <Link to='/privacypolicy' className='text-primary underline'>
                                privacy policy
                            </Link> of Billing Care Solutions
                        </div>
                    )}
                </div>
                <div className="w-full">
                    <button
                        type="submit"
                        className="px-3 py-2 rounded-2xl w-full bg-secondary text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;
