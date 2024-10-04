import React from 'react'

const StatsCard = ({ title, description, img }) => {
  return (
    <>
      <div className='size-64 flex flex-col justify-center items-center gap-2 bg-[#e9f2fa] rounded-md text-center p-10'>
        <div className='h-28 w-full flex justify-center items-center'>
          <img src={img} alt="" className='size-24' />
        </div>

        <p className='text-xl font-bold text-secondary h-20'>{description}</p>
        <p>{title}</p>
      </div>
    </>
  )
}

export default StatsCard