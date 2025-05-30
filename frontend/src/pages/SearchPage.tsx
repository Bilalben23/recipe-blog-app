import ItemCardSkeleton from '@components/skeletons/ItemCardSkeleton';
import ErrorMessage from '@components/ui/ErrorMessage';
import ItemCard from '@components/ui/ItemCard';
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


    return (
        <section className="px-6 md:px-10 py-15">
            <h1 className="py-10 text-2xl font-semibold text-center sm:text-3xl md:text-4xl sm:leading-relaxed text-secondary">
                Search for recipes
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex items-center w-full px-3 mx-auto bg-white rounded-md shadow-xs gap-x-1 md:max-w-lg"
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

            <div className='container mx-auto mt-12'>

                {isError && (
                    <ErrorMessage
                        title="Failed to fetch search results"
                        message={error instanceof Error ? error.message : 'An unexpected error occurred.'}
                    />
                )}

                {isLoading && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8'>
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <ItemCardSkeleton key={index} />
                        ))
                    }
                </div>}

                {!isLoading && !isError && searchResults && searchResults?.length > 0 && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12'>
                        {searchResults.map(item => (
                            <ItemCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                thumbnail_image={item.thumbnail_image}
                                category_name={item.category.name}
                                prep_time={item.more.prep_time}
                                difficulty={item.more.difficulty}
                            />
                        ))}
                    </div>
                )}

                {!isLoading && !isError && (!searchResults || searchResults.length === 0) && (
                    <div className="mt-12 max-w-lg mx-auto text-center border border-neutral-200 rounded-md bg-neutral-50 p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-neutral-700 mb-2">No Results Found</h2>
                        <p className="text-sm text-neutral-600">
                            We couldn't find any results for <span className="italic font-medium">"{query}"</span>.
                            Try refining your search.
                        </p>
                    </div>
                )}
            </div>

        </section>
    );
}
