import React from 'react'
import HeadingLine from './../../components/HeadingLine';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function AboutCompany() {
    return (
        <>
            <div className='w-full flex flex-col md:flex-row justify-between items-center p-10'>
                <div className='w-full md:w-1/2 flex flex-col justify-start items-center text-left'>
                    <HeadingLine data={"Billing Care Solutions"} />
                    <p className='w-full text-4xl md:text-6xl text-left font-custom font-semibold text-secondary'>About the Company</p>
                    <p className='text-justify py-4'>Billing Care Solutions specialize in providing comprehensive and efficient medical billing services tailored to meet the unique needs of healthcare providers. Billing Care Solutions is to streamline your revenue cycle, maximize your reimbursements, and allow you to focus on what you do best: delivering exceptional patient care. With years of experience in the medical billing industry, Billing Care Solutions understands the complexities and challenges faced by healthcare providers. We are dedicated to offering customized solutions that address the specific needs of each client, ensuring a seamless and hassle-free billing process. Our goal is to become a trusted partner in your financial operations, enabling you to achieve greater efficiency and profitability.</p>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <LazyLoadImage src="./assets/about-us/About-the-Company-billingcaresolutions.com.webp" alt="" className='p-5 h-96'/>
                </div>
            </div>
        </>
    )
}

export default AboutCompany