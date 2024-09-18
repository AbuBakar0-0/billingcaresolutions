import React from 'react'

const DomainCard = ({ data }) => {
    return (
        <>
            <div class="flip-container size-80 relative my-3">
                <div class="flipper absolute size-80 object-fit">
                    {/* <!-- Front of the card --> */}
                    <div class="front flex flex-col justify-center shadow-xl rounded-xl" style={{ backgroundImage: `url("./assets/img.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='bg-gray-800 w-full h-full flex flex-col justify-center items-center p-10 bg-opacity-80 text-white text-3xl gap-4 rounded-xl'>
                            <img src="./assets/google.png" alt="" className='size-20'/>
                            <p>{data.title}</p>
                        </div>
                    </div>

                    {/* <!-- Back of the card --> */}
                    <div class="back w-80 h-[22rem]  flex flex-col justify-center items-start text-white rounded-xl" style={{ backgroundImage: `url("./assets/img.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DomainCard