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

    return (
        <>
            <HeadingLine data="Contact Us" />
            <form className="w-full flex flex-col justify-between items-center gap-3">
                <div className="w-full flex flex-col justify-between items-center text-black gap-3">
                    <input
                        type="text"
                        className="px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary"
                        placeholder="Full Name"
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