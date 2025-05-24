import React from 'react'

export default function Newsletter() {
    return (
        <div className='flex flex-col items-center w-full p-2 mx-auto sm:p-4 md:p-8 md:w-2/3'>
            <h4 className='text-2xl font-semibold text-center sm:text-3xl md:text-4xl text-secondary'>Sign up for my weekly newsletter!</h4>
            <p className='mt-6 text-lg font-light leading-normal text-center text-gray-600'>Weekly emails with my latest recipes, cooking tips and tricks and product recommendations! <br /> You'll be set up in minutes.</p>
            <div className='flex flex-col w-full gap-4 mt-6 md:flex-row'>
                <input
                    type="text"
                    placeholder='Name...'
                    required
                    className='p-4 bg-white rounded shadow-xs outline-none md:min-w-xs'
                />
                <input
                    type="email"
                    placeholder='Email...'
                    required
                    className='p-4 bg-white rounded shadow-xs outline-none md:min-w-xs'

                />
                <button
                    type="submit"
                    className="cursor-pointer rounded-md p-4 font-medium border border-[#9c702a] text-secondary hover:text-white text-nowrap hover:bg-btnColor transition-colors duration-300 shadow-xs"
                >Get Started</button>
            </div>
        </div>
    )
}
