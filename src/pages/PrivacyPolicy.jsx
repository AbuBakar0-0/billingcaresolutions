import React, { useEffect } from 'react'
import Header from '../sections/Header'
import Hero from './../sections/PrivacyPolicy/Hero';
import Footer from './../sections/Footer';
import HeadingLine from '../components/HeadingLine';
import TermsAndConditionsCard from './../components/TermsAndConditions/TermsAndConditionsCard';
import { Helmet } from 'react-helmet';

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {/* <Helmet>
                <title>Privacy Poilcy - Billing Care Solutions</title>
                <meta name="description" content="BCS provides the most comprehensive and effective medical billing services, following HIPAA rules and regulations to secure protected health information." />
                <meta property="og:title" content="Privacy Poilcy - Billing Care Solutions" />
                <meta property="og:description" content="BCS provides the most comprehensive and effective medical billing services, following HIPAA rules and regulations to secure protected health information." />
                <meta property="og:image" content="/assets/BCS Logo billingcaresolutions.com.svg" />
            </Helmet> */}
            <Header />
            <Hero />
            <div className='w-full container flex flex-col justify-center items-center gap-4 mx-auto my-20 text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                <div className='w-2/3 flex flex-col justify-center items-center gap-4 text-justify'>
                    <p className='w-full'>
                        At Billing Care Solutions, we value your privacy and are committed to protecting the personal and sensitive information you provide to us. This Privacy Policy outlines how we collect, use, and safeguard your information, in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable privacy laws.
                    </p>

                    <HeadingLine data={"Information We Collect"} />
                    <p className='w-full'>We collect and process personal, medical, and billing information in the course of providing medical billing services. The types of information we collect include:</p>
                    <TermsAndConditionsCard tagline={"Personal Information: "} data={"Name, address, phone number, email, date of birth."} />
                    <TermsAndConditionsCard tagline={"Medical Information: "} data={"Patient records, diagnoses, treatment details, and other health-related information."} />
                    <TermsAndConditionsCard tagline={"Insurance Information: "} data={"Insurance provider details, policy numbers, claims history."} />
                    <TermsAndConditionsCard tagline={"Payment Information: "} data={"Payment methods, account numbers, transaction details."} />
                    <TermsAndConditionsCard tagline={"Usage Information:"} data={"When you visit our website, we may collect information such as IP address, browser type, and browsing behavior."} />


                    <HeadingLine data={"How We Use Your Information"} />
                    <p className='w-full'>The information we collect is used for the following purposes:</p>
                    <TermsAndConditionsCard tagline={"Medical Billing: "} data={"To process claims, manage payment collections, and handle claim follow-ups."} />
                    <TermsAndConditionsCard tagline={"Communication:"} data={"To contact healthcare providers or insurance companies regarding claims."} />
                    <TermsAndConditionsCard tagline={"Compliance: "} data={"To comply with legal obligations, such as HIPAA, and for audit purposes."} />
                    <TermsAndConditionsCard tagline={"Improvement of Services: "} data={"To analyze website usage and improve our service offerings."} />
                    <TermsAndConditionsCard tagline={"Customer Support: "} data={"To address inquiries or complaints and provide support to our clients."} />

                    <HeadingLine data={"Sharing of Information"} />
                    <p className='w-full'>
                        We do not sell or rent your personal information. We may share information in the following situations:
                    </p>
                    <TermsAndConditionsCard tagline={"With Healthcare Providers: "} data={"To facilitate accurate medical billing and claim processing."} />
                    <TermsAndConditionsCard tagline={"With Insurance Companies: "} data={"To submit claims and handle disputes."} />
                    <TermsAndConditionsCard tagline={"With Service Providers: "} data={"We may share data with third-party vendors who assist in our operations (e.g., cloud storage, IT services), but only if they adhere to the same privacy standards."} />
                    <TermsAndConditionsCard tagline={"For Legal Compliance:"} data={"When required by law, we may share information with government authorities or other third parties."} />


                    <HeadingLine data={"Data Security"} />
                    <p className='w-full'>We implement industry-standard measures to protect your personal and medical information, including:</p>
                    <TermsAndConditionsCard tagline={"Encryption: "} data={"We use encryption to protect sensitive data transmitted between our systems and third-party providers."} />
                    <TermsAndConditionsCard tagline={"Access Control:"} data={"We limit access to your data to authorized personnel only."} />
                    <TermsAndConditionsCard tagline={"Regular Audits: "} data={"We regularly review our security protocols to ensure compliance with HIPAA and other regulatory requirements."} />
                    <p className='w-full'>Despite our best efforts, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to doing everything we can to protect your data.</p>


                    <HeadingLine data={"Your Rights"} />
                    <p className='w-full'>
                        You have the following rights concerning your personal information:
                    </p>
                    <TermsAndConditionsCard tagline={"Access: "} data={"You can request access to your personal information at any time."} />
                    <TermsAndConditionsCard tagline={"Correction: "} data={"You may request corrections to inaccurate or incomplete information."} />
                    <TermsAndConditionsCard tagline={"Deletion: "} data={"You can request the deletion of your information, subject to any legal retention requirements."} />
                    <TermsAndConditionsCard tagline={"Restrictions: "} data={"You can request that we limit how we use or share your personal information."} />
                    <TermsAndConditionsCard tagline={"Complaints:"} data={"You have the right to file a complaint if you believe we have violated your privacy rights."} />
                    <p className='w-full'> To exercise any of these rights, please contact us at <a href="mailto:info@billingcaresolutions.com" className='underline text-secondary'>info@billingcaresolutions.com</a>  or (302) 244-0434.</p>

                    <HeadingLine data={"Retention of Data"} />
                    <TermsAndConditionsCard data={"We retain personal and billing information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Upon request, we can delete your information, provided that it is not required for legal or regulatory purposes."} />

                    <HeadingLine data={"Cookies and Tracking Technologies"} />
                    <TermsAndConditionsCard data={"Our website may use cookies and other tracking technologies to enhance your user experience. This information is used to analyze website traffic and behavior but is not linked to personal medical information. You can control cookie preferences through your browser settings."} />

                    <HeadingLine data={"Third-Party Links"} />
                    <TermsAndConditionsCard data={" Our website may contain links to third-party sites, such as healthcare providers or industry partners. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit."} />


                    <HeadingLine data={"HIPAA Compliance"} />
                    <p className='w-full'>As a medical billing company, we are fully compliant with HIPAA regulations. This means we follow strict guidelines to protect patient health information (PHI) and ensure its confidentiality, integrity, and security.</p>
                    <TermsAndConditionsCard tagline={"Notice of Privacy Practices: "} data={"We provide our clients with a Notice of Privacy Practices to inform them of their rights under HIPAA."} />
                    <TermsAndConditionsCard tagline={"Business Associate Agreement (BAA): "} data={"We enter into BAAs with all healthcare providers and any third-party vendors that handle PHI to ensure compliance with HIPAA regulations."} />

                    <HeadingLine data={"Changes to This Policy"} />
                    <TermsAndConditionsCard data={"We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements. When we make changes, we will update the \"Effective Date\" at the top of this policy and notify clients where appropriate. Your continued use of our services following these changes signifies your acceptance of the revised policy."} />


                    <HeadingLine data={"Contact Information"} />
                    <TermsAndConditionsCard data={"If you have any questions or concerns about this Privacy Policy, please contact us at:"} />
                    <div className=' w-full flex flex-col justify-start items-center gap-4 px-10'>
                        <div className='w-full flex flex-row justify-start gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p>(302) 244-0434</p>
                        </div>
                        <div className='w-full flex flex-row justify-start gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p>info@billingcaresolutions.com</p>
                        </div>
                        <div className='w-full flex flex-row justify-start gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p >30 N GOULD, ST, STE R SHERIDAN, WY 82801</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default PrivacyPolicy