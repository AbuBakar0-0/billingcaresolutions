import React from 'react'

function Hero() {
    const data = [
        {
            title: "Compliance and Regulatory Adherence",
            img: ""
        },
        {
            title: "24/7 Support and Transparency",
            img: ""
        },
        {
            title: "Cost-Effective Solutions",
            img: ""
        },
        {
            title: "Client-Centric Approach",
            img: ""
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
                <div className='container min-h-20 flex flex-col md:flex-row justify-center items-center rounded-2xl bg-white shadow-2xl p-10 md:p-20 -mt-20 gap-3'>
                    {data.map((item) => (
                        <div className='w-1/4 flex flex-col justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            <p className='text-secondary font-semibold text-center'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero