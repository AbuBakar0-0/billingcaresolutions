import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopCategoriesCard = ({ data }) => {

    return (
        <>
            <div className='size-72 rounded-lg shadow-xl p-10 flex flex-col justify-center items-center gap-3 hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <LazyLoadImage src={data.icon} alt="" className='size-20' />
                <p className='text-secondary text-2xl font-semibold text-center'>{data.title}</p>
                <button className='bg-secondary text-white px-4 py-3 rounded-xl '>Explore More</button>
            </div>
        </>
    )
}

export default TopCategoriesCard