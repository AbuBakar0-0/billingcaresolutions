import React from 'react'

function ServicesCard() {
    return (
        <>
            <div className='bg-white w-full md:w-[32%] flex flex-col justify-start items-start shadow-md rounded-2xl hover:shadow-2xl p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                </svg>
                <p className='text-xl font-semibold text-secondary'>Medical Billing</p>
                <div className='w-full h-[1px] bg-grays my-4'></div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur aut modi sunt dolorem suscipit dignissimos quasi porro, omnis vitae neque voluptas illo accusantium impedit quibusdam fugit consectetur veniam autem?</p>
            </div>
        </>
    )
}

export default ServicesCard