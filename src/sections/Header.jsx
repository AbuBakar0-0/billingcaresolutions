// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [display, setDisplay] = useState(false);

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
                    <Link to="https://www.facebook.com/BillingCareSolutions">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" className='fill-white hover:fill-secondary hover:bg-white hover:transition-all hover:duration-300 rounded-full hover:p-1' >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                    </Link>
                    <Link to="https://www.instagram.com/billingcaresolutions/?hl=en">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 30 30" className='fill-white hover:fill-secondary hover:bg-white hover:transition-all hover:duration-300 rounded-lg hover:p-1'>
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                        </svg>
                    </Link>
                    <Link to="https://www.linkedin.com/company/68852117/admin/feed/posts/">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" className='fill-white hover:fill-secondary hover:bg-white hover:transition-all hover:duration-300 rounded-lg hover:p-1'>
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </Link>
                    <Link to="https://x.com/billing_care ">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" className='fill-white hover:fill-secondary hover:bg-white hover:transition-all hover:duration-300 rounded-full hover:p-1'>
                            <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                        </svg>
                    </Link>
                    <Link to="https://www.pinterest.com/Billingcaresolutions/ ">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" className='fill-white hover:fill-secondary hover:bg-white hover:transition-all hover:duration-300 rounded-full hover:p-1'>
                            <path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"></path>
                        </svg>
                    </Link>
                    <Link to="https://www.threads.net/@billingcaresolutions?hl=en " className='flex justify-center items-center '>
                        <svg aria-label="Threads" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className='size-7 fill-primary bg-white p-1 rounded-xl hover:bg-secondary hover:fill-white hover:transition-all hover:duration-100 hover:border-white hover:border-4'><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCyRZuBQv0paVu9vE674zFpw">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" className='fill-white hover:fill-secondary hover:bg-white hover:transition-all hover:duration-300 rounded-full hover:p-1'>
                            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between h-16">
                    <div className="w-full flex flex-row justify-between">
                        <div className="w-4/5 lg:w-1/5 flex-shrink-0 flex items-center">
                            <LazyLoadImage  className="h-full w-auto" src="./assets/BCS Logo billingcaresolutions.com.svg" alt="Logo" />
                        </div>
                        <div className="hidden lg:flex lg:space-x-8 items-center w-3/5 justify-center">
                            <Link to='/' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Home</Link>
                            <Link to='/whybcs' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Why BCS</Link>
                            <Link to='/services' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Services</Link>
                            <Link to='/specialities' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Specialities</Link>
                            <Link to='/domain' className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary">Domain Area</Link>
                            <div className="relative group">
                                <button className="text-secondary inline-flex items-center p-2 font-semibold hover:text-primary" onMouseOver={() => displaySubMenu(1)} onMouseOut={() => displaySubMenu(2)}>
                                    <p>Resources</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </button>
                                <div className={`p-2 absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transition-all duration-100 ${display ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} onMouseOver={() => displaySubMenu(1)} onMouseOut={() => displaySubMenu(0)}>
                                    <Link to="/blogs" className="block px-4 py-2 text-sm text-grays-700 hover:text-secondary">Blog</Link>
                                    <Link to="/faqs" className="block px-4 py-2 text-sm text-grays-700 hover:text-secondary">FAQ's</Link>
                                    <Link to="/articles" className="block px-4 py-2 text-sm text-grays-700 hover:text-secondary">Articles</Link>
                                    <Link to="/termsandconditions" className="block px-4 py-2 text-sm text-grays-700 hover:text-secondary">Terms & Conditions</Link>
                                    <Link to="/privacypolicy" className="block px-4 py-2 text-sm text-grays-700 hover:text-secondary">Privacy Policy</Link>
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

            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <div className="relative group">

                    </div>
                    <Link to="/" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Home</Link>
                    <Link to="/whybcs" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Why BCS</Link>
                    <Link to="/services" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Services</Link>
                    <Link to="/specialities" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Specialities</Link>
                    <Link to="/domain" className="text-grays-900 block px-3 py-2 rounded-md text-base font-medium hover:text-secondary">Domain Area</Link>
                    <button className="flex flex-row items-center text-grays-900 px-3 py-2 rounded-md text-base font-medium hover:text-secondary" onClick={() => displaySubMenu(4)}>
                        <p>Resources</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className={`${display ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <Link to="/blogs" className="block px-3 py-2 text-grays-900 rounded-md text-base font-medium hover:text-secondary">Blog</Link>
                        <Link to="/faqs" className="block px-3 py-2 text-grays-900 rounded-md text-base font-medium hover:text-secondary">FAQ's</Link>
                        <Link to="/articles" className="block px-3 py-2 text-grays-900 rounded-md text-base font-medium hover:text-secondary">Articles</Link>
                        <Link to="/termsandconditions" className="block px-3 py-2 text-grays-900 rounded-md text-base font-medium hover:text-secondary">Terms & Conditions</Link>
                        <Link to="/privacypolicy" className="block px-3 py-2 text-grays-900 rounded-md text-base font-medium hover:text-secondary">Privacy Policy</Link>
                    </div>
                    <div className='w-full flex items-center'>
                        <Link to="/contact"  className='w-full bg-secondary text-white px-3 py-2 rounded-xl'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;