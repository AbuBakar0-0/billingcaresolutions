import React from 'react'

const HeroSlide = ({ title, description, link, image }) => {
    return (
        <div className='w-full h-[37rem] p-10 flex flex-col justify-center items-start' style={{ backgroundImage: `url("${image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
            <div className='w-1/2 slide-content'>
                <p className='text-4xl font-semibold'>
                    {title}
                </p>
                <p className='text-lg'>
                    {description}
                </p>
                <div className='flex flex-row space-x-4 justify-start items-center'>
                    <button className='px-4 py-3 rounded-full bg-primary text-white font-custom flex flex-row justify-center items-center'>
                        <p>Explore More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>


                    </button>
                    <a href={link}>
                        <button className='p-4 bg-[#ff2f20] rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="size-6 fill-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSlide 