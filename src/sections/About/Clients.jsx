import React from 'react'

function Clients() {
  return (
    <>
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-3 my-10 p-10'>
            <img src="./assets/about-us/happy_clients.webp" alt="" className='w-1/2 p-10' />
            <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-3'>
            <p className='text-3xl font-semibold text-secondary'>Reasons clients remain with us</p>
            <div className={`bg-primary w-2/3 h-[0.2rem]`}></div>
            <p>
            At Billing Care Solutions, we boast an exceptional 99% client retention rate. This distinction arises from our specialized approach, offering tailored solutions and services meticulously designed for your medical practice.
            </p>
            </div>
        </div>
    </>
  )
}

export default Clients