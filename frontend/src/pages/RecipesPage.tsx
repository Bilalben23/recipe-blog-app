import ItemCardSkeleton from '@components/skeletons/ItemCardSkeleton';
import ErrorMessage from '@components/ui/ErrorMessage';
import ItemCard from '@components/ui/ItemCard';
import { useItems } from '@hooks/useItems';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function RecipesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPageParam = parseInt(searchParams.get('page') || '1', 10);
    const [page, setPage] = useState(currentPageParam);

    const {
        data: { data: recipes, pagination } = {},
        isLoading,
        isError,
        error
    } = useItems({ limit: 5, page });


    // Keep URL in sync with page state
    useEffect(() => {
        setSearchParams({ page: String(page) });
    }, [page, setSearchParams]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);


    return (
        <section className='px-6 py-20 lg:px-12'>
            <h1 className="text-2xl font-bold text-center text-secondary sm:text-3xl md:text-4xl sm:leading-snug">
                All Recipes
            </h1>

            {
                isError
                    ? <ErrorMessage
                        title={error.name || 'Error fetching recipes'}
                        message={error instanceof Error ? error.message : 'An error occurred while fetching recipes.'}
                    />
                    : <div className='grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8'>
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, index) => <ItemCardSkeleton key={index} />)
                        ) : recipes?.length ? (
                            recipes.map(item => (
                                <ItemCard
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    thumbnail_image={item.thumbnail_image}
                                    category_name={item.category.name}
                                    prep_time={item.more.prep_time}
                                    difficulty={item.more.difficulty}
                                />
                            ))
                        ) : (
                            <p className="text-center col-span-full text-neutral-600">
                                No results found.
                            </p>
                        )}
                    </div>
            }

            {
                pagination && pagination.totalPages > 1 && (
                    <div className='flex flex-wrap items-center justify-center gap-2 mt-10'>
                        {
                            Array.from({ length: pagination.totalPages }, (_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        className={`px-4 cursor-pointer py-2 rounded transition ${pagination.page === pageNumber
                                            ? 'bg-secondary text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                        disabled={pagination.page === pageNumber}
                                        onClick={() => setPage(pageNumber)}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })
                        }
                    </div>
                )
            }
        </section>
    );
}
