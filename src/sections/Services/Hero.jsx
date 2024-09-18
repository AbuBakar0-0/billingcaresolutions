import React from 'react'

function Hero() {

    return (
        <>
            <div className='bg-secondary text-white'>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-center items-center gap-4 text-center p-5'>
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
                    <div className='w-full md:w-1/2 p-10'>
                        <div className='w-full rounded-lg shadow-lg flex flex-col justify-center items-center bg-white p-10 gap-3'>
                            <p className='text-secondary font-semibold text-3xl'>Book An Appointment</p>
                            <form action="" className='w-full flex flex-col justify-between items-center gap-3'>
                                <div className='w-full flex flex-col md:flex-row justify-between items-center text-black gap-3'>
                                    <select name="" id="" className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-1/2'>
                                        <option value="" selected>Choose a Provider</option>
                                    </select>
                                    <input type="text" className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-1/2' name='company_name' placeholder='Full Name' required />
                                </div>
                                <div className='w-full flex flex-col md:flex-row justify-between items-center text-black gap-3'>
                                    <input type="text" className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-1/2' name='company_name' placeholder='Phone Number' required />
                                    <input type="text" className='px-3 py-2 border-2 rounded-2xl w-full focus:border-secondary focus:ring-2 outline-primary lg:w-1/2' name='company_name' placeholder='Email' required />
                                </div>
                                <div className='w-full flex flex-col justify-center items-center'>
                                    <input type="submit" className='px-3 py-2  rounded-2xl w-full  border-2 bg-primary p-4 text-white' name='Get Started' placeholder='Submit' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero