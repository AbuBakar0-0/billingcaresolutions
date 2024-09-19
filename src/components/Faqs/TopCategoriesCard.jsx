import React from 'react'
import { Link } from 'react-router-dom'

const TopCategoriesCard = ({ data }) => {

    return (
        <>
            <Link to='/faqDetails' state={data}>
                <div className='size-72 rounded-lg shadow-xl p-10 flex flex-col justify-center items-center gap-3 group hover:bg-secondary hover:transition-all hover:duration-300 hover:ease-in-out'>
                    <img src="./assets/google.png" alt="" className='size-16' />
                    <p className='text-secondary text-2xl font-semibold group-hover:text-white text-center'>{data.title}</p>
                    <button className='bg-secondary text-white px-4 py-3 rounded-xl group-hover:bg-primary'>Explore More</button>
                </div>
            </Link>
        </>
    )
}

export default TopCategoriesCard