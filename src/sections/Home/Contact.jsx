import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        company_name: '',
        last_name: '',
        first_name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [bgImage, setBgImage] = useState("");

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const { data: bgData, error: bgError } = await supabase
                    .from("background_images")
                    .select("*")
                    .eq('type', "talkToExpert")
                    .single();

                if (bgError) {
                    console.error("Error fetching slides:", bgError.message);
                } else {
                    setBgImage(bgData?.background_image || "");
                }
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d+]/g, '');
        if (!phoneNumber.startsWith('+1')) return '+1';
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 5) return phoneNumber;
        if (phoneNumberLength < 8) {
            return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5)}`;
        }
        if (phoneNumberLength < 12) {
            return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8)}`;
        }
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 12)}`;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'phone' ? formatPhoneNumber(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailParams = {
            company_name: formData.company_name,
            last_name: formData.last_name,
            first_name: formData.first_name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
        };

        emailjs.send("service_5qe514z", "template_b4jumni", emailParams, "J8mPA0rHkN5D87yHl")
            .then((response) => {
                alert("Email sent successfully!");
                setFormData({
                    company_name: '',
                    last_name: '',
                    first_name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                alert("Error sending email. Please try again.");
            });
    };

    return (
        <div className='flex flex-col gap-3 p-6 mx-16 rounded-lg shadow-lg mt-5 border-4 border-primary' 
            style={{ backgroundImage: `url("${bgImage}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <p className='text-2xl font-semibold text-secondary underline'>Schedule a Demo</p>
            <p className='font-semibold text-sm lg:text-md'>We're available 24/7 - Schedule a call with one of our experts now.</p>
            <form onSubmit={handleSubmit} className='flex flex-col justify-around gap-4'>
                <div className='flex flex-wrap justify-between gap-4'>
                    <input type="text" name='company_name' value={formData.company_name} onChange={handleInputChange}
                        className='px-3 py-2 border-2 border-gray-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-3/12' 
                        placeholder='Practice or Company Name*' required />
                    
                    <input type="text" name='last_name' value={formData.last_name} onChange={handleInputChange}
                        className='px-3 py-2 border-2 border-gray-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' 
                        placeholder='Last Name*' required />

                    <input type="text" name='first_name' value={formData.first_name} onChange={handleInputChange}
                        className='px-3 py-2 border-2 border-gray-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' 
                        placeholder='First Name*' required />

                    <input type="text" name='phone' value={formData.phone} onChange={handleInputChange}
                        className='px-3 py-2 border-2 border-gray-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' 
                        placeholder='+1 (555) 555-1234*' required />

                    <input type="email" name='email' value={formData.email} onChange={handleInputChange}
                        className='px-3 py-2 border-2 border-gray-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' 
                        placeholder='Email*' required />
                </div>
                <div className='flex flex-wrap justify-between gap-4'>
                    <input type="text" name='message' value={formData.message} onChange={handleInputChange}
                        className='px-3 py-2 border-2 border-gray-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-[81.2%]' 
                        placeholder='Message*' required />

                    <button type="submit" className='px-3 py-2 rounded-2xl w-full lg:w-2/12 animate-glow-border border-2 bg-primary p-4 text-white'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
