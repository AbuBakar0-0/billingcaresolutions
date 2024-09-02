import React from 'react'
import Heading from './../../components/Heading';
import ServicesCard from '../../components/About/ServicesCard';

function OurBestServices() {

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-3 p-10'>
                <Heading data={'Our Best Services'} />
                <p className='w-full md:w-1/2 text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolore earum ullam nam quidem distinctio nulla? Est cupiditate odio ea. Laudantium sint, aperiam ipsum aliquid odio voluptatibus accusamus quod accusantium.
                </p>
                <div className='w-full flex flex-wrap justify-between items-center my-5 gap-3'>
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </div>

            </div>
        </>
    )
}

export default OurBestServices