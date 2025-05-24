import ItemCardSkeleton from '@components/skeletons/ItemCardSkeleton';
import CategoryWrapper from '@components/ui/category/CategoryWrapper';
import ItemCard from '@components/ui/ItemCard';
import { type CategoryName } from '@constants/categories';
import { useCategoryItems } from '@hooks/useCategoryItems';
import { useParams } from 'react-router-dom'

export default function CategoryPage() {

    const params = useParams<{ category?: CategoryName }>();
    const category = params.category ?? "breakfast";

    const { data: categoryItems, isLoading, isError } = useCategoryItems(category);

    return (
        <section className='px-4 py-4 sm:px-8 md:px-10 lg:px-12'>
            <h1 className='py-6 text-3xl font-semibold text-center capitalize sm:text-4xl md:text-5xl lg:text-6xl md:py-9 text-secondary sm:leading-relaxed'>
                {category}
            </h1>
            <CategoryWrapper />

            <div className='container mx-auto mt-12'>
                {isError && (
                    <div>
                        <p className="text-xl text-gray-600">Error loading items</p>
                    </div>
                )}

                {!isError && isLoading && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12'>
                        {
                            Array.from({ length: 6 }).map((_, index) => (
                                <ItemCardSkeleton key={index} />
                            ))
                        }
                    </div>
                )}

                {!isError && !isLoading && categoryItems && categoryItems.length > 0 && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8'>
                        {categoryItems.map(item => (
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

                {!isError && !isLoading && (!categoryItems || categoryItems.length === 0) && (
                    <div>
                        <p className="text-xl text-gray-600">No items found</p>
                    </div>
                )}
            </div>
        </section>
    )
}
