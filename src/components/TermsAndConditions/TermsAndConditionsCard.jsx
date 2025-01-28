import React from 'react'

const TermsAndConditionsCard = ({ tagline, data }) => {
    return (
        <>
            <div className='w-full flex flex-row justify-start items-center gap-5'>
                <img src="/assets/Arrow billingcaresolutions.com.svg" alt="Billing Care Solutions" className='size-6' />
                
                <p>{tagline !== undefined ? <span className='text-secondary font-semibold text-justify'>{tagline}</span> : ""}{data}</p>

            </div>
        </>
    )
}

export default TermsAndConditionsCard