import React from 'react'

function Hero() {
    const data = [
        {
            title: "Compliance and Regulatory Adherence",
            img: "./assets/about-us/Compliance and Regulatory Adherence billingcaresolutions.com.svg"
        },
        {
            title: "24/7 Support and Transparency",
            img: "./assets/about-us/247 Support and Transparency billingcaresolutions.com.svg"
        },
        {
            title: "Cost-Effective Solutions",
            img: "./assets/about-us/Cost-Effective Solutions billingcaresolutions.com.svg"
        },
        {
            title: "Client-Centric Approach",
            img: "./assets/about-us/Client-Centric Approach billingcaresolutions.com.svg"
        },
    ]
    return (
        <>
            <div className='bg-secondary text-white'>
                <div className='container mx-auto min-h-[30rem] flex flex-col justify-center items-center gap-4 text-center'>
                    <h1 className='text-3xl font-semibold'>Why Billing Care Solutions Stands Out</h1>
                    <p className='text-lg w-full md:w-1/2 p-2'>Billing Care Solutions redefines excellence with its pioneering technology, impeccable claims precision, and unwavering commitment to compliance, driving unparalleled efficiency and swift financial outcomes.</p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center p-10'>
                <div className='container flex flex-col md:flex-row justify-center items-center rounded-2xl bg-white shadow-2xl p-10 md:p-10 -mt-32 gap-3'>
                    {data.map((item) => (
                        <div className='w-1/4 flex flex-col justify-center items-center'>
                            <img src={item.img} alt="" className='size-20'/>
                            <p className='text-secondary font-semibold text-center'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero