import React, { useState } from 'react';

function Contact() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const formatPhoneNumber = (value) => {
        if (!value) return value;

        // Remove all non-numeric characters except the plus sign
        const phoneNumber = value.replace(/[^\d+]/g, '');

        // If it doesn't start with +1, add it
        if (!phoneNumber.startsWith('+1')) {
            return '+1';
        }

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
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedPhoneNumber);
    };

    return (
        <>
            <div className='flex flex-col gap-3 p-6 mx-16 rounded-lg shadow-lg mt-5 border-4 border-primary' style={{ backgroundImage: `url("./assets/Talk to expert billingcaresolutions.com.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <p className='text-2xl font-semibold text-secondary underline'>Schedule a Demo</p>
                <p className='font-semibold text-sm lg:text-md'>We're available 24/7 - Schedule a call with one of our experts now.</p>
                <form action="" className='flex flex-col justify-around gap-4'>
                    <div className='flex flex-wrap justify-between gap-4'>
                        <input type="text" className='px-3 py-2 border-2 border-grays-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-3/12' name='company_name' placeholder='Practice or Company Name*' required />
                        <input type="text" className='px-3 py-2 border-2 border-grays-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' name='last_name' placeholder='Last Name*' required />
                        <input type="text" className='px-3 py-2 border-2 border-grays-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' name='first_name' placeholder='First Name*' required />
                        <input type="text" className='px-3 py-2 border-2 border-grays-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' name='phone' value={phoneNumber}
                            onChange={handleInputChange} placeholder='+1 (555) 555-1234*' required />
                        <input type="email" className='px-3 py-2 border-2 border-grays-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-2/12' name='email' placeholder='Email*' required />
                    </div>
                    <div className='flex flex-wrap justify-between gap-4'>
                        <input type="text" className='px-3 py-2 border-2 border-grays-400 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-[81.2%]' name='message' placeholder='Message*' required />
                        <input type="submit" className='px-3 py-2  rounded-2xl w-full lg:w-2/12 animate-glow-border  border-2 bg-primary p-4 text-white' name='submit' placeholder='Submit' />

                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;