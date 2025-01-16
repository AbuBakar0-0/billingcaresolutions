import React from 'react'

const TopCategoriesCard = ({ data }) => {

    return (
        <>
            <div className='size-64 rounded-lg shadow-xl p-10 flex flex-col justify-center items-center gap-3 hover:scale-110 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <img src={data.icon} alt="Billing Care Solutions" className='size-20' />
                <p className='text-secondary text-lg font-semibold text-center'>{data.title}</p>
                <button className='bg-secondary text-white px-4 py-3 rounded-xl '>Explore More</button>
            </div>
        </>
    )
}

export default TopCategoriesCard