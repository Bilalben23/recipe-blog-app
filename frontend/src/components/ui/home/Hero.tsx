import { FormEvent, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";


export default function Hero() {
    const navigate = useNavigate();
    const [query, setQuery] = useState<string>("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        navigate(`/search?q=${query}`);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full py-6">
            <h1 className='mt-5 mb-8 text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-bold leading-normal xl:leading-relaxed text-[#2A3342] max-w-4xl'>Your Go-To Blog Template for Food <span className='text-orange-400'>Influencers</span></h1>

            <form onSubmit={handleSubmit} className="flex items-center w-full px-3 bg-white rounded-md shadow-xs gap-x-1 md:max-w-lg">
                <IoSearchOutline className="size-5 text-neutral-500" />
                <input
                    type="search"
                    placeholder="What would you like to cook today?"
                    className="w-full pl-2 py-2.5 outline-none"
                    required
                    value={query}
                    onChange={(e => setQuery(e.target.value))}
                />
            </form>
        </div>
    )
}
