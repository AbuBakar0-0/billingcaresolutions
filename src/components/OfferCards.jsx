import React from 'react'

const OfferCards = ({ data }) => {

  return (
    <div class="flip-container w-80 h-80 relative m-4">
      <div class="flipper absolute w-full h-full object-fit">
        {/* <!-- Front of the card --> */}
        <div class="front flex flex-col justify-between">
          <img src={data.img} alt="" className='bg-green-400 w-full h-full' />
          <div className='flex flex-row justify-start bg-gray-300 items-center'>
            <div className='w-20 h-20 bg-gray-400'></div>
            <p className='w-max p-4'>{data.title}</p>
          </div>
        </div>
        {/* <!-- Back of the card --> */}
        <div class="back w-full h-full bg-secondary flex flex-col justify-center items-start p-10">
          <p>{data.description}</p>
          <p className='text-primary'>Explore More...</p>
        </div>
      </div>
    </div>
  );
}

export default OfferCards