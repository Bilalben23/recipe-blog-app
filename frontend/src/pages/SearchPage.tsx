import { useSearchItems } from '@hooks/useSearchItems';
import { FormEvent, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');

    const { data: searchResults, isLoading, isError, error } = useSearchItems(query);

    // Submit handler for form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(inputValue.trim());
    };

    // Update query and input value from URL on first load
    useEffect(() => {
        const q = searchParams.get('q');
        if (q) {
            setQuery(q);
            setInputValue(q);
        }
    }, []);

    // Update the URL when query changes
    useEffect(() => {
        if (query) {
            setSearchParams({ q: query });
        }
    }, [query]);


    console.log('searchResults', searchResults);
    console.log('isLoading', isLoading);
    console.log('isError', isError);
    console.log('error', error);

    return (
        <div className="px-6 md:px-10 py-15">
            <h1 className="text-center text-2xl py-10 font-semibold sm:text-3xl md:text-4xl sm:leading-relaxed text-secondary">
                Search for recipes
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white mx-auto w-full rounded-md flex px-3 items-center gap-x-1 md:max-w-lg shadow-xs"
            >
                <IoSearchOutline className="size-5 text-neutral-500" />
                <input
                    type="search"
                    placeholder="What would you like to cook today?"
                    className="w-full pl-2 py-2.5 outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                />
            </form>

            <div className='mt-10'>
                {
                    isLoading
                        ? <div>Loading...</div>
                        : searchResults?.data?.length > 0
                            ? <ul>
                                {
                                    searchResults?.data?.map((item: any) => (
                                        <li key={item._id}>{item.name}</li>
                                    ))
                                }
                            </ul>
                            : <div>No results found</div>
                }
            </div>

        </div>
    );
}
