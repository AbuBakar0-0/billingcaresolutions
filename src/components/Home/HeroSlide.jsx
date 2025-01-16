import React from 'react'

const HeroSlide = ({ title, description, link, image, titleColor, descriptionColor }) => {
    return (
        <div className="w-full h-[26rem] lg:h-[37rem] p-10 flex flex-col justify-center items-start" style={{ backgroundImage: `url("${image}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='md:w-[45%] slide-content flex gap-3 flex-col'>
                <p className="text-lg lg:text-4xl font-black" style={{ color: titleColor }}>
                    {title}
                </p>
                <p className='text-sm lg:text-lg' style={{ color: descriptionColor }}>
                    {description}
                </p>
                <div className='mt-3 flex flex-row space-x-4 justify-start items-center'>
                    <button className='text-xs lg:text-md p-3 lg:px-4 lg:py-3 rounded-full bg-primary text-white flex flex-row justify-center items-center'>
                        <p>Explore More</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    <a href={link}>
                        <button className='p-3 lg:p-4 bg-[#ff2f20] rounded-full'>
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