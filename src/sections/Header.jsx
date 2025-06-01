// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay] = useState(false);
    const [servicesDisplay, setServicesDisplay] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const displaySubMenu = (index) => {
        if (index === 0) {
            setDisplay(false);
        }
        else if (index === 1) {
            setDisplay(true);
        }
        else if (index === 2) {
            setDisplay(false);
        }
        else {
            setDisplay(!display);
        }
    }

    const displayServicesSubMenu = (index) => {
        if (index === 0) {
            setServicesDisplay(false);
        }
        else if (index === 1) {
            setServicesDisplay(true);
        }
        else if (index === 2) {
            setServicesDisplay(false);
        }
        else {
            setServicesDisplay(!servicesDisplay);
        }
    }

    const services = [
        "Medical Billing & Coding",
        "Credentialing Services",
        "Revenue Cycle Management",
        "Billing and Coding Audits",
        "Reporting and Analytics",
        "AR & Denial Management",
        "VOB & Prior Authorization",
        "Consultation Services",
        "Compliance Assistance",
        "Patient Help Support",
    ]


    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className='hidden lg:flex flex-row justify-between items-center diagonalimg text-white p-3 px-10'>
                <div className='w-1/2 px-10'>
                    <div className='flex flex-col lg:flex-row items-center gap-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <p>(302) 244-0434</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p>info@billingcaresolutions.com</p>
                    </div>
                </div>
                <div className='w-2/3 flex flex-wrap gap-3 justify-end text-white px-10'>
                    <div className='flex flex-row items-center space-x-2'>
                        <a href="https://www.facebook.com/BillingCareSolutions">
                            <FaFacebook className='size-8 fill-primary bg-white p-1 rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                        </a>
                        <a href="https://www.instagram.com/billingcaresolutions/?hl=en">
                            <RiInstagramFill className='size-8 fill-primary bg-white p-1 rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                        </a>
                        <a href="https://www.linkedin.com/company/68852117/admin/feed/posts/">
                            <FaLinkedin className='size-8 fill-primary bg-white p-1 rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                        </a>
                        <a href="https://x.com/billing_care ">
                            <FaXTwitter className='size-8 fill-primary bg-white p-[0.30rem] rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                        </a>
                        <a href="https://www.pinterest.com/Billingcaresolutions/ ">
                            <FaPinterest className='size-8 fill-primary bg-white p-1 rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                        </a>
                        <a href="https://www.threads.net/@billingcaresolutions?hl=en " className='flex justify-center items-center '>
                            <BsFillThreadsFill className='size-8 fill-primary bg-white p-1 rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw">
                            <FaYoutube className='size-8 fill-primary bg-white p-1 rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between h-16">
                    <div className="w-full flex flex-row justify-between">
                        <div className="w-4/5 lg:w-1/5 flex-shrink-0 flex items-center">
                            <img className="h-full w-auto" src="/assets/BCS Logo billingcaresolutions.com.svg" alt="Logo" />
                        </div>
                        <div className="hidden lg:flex lg:space-x-8 items-center w-3/5 justify-center">
                            <Link to='/' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Home</Link>
                            <Link to='/why-bcs' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Why BCS</Link>

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <button className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary" onMouseOver={() => displayServicesSubMenu(1)} onMouseOut={() => displayServicesSubMenu(2)}>
                                    <p>Services</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div className={`p-2 absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-100 ${servicesDisplay ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} onMouseOver={() => displayServicesSubMenu(1)} onMouseOut={() => displayServicesSubMenu(0)}>
                                    {services.map((item) => (
                                        <>
                                            <Link to={`/service-details/${item}`} className="block px-4 py-2 text-xs text-grays-700 hover:text-secondary">{item}</Link>
                                        </>
                                    ))}
                                </div>
                            </div>

                            <Link to='/specialities' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Specialities</Link>
                            <Link to='/domain-areas' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Domain Area</Link>

                            {/* Resources Dropdown */}
                            <div className="relative group">
                                <button className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary" onMouseOver={() => displaySubMenu(1)} onMouseOut={() => displaySubMenu(2)}>
                                    <p>Resources</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                <div className={`p-2 absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-100 ${display ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} onMouseOver={() => displaySubMenu(1)} onMouseOut={() => displaySubMenu(0)}>
                                    <Link to="/blogs" className="block px-4 py-2 text-xs text-grays-700 hover:text-secondary">Blogs</Link>
                                    <Link to="/faqs" className="block px-4 py-2 text-xs text-grays-700 hover:text-secondary">FAQ's</Link>
                                    <Link to="/articles" className="block px-4 py-2 text-xs text-grays-700 hover:text-secondary">Articles</Link>
                                    <Link to="/terms-and-conditions" className="block px-4 py-2 text-xs text-grays-700 hover:text-secondary">Terms & Conditions</Link>
                                    <Link to="/privacy-policy" className="block px-4 py-2 text-xs text-grays-700 hover:text-secondary">Privacy Policy</Link>
                                </div>
                            </div>

                        </div>
                        <div className='hidden lg:flex items-center w-1/5 justify-end'>
                            <Link to="/contact" className='bg-secondary text-white px-4 py-3 rounded-xl hover:bg-primary hover:transition-all hover:duration-300 hover:ease-in-out'>Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-grays-900 inline-flex items-center justify-center p-2 rounded-md text-grays-400 hover:text-secondary hover:bg-grays-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grays-800 focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`w-full lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Home</Link>
                    <Link to="/why-bcs" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Why BCS</Link>

                    {/* Mobile Services Dropdown */}
                    <button className="flex flex-row items-center text-grays-900 px-3 py-2 rounded-md text-base font-medium hover:text-secondary w-full text-left" onClick={() => displayServicesSubMenu(4)}>
                        <p>Services</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className={`pl-4 transition-all duration-300 overflow-hidden ${servicesDisplay ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        {services.map((item) => (
                          <>
                        <Link to={`/service-details/${item}`} className="block px-3 py-2 text-grays-900 rounded-md text-sm font-medium hover:text-secondary">{item}</Link>
                          </>
                        ))}
                    </div>

                    <Link to="/specialities" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Specialities</Link>
                    <Link to="/domain-areas" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Domain Area</Link>
                    <Link to="/contact" className="bg-secondary text-white block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Contact Us</Link>

                    {/* Mobile Resources Dropdown */}
                    <button className="flex flex-row items-center text-grays-900 px-3 py-2 rounded-md text-base font-medium hover:text-secondary w-full text-left" onClick={() => displaySubMenu(4)}>
                        <p>Resources</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className={`pl-4 transition-all duration-300 overflow-hidden ${display ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <Link to="/blogs" className="block px-3 py-2 text-grays-900 rounded-md text-sm font-medium hover:text-secondary">Blogs</Link>
                        <Link to="/faqs" className="block px-3 py-2 text-grays-900 rounded-md text-sm font-medium hover:text-secondary">FAQ's</Link>
                        <Link to="/articles" className="block px-3 py-2 text-grays-900 rounded-md text-sm font-medium hover:text-secondary">Articles</Link>
                        <Link to="/terms-and-conditions" className="block px-3 py-2 text-grays-900 rounded-md text-sm font-medium hover:text-secondary">Terms & Conditions</Link>
                        <Link to="/privacy-policy" className="block px-3 py-2 text-grays-900 rounded-md text-sm font-medium hover:text-secondary">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;