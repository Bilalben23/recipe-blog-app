import { useItems } from '@hooks/useItems';
import ItemCard from '../ItemCard';
import { Link } from 'react-router-dom';
import ItemCardSkeleton from '@components/skeletons/ItemCardSkeleton';

export default function LatestRecipes() {
    const {
        data: latestRecipes,
        isLoading,
        isError,
        error,
    } = useItems({ limit: 4 });

    const hasData = latestRecipes && latestRecipes.length > 0;

    return (
        <section className="px-4 mb-12">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl md:text-4xl sm:leading-snug">
                Latest Recipes
            </h2>

            <div className="mt-7">

                {isError && (
                    <p className="text-center text-red-500 col-span-full">
                        {(error as Error)?.message ?? 'Something went wrong.'}
                    </p>
                )}

                {isLoading && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12'>
                        {
                            Array.from({ length: 4 }).map((_, index) => (
                                <ItemCardSkeleton key={index} />
                            ))
                        }
                    </div>
                )}

                {!isLoading && !isError && hasData &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8">
                        {
                            latestRecipes.map((item) => (
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
                }

                {!isLoading && !isError && !hasData && (
                    <p className="text-center text-gray-500 col-span-full">No recipes found.</p>
                )}
            </div>

            {hasData && (
                <div className="mt-12 text-center">
                    <Link
                        to={`/categories/${latestRecipes[0].category.name}`}
                        className="cursor-pointer px-8 rounded-md py-3 font-medium border border-[#9c702a] text-secondary hover:text-white hover:bg-btnColor transition-colors duration-300"
                    >
                        View All Recipes
                    </Link>
                </div>
            )}
        </section>
    );
}
