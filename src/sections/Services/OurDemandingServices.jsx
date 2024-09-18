import React from 'react'
import Heading from './../../components/Heading';
import OfferCards from './../../components/Home/OfferCards';

function OurDemandingServices() {
    const data = [
        {
            title: "Medical Billing & Coding",
            img: './assets/what_do_we_offer/1. Medical Billing and Coding billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/1. Medical Billing and Coding Icon billingcaresolutions.com.svg",
            description: "We handle the entire Billing process, from Coding healthcare services to submitting claims and ensuring timely, accurate reimbursements for providers.",
        },
        {
            title: "Revenue Cycle Management",
            img: './assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description: "We provide comprehensive RCM services, optimizing the entire billing process from patient registration to final payment collection.",
        },
        {
            title: "Credentialing Services",
            img: './assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description: "BCS streamlines the credentialing process with precision and efficiency. From verifying qualifications to conducting comprehensive compliance assessments, BCS ensures seamless and expedited credentialing.",
        },
        {
            title: "Billing and Coding Audits",
            img: './assets/what_do_we_offer/3. Revenue Cycle Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/3. Revenue Cycle Management icon billingcaresolutions.com.svg",
            description: "At BCS, our medical billing and coding audits play a crucial role in helping healthcare providers maintain compliance with regulatory standards, enhance billing accuracy, and maximize revenue.",
        },
        {
            title: "Reporting and Analytics",
            img: './assets/what_do_we_offer/2. Provider Enrollment & Credentialing billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/2. Provider Enrollment & Credentialing Icon billingcaresolutions.com.svg",
            description: "BCS delivers sophisticated reporting and analytics that turn complex data into actionable insights. Utilizing advanced analytical tools, BCS provides a comprehensive view of financial and operational performance.",
        },

        {
            title: "AR & Denial Management",
            img: './assets/what_do_we_offer/4. AR & Denial Management billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/4. AR & Denial Management Icon billingcaresolutions.com.svg",
            description: "BCS enhances financial performance with expert AR and denial management services. By meticulously managing accounts receivable and strategically resolving denials, BCS ensures streamlined revenue cycles and maximized cash flow.",
        },
        {
            title: "Consultation Services",
            img: './assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/5. Eligibility Verification billingcaresolutions.com.svg",
            description: "BCS offers expert consultation to navigate healthcare management complexities. Providing tailored advice on billing processes, compliance strategies, and operational efficiency, BCS delivers actionable insights and innovative solutions.",
        },
        {
            title: "VOB & Prior Authorization",
            img: './assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/6. Piror Authorization billingcaresolutions.com.svg",
            description: "BCS ensures unparalleled precision in verification and prior authorization. Rigorous patient eligibility checks and meticulous management of authorization requests streamline approvals, reduce claim rejections, and accelerate patient access to services.",
        },
        {
            title: "Compliance Assistance",
            img: './assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/7. Patient Help Support billingcaresolutions.com.svg",
            description: "BCS provides robust compliance assistance to navigate complex healthcare regulations. Expert guidance on regulatory requirements, policy updates, and best practices ensures strict adherence to industry standards.",
        },
        {
            title: "Patient Help Support",
            img: './assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.webp',
            icon: "./assets/what_do_we_offer/8. Financial Billing Audit billingcaresolutions.com.svg",
            description: "BCS delivers comprehensive patient support, enhancing the healthcare experience with empathy and efficiency. From insurance inquiries to billing questions, BCS provides expert assistance tailored to patient needs.",
        },

    ]
    return (
        <>
            <Heading data={"Our Demanding Services"} />
            <div className='w-full flex flex-wrap justify-center gap-4 md:px-10 lg:px-28 mb-10 transition-all duration-300 ease-in-out'>
                {data.map((item, index) => (
                    <div class="flip-container size-80 relative my-3">
                        <div class="flipper absolute size-80 object-fit">
                            {/* <!-- Front of the card --> */}
                            <div class="front flex flex-col justify-center shadow-xl p-5 rounded-xl">
                                <div className='w-full flex flex-col justify-center items-center gap-4 rounded-xl'>
                                    <img src="./assets/google.png" alt="" className='size-20 my-5'/>
                                    <p className='text-xl text-center '>{item.title}</p>
                                </div>
                            </div>
                            {/* <!-- Back of the card --> */}
                            <div class="back w-80 h-[22rem]  flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${item.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div className='bg-primary w-full h-full flex flex-col justify-center items-start p-10 bg-opacity-80 rounded-xl'>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OurDemandingServices