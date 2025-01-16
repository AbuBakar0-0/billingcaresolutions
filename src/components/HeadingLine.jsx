import React from 'react'

const HeadingLine = ({data}) => {
    let color='primary text-2xl';
    // if(data==="Why Choose"){
    //     color='primary text-3xl';
    // }
    return (
        <>
            <div className={`w-full flex flex-row justify-start items-center gap-3 text-${color} font-custom font-medium`}>
                <p>{data}</p>
                <div className={`bg-${color} w-[2rem] h-[0.2rem]`}></div>
            </div>
        </>
    )
}

export default HeadingLine