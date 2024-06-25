import React from 'react'

const HeroSlide = ({ title, description, link, image }) => {
    return (
        <div className='w-screen h-96 p-10 flex flex-col justify-center items-start' style={{ backgroundImage: `url("./assets/img2.jpg")` }}>
            <div className='w-3/5'>
                <p className='text-4xl font-semibold'>
                    {title}
                </p>
                <p className='text-3xl'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default HeroSlide