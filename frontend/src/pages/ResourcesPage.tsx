import BlogCardSkeleton from '@components/skeletons/BlogCardSkeleton';
import BlogCard from '@components/ui/BlogCard';
import ErrorMessage from '@components/ui/ErrorMessage';
import { useRecipeBlogs } from '@hooks/useRecipeBlogs';
import { useEffect } from 'react';

export default function ResourcesPage() {
    const { data: blogs, isLoading, isError, error } = useRecipeBlogs();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className='px-4 py-4 sm:px-8 md:px-10 lg:px-12'>
            <h1 className="text-2xl font-bold text-center text-secondary sm:text-3xl md:text-4xl sm:leading-snug">
                Resources
            </h1>

            <article className='py-6 sm:py-12'>
                <div className='container mx-auto space-y-8'>
                    <div className='max-w-3xl mx-auto mb-12 space-y-4 text-center'>
                        <h2 className='text-3xl font-semibold'>Discover Delicious Recipes and Cooking Tips</h2>
                        <p className='text-gray-700'>
                            Explore a curated collection of recipe blogs designed to inspire your next meal.
                            From quick weekday dinners to gourmet dishes, find tips, nutrition facts, and
                            step-by-step guides to enhance your cooking experience.
                        </p>
                    </div>

                    {
                        isError
                            ? <ErrorMessage
                                title={error.name || 'Error fetching blogs'}
                                message={error instanceof Error ? error.message : 'Failed to load blogs.'}
                            />
                            : isLoading
                                ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8'>
                                    {
                                        Array.from({ length: 6 }).map((_, index) => (
                                            <BlogCardSkeleton key={index} />
                                        ))
                                    }
                                </div>
                                : blogs && blogs.length > 0 && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8'> {

                                    blogs.map(blog => (
                                        <BlogCard
                                            key={blog.id}
                                            {...blog}
                                        />
                                    ))
                                }
                                </div>
                    }
                </div>
            </article>
        </section >
    );
}
