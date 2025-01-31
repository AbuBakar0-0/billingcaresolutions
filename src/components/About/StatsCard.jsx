import React from 'react'

const StatsCard = ({ title, description, img }) => {
  return (
    <>
      <div className='w-56 min-h-[17rem] flex flex-col justify-center items-center gap-2 bg-[#e9f2fa] rounded-md text-center p-10'>
        <div className='w-full flex justify-center items-center'>
          <img src={img} alt="Billing Care Solutions" className='size-20' />
        </div>
        <p className='text-lg font-bold text-secondary h-12 flex justify-center items-center'>{description}</p>
        <p>{title}</p>
      </div>
    </>
  )
}

export default StatsCard