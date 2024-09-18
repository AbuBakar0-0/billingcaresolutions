import React from 'react'

const OfferCards = ({ data }) => {

  return (
    <div class="flip-container w-72 h-[22rem] relative my-3">
      <div class="flipper absolute w-72 h-[22rem] object-fit">
        {/* <!-- Front of the card --> */}
        <div class="front flex flex-col justify-between rounded-xl">
          <img src={data.img} alt={data.title} className='w-max h-full rounded-t-xl' />
          <div className='flex flex-row justify-start bg-gray-100 items-center rounded-xl'>
            <img className='w-16 h-16 p-4  bg-secondary rounded-bl-xl' src={data.icon} alt={data.title} />
            <p className='w-4/5 px-4 font-bold'>{data.title}</p>
          </div>
        </div>
        {/* <!-- Back of the card --> */}
        <div class="back w-80 h-[22rem]  flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${data.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
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