import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OfferCards = ({ data }) => {

  return (
    <div class="flip-container w-80 h-[24rem] relative my-3 ">
      <div class="flipper absolute w-80 h-[24rem] object-fit">
        {/* <!-- Front of the card --> */}
        <div class="front flex flex-col justify-between rounded-xl">
          <LazyLoadImage src={data.img} alt={data.title} className='w-max h-full rounded-t-xl' />
          <div className='flex flex-row justify-start bg-gray-100 items-center rounded-b-xl'>
            <LazyLoadImage  className='size-16 bg-secondary rounded-bl-xl p-2' src={data.icon} alt={data.title} />
            <p className='w-4/5 px-4 font-bold'>{data.title}</p>
          </div>
        </div>
        {/* <!-- Back of the card --> */}
        <div class="back w-80 h-[30rem] flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${data.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className='bg-primary w-full h-full flex flex-col justify-center items-start p-10 bg-opacity-80 rounded-xl'>
            <p>{data.description}</p>
            <p className='text-secondary font-bold'>Explore More...</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OfferCards