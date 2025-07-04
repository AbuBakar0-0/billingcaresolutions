import React from 'react'

const SpecialityCard = ({ data }) => {
    return (
        <>
            <div className="flip-container size-72 relative my-3">
                <div className="flipper absolute size-72 object-fit">
                    {/* <!-- Front of the card --> */}
                    <div className="front flex flex-col justify-center shadow-xl p-5 rounded-xl">
                        <div className='w-full flex flex-col justify-center items-center gap-4 rounded-xl'>
                            <img src={data.icon} alt="Billing Care Solutions" className='size-32 my-5' />
                            <p className='text-xl text-center text-black'>      
                                {data.title.replace('Billing Services', '')}
                            </p>
                        </div>
                    </div>
                    {/* <!-- Back of the card --> */}
                    <div className="back w-72 h-[22rem]  flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${data.background_image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='w-full h-full flex flex-col justify-center items-start p-10 bg-opacity-80 rounded-xl'>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SpecialityCard