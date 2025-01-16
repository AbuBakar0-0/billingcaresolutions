import React, { useEffect } from 'react'
import Header from '../sections/Header';
import Hero from '../sections/TermsAndConditions/Hero';
import TermsAndConditionsCard from '../components/TermsAndConditions/TermsAndConditionsCard';
import HeadingLine from './../components/HeadingLine';
import Footer from './../sections/Footer';
import { Helmet } from 'react-helmet';

function TermsaAndConditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Helmet>
                <title>Terms & Conditions - Billing Care Solutions</title>
                <meta name="description" content="At Billing Care Solutions, our specialties lie in delivering precise, customized services that meet the specific needs of healthcare practices. Our deep industry knowledge, paired with cutting-edge solutions, allows us to address critical areas of healthcare management, ensuring optimized revenue and smooth operations." />
                <meta property="og:title" content="Terms & Conditions - Billing Care Solutions" />
                <meta property="og:description" content="At Billing Care Solutions, our specialties lie in delivering precise, customized services that meet the specific needs of healthcare practices. Our deep industry knowledge, paired with cutting-edge solutions, allows us to address critical areas of healthcare management, ensuring optimized revenue and smooth operations." />
                <meta property="og:image" content="./assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet>
            <Header />
            <Hero />
            <div className='w-full container flex flex-col justify-center items-center gap-4 mx-auto my-10'>
                <div className='w-2/3 flex flex-col justify-center items-center gap-4 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                    <HeadingLine data={"Introduction"} />
                    <p>Welcome to Billing Care Solutions. These Terms and Conditions govern your use of our medical billing services. By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree with these Terms and Conditions, please do not use our services.</p>

                    <HeadingLine data={"Definitions"} />
                    <TermsAndConditionsCard tagline={"\"Company\" "} data={"refers to Billing Care Solutions"} />
                    <TermsAndConditionsCard tagline={"\"Client\" "} data={"refers to any healthcare provider, hospital, clinic, or any other entity that uses our services."} />
                    <TermsAndConditionsCard tagline={"\"Services\" "} data={"refers to medical billing, claim submission, payment collections, and related activities provided by the Company."} />

                    <HeadingLine data={"Services Provided"} />
                    <p className='w-full'>Billing Care Solutions offers a range of services, including but not limited to:</p>
                    <TermsAndConditionsCard data={"Submission of claims to insurance providers."} />
                    <TermsAndConditionsCard data={"Follow-up on unpaid claims."} />
                    <TermsAndConditionsCard data={"Payment posting and reporting."} />
                    <TermsAndConditionsCard data={"Denial management and appeals."} />
                    <TermsAndConditionsCard data={"We commit to submitting accurate and timely billing information, but we rely on the accuracy of the information provided by the Client."} />


                    <HeadingLine data={"Client Responsibilities"} />
                    <TermsAndConditionsCard tagline={"Accurate Information: "} data={"The Client is responsible for providing accurate and timely data, including patient details, insurance information, and service records."} />
                    <TermsAndConditionsCard tagline={"Compliance: "} data={"The Client agrees to comply with all relevant federal and state laws, including HIPAA(Health Insurance Portability and Accountability Act)."} />
                    <TermsAndConditionsCard tagline={"Cooperation: "} data={"The Client agrees to cooperate with the Company in any audits or claims disputes, providing any additional information as requested."} />


                    <HeadingLine data={"Payment Terms"} />
                    <TermsAndConditionsCard tagline={"Pricing: "} data={"Fees for our services are determined based on either a percentage of collections or a flat fee, as agreed upon in a separate agreement."} />

                    <TermsAndConditionsCard tagline={"Billing Cycle: "} data={"Invoices will be generated monthly and are due within 30 days of receipt."} />
                    <TermsAndConditionsCard tagline={"Late Payments: "} data={"Any payment not made within 30 days will incur a late fee of 1.5% per month on the outstanding balance."} />


                    <HeadingLine data={"Data Privacy and Security"} />
                    <p>Billing Care Solutions takes data privacy seriously. We comply with HIPAA regulations and other applicable privacy laws. The Company uses encryption and secure technologies to ensure the confidentiality of patient data.</p>
                    <TermsAndConditionsCard tagline={"Data Sharing: "} data={"We will not share any personal or medical information without the consent of the Client, except as required by law or to perform services."} />
                    <TermsAndConditionsCard tagline={"Patient Rights: "} data={"Clients are responsible for ensuring their patients are informed of their rights regarding their medical records."} />

                    <HeadingLine data={"Limitation of Liability"} />
                    <TermsAndConditionsCard tagline={"Errors and Omissions: "} data={"Billing Care Solutions strives for accuracy, but we are not responsible for any errors arising from inaccurate or incomplete information provided by the Client."} />
                    <TermsAndConditionsCard tagline={"Damages: "} data={"The Company's total liability is limited to the amount paid by the Client for services in the last 3 months. We are not liable for any indirect, incidental, or consequential damages."} />

                    <HeadingLine data={"Termination"} />
                    <TermsAndConditionsCard tagline={"By Client: "} data={"The Client may terminate services with 30 days’ written notice."} />
                    <TermsAndConditionsCard tagline={"By Company: "} data={"Billing Care Solutions reserves the right to terminate this agreement for any reason with 30 days’ notice. Immediate termination may occur in the case of breach of contract or illegal activity by the Client."} />
                    <TermsAndConditionsCard data={"Upon termination, all outstanding invoices must be paid within 30 days."} />

                    <HeadingLine data={"Dispute Resolution"} />
                    <TermsAndConditionsCard tagline={"Governing Law: "} data={"These terms are governed by the laws of the state in which Billing Care Solutions is registered."} />
                    <TermsAndConditionsCard tagline={"Dispute Resolution: "} data={"Any disputes arising out of or in connection with these terms shall be resolved through mediation. If mediation fails, disputes will be settled in a court of competent jurisdiction."} />


                    <HeadingLine data={"Amendments"} />
                    <TermsAndConditionsCard data={"Billing Care Solutions reserves the right to modify these Terms and Conditions at any time. Clients will be notified of any material changes 30 days prior to implementation. Continued use of our services after this period constitutes acceptance of the new terms."} />

                    <HeadingLine data={"Force Majeure"} />
                    <TermsAndConditionsCard data={"Billing Care Solutions is not liable for any failure or delay in performance due to causes beyond our reasonable control, including but not limited to acts of God, war, strikes, or governmental restrictions."} />

                    <HeadingLine data={"Entire Agreement"} />
                    <TermsAndConditionsCard data={"These Terms and Conditions, along with any signed agreements, constitute the entire agreement between Billing Care Solutions and the Client and supersede any prior agreements or understandings, whether written or oral.For more information on industry practices, HIPAA compliance, or related medical billing regulations, I recommend reviewing the American Medical Billing Association (AMBA) guidelines and the HIPAA Privacy Rule on the official Health and Human Services (HHS) website. You may also explore research on the evolution of medical billing in journals like the Journal of Health Economics."} />


                </div>

            </div>
            <Footer />
        </>
    )
}

export default TermsaAndConditions


