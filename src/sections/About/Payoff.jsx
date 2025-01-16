import React from 'react'
import PayoffCard from '../../components/About/PayoffCard';


function Payoff() {
    
    const data = [
        {
            id: 1,
            title: "Maximize Revenue, Minimize Hassles",
            description: "Our solutions identify and mitigate revenue leakage by pinpointing billing and coding inaccuracies, optimizing charge capture, and expediting claim submission processes to improve reimbursement rates."
        },
        {
            id: 2,
            title: "Patient-Centric Billing",
            description: "Billing Care Solutions enhances patient satisfaction through flexible payment options, transparent billing, and exceptional customer service. We optimize patient engagement with automated communication, patient portals, and personalized outreach."
        },
        {
            id: 3,
            title: "Customized Reporting and Analytics",
            description: "Gain granular visibility into key performance indicators, including revenue cycle metrics, charge capture effectiveness, denial rates, and patient demographics. Identify trends, pinpoint areas for improvement, and uncover revenue opportunities through in-depth data analysis.", 
        },
        {
            id: 4,
            title: "Reduced overhead cost",
            description: "Billing Care Solutions automated routine billing tasks and eliminating the need for in-house billing staff, our solutions free up valuable time and resources for patient care. Additionally, expedited claim processing and reduced accounts receivable days significantly improve cash flow, allowing you to focus on growing your practice."
        },
    ];
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center p-10'>
                <div className='w-full flex flex-col md:flex-row justify-between items-center gap-3'>
                    <div className='w-full md:w-1/3 flex flex-row justify-start items-center gap-3'>
                        <p className='text-2xl md:text-3xl font-semibold text-secondary'>What's the payoff?</p>
                        <div className={`bg-primary w-[0.2rem] h-[2rem]`}></div>
                    </div>
                    <div className='w-full text-justify text-sm lg:text-md whitespace-normal break-words tracking-tight'>
                        <p>Our comprehensive solutions, underpinned by industry expertise and state-of-the-art technology, empower you to concentrate on providing exceptional patient care while we optimize your billing and revenue generation processes.
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-3 mt-10 '>
                    {data.map((item) => (
                        <PayoffCard data={item} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default Payoff