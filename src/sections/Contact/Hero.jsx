import React from 'react'

function Hero() {
    return (
        <>
            <div className='text-white' style={{ backgroundImage: `url("./assets/headers/contact.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='container mx-auto min-h-[30rem] flex flex-col md:flex-row justify-start items-center gap-4 text-center p-5'>
                    <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-left gap-4'>
                        <h1 className='w-full uppercase text-6xl font-bold'>Contact Us</h1>
                        <p className='w-full text-lg'>Billing Care Solutions empower healthcare providers to transform their billing processes and maximize revenue potential. Our expert team excels in precision medical billing and coding and accurate claims submissions. We streamline revenue cycle management, effectively reducing Days in Accounts Receivable (AR) and accelerating cash flow. Through comprehensive coding audits, we identify discrepancies and ensure compliance, while our proactive denial management tackles denied claims promptly to minimize revenue loss. Whether you seek customized solutions or expert guidance, we are committed to your success at every stage of the billing journey.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero