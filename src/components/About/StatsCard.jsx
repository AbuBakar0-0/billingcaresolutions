import React from 'react'

const StatsCard=({data})=> {
  return (
    <>
        <div className='size-56 flex flex-col justify-center items-center gap-2 bg-[#e9f2fa] rounded-md text-center'>
            <img src="./assets/google.png" alt="" className='size-10'/>
            <p className='text-xl font-bold text-secondary'>{data.description}</p>
            <p>{data.title}</p>
        </div>
    </>
  )
}

export default StatsCard