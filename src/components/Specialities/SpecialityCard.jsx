import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SpecialityCard = ({ data }) => {
    return (
        <>
            <div class="flip-container size-80 relative my-3">
                <div class="flipper absolute size-80 object-fit">
                    {/* <!-- Front of the card --> */}
                    <div class="front flex flex-col justify-center shadow-xl p-5 rounded-xl">
                        <div className='w-full flex flex-col justify-center items-center gap-4 rounded-xl'>
                            <LazyLoadImage src={data.icon} alt="" className='size-32 my-5' />
                            <p className='text-2xl text-center text-black'>{data.title}</p>
                        </div>
                    </div>
                    {/* <!-- Back of the card --> */}
                    <div class="back w-80 h-[22rem]  flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${data.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='w-full h-full flex flex-col justify-center items-start p-10 bg-opacity-80 rounded-xl'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialityCard