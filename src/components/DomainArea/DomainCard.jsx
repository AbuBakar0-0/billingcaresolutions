import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DomainCard = ({ data }) => {
    return (
        <>
            <div class="flip-container size-80 relative my-3">
                <div class="flipper absolute size-80 object-fit">
                    {/* <!-- Front of the card --> */}
                    <div class="front flex flex-col justify-center shadow-xl rounded-xl" style={{ backgroundImage: `url("${data.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='bg-gray-800 w-full h-full flex flex-col justify-center items-center p-10 bg-opacity-80 text-white text-3xl gap-4 rounded-xl'>
                            <LazyLoadImage src={data.flag} alt="" className='w-32 h-auto'/>
                            <p>{data.title}</p>
                        </div>
                    </div>

                    {/* <!-- Back of the card --> */}
                    <div class="back w-80 h-[22rem]  flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${data.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DomainCard