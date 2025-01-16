import React from 'react'

const OfferCards = ({ data }) => {

  return (
    <div class="flip-container w-64 h-[20rem] relative my-3 ">
      <div class="flipper absolute w-64 h-[20rem] object-fit">
        {/* <!-- Front of the card --> */}
        <div class="front flex flex-col justify-between rounded-xl">
          <img src={data.img} alt={data.title} className='w-max h-full rounded-t-xl' />
          <div className='flex flex-row justify-start bg-gray-100 items-center rounded-b-xl'>
            <img  className='size-16 bg-secondary rounded-bl-xl p-2' src={data.icon} alt={data.title} />
            <p className='w-4/5 px-4 font-bold'>{data.title}</p>
          </div>
        </div>
        {/* <!-- Back of the card --> */}
        <div class="back w-64 h-[20rem] flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("${data.img}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className='bg-secondary w-full h-full flex flex-col justify-center items-center p-5 bg-opacity-50 rounded-xl'>
            <p className='text-justify tracking-tighter'>{data.description}</p>
            <p className='text-primary font-bold bg-white rounded-md w-full p-2 mt-4'>Explore More...</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OfferCards