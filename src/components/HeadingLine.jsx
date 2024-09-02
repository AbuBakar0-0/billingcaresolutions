import React from 'react'

const HeadingLine = ({data}) => {
    let color='primary';
    if(data=="Why Choose Billing Care Solutions?"){
        color='secondary';
    }
    return (
        <>
            <div className={`w-full flex flex-row justify-start items-center space-x-3 text-${color} font-custom text-2xl font-medium`}>
                <p>{data}</p>
                <div className={`bg-${color} w-[2rem] h-[0.2rem]`}></div>
            </div>
        </>
    )
}

export default HeadingLine