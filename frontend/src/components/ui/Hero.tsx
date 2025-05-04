import { IoSearchOutline } from "react-icons/io5"


export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center w-full py-6">
            <h1 className='mt-5 mb-8 text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-bold leading-normal xl:leading-relaxed text-[#2A3342]'>Your Go-To Blog Template for Food <span className='text-orange-400'>Influencers</span></h1>

            <form action="/search" className="bg-white w-full rounded-md flex px-3 items-center gap-x-1 md:max-w-lg shadow-xs">
                <IoSearchOutline className="size-5 text-neutral-500" />
                <input type="text"
                    id="search"
                    name="q"
                    placeholder="What would you like to cook today?"
                    className="w-full pl-2 py-2.5 outline-none"
                    required
                />
            </form>
        </div>
    )
}
