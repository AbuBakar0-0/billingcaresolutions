import React from 'react'

const StatsCard=({title,description,img})=> {
  return (
    <>
        <div className='size-56 flex flex-col justify-center items-center gap-2 bg-[#e9f2fa] rounded-md text-center'>
            <img src={img} alt="" className='size-10'/>
            <p className='text-xl font-bold text-secondary'>{description}</p>
            <p>{title}</p>
        </div>
    </>
  )
}

export default StatsCard