import ItemDetailsSkeleton from '@components/skeletons/ItemDetailsSkeleton';
import ErrorMessage from '@components/ui/ErrorMessage';
import { categories } from '@constants/categories';
import { difficultyLevels } from '@constants/difficultyLevels';
import { useItem } from '@hooks/useItem'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemPage() {
    const { id } = useParams<{ id: string }>();

    const { data: recipe, isLoading, isError, error } = useItem(id || "");


    const findCategory = (category_name: string) => {
        return categories.find(c => c.name === category_name);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className='mt-6 container mx-auto'>
            {
                isLoading
                    ? (
                        <ItemDetailsSkeleton />
                    ) : isError
                        ? (
                            <ErrorMessage
                                title={error.name || "Unable to load item"
                                } message={error.message || 'An unexpected error occurred.'}
                            />
                        ) : recipe && <article className='bg-white p-4 md:p-10'>
                            <div className='flex flex-col md:flex-row gap-7 md:gap-10'>
                                <div className='flex-1 relative'>
                                    <img
                                        src={recipe.thumbnail_image}
                                        alt={recipe.name}
                                        className='w-full aspect-[10/9] object-cover rounded-lg'
                                    />
                                    <span
                                        className='absolute top-2 right-2 z-10 px-3 py-1 rounded-full font-semibold text-sm capitalize'
                                        style={{
                                            backgroundColor: findCategory(recipe.category.name)?.bgColor || "#fff",
                                            color: findCategory(recipe.category.name)?.color || "#000"
                                        }}>{recipe.category.name}</span>
                                </div>

                                <div className='flex-1'>
                                    <div>
                                        <h1 className='flex items-center gap-x-3'>
                                            <span className='font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 capitalize'>{recipe.name}</span>
                                            <span
                                                className={`text-sm shadow-xs px-2 py-1 rounded-4xl ${difficultyLevels[recipe.more.difficulty].bgColor}`}
                                            >{recipe.more.difficulty}</span>
                                        </h1>
                                        <p className='text-lg leading-relaxed'>{recipe.description}</p>
                                    </div>
                                    <div className='mt-4 ml-4'>
                                        <p className='font-semibold text-xl'>Preparation Time</p>
                                        <ul className='list-disc ml-5 p-2'>
                                            <li className='mb-2'>
                                                <span className='font-semibold'>Total: </span>
                                                <span className='italic'>
                                                    {parseInt(recipe.more.prep_time) + parseInt(recipe.more.cook_time)} mins
                                                </span>
                                            </li>
                                            <li className='mb-2'>
                                                <span className='font-semibold'>Preparation: </span>
                                                <span className='italic'>{recipe.more.prep_time}</span>
                                            </li>
                                            <li>
                                                <span className='font-semibold'>Cooking: </span>
                                                <span className='italic'>{recipe.more.cook_time}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='ml-4 mt-4'>
                                        <p className='font-semibold text-xl'>Ingredients</p>
                                        <ul className='list-disc ml-5 p-2'>
                                            {
                                                recipe.ingredients.map((ingredient, index) => (
                                                    <li key={index} className='mb-2'>
                                                        <span className='font-semibold'>{ingredient.name}: </span>
                                                        <span className='italic'>{ingredient.quantity}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <hr className='my-7 w-3/4 mx-auto text-gray-200' />

                            <div className='px-4' >
                                <div>
                                    <p className='font-semibold text-xl'>Instructions</p>
                                    <ol className='list-decimal ml-5 p-2'>
                                        {
                                            recipe.instructions.map((instruction, index) => (
                                                <li key={index} className='mb-2'>
                                                    <span className='font-semibold'>{instruction.stepTitle}</span>: {instruction.stepDescription}
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </div>

                                {/* Tags Section */}
                                {recipe.tags.length > 0 && (
                                    <div className='mt-6'>
                                        <p className='font-semibold text-xl mb-2'>Tags</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {recipe.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}


                                <div className='mt-6'>
                                    <p className='font-semibold text-xl mb-1'>Additional Information</p>
                                    <p className='text-gray-600 mb-2'>
                                        Here are some extra details about the recipe including how many people it serves and where it originally came from.
                                    </p>
                                    <ul className='list-disc ml-5 p-2'>
                                        <li>
                                            <span className='font-semibold'>Servings: </span>
                                            <span className='italic'>{recipe.more.servings}</span>
                                        </li>
                                        <li>
                                            <span className='font-semibold'>Source: </span>
                                            {/^https?:\/\//.test(recipe.more.source) ? (
                                                <a
                                                    href={recipe.more.source}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='italic text-blue-600 underline'
                                                >
                                                    {recipe.more.source}
                                                </a>
                                            ) : (
                                                <span className='italic'>{recipe.more.source}</span>
                                            )}
                                        </li>
                                    </ul>
                                </div>

                                {/* Comments Section */}
                                {recipe.comments.length > 0 && (
                                    <div className='mt-6'>
                                        <p className='font-semibold text-xl mb-4'>Comments <span className='text-sm font-normal'>({recipe.comments.length})</span></p>
                                        <ul className='space-y-4'>
                                            {recipe.comments.map((comment, idx) => (
                                                <li
                                                    key={idx}
                                                    className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm'
                                                >
                                                    <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold uppercase'>
                                                        {comment.user[0]}
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold text-gray-800'>{comment.user}</p>
                                                        <p className='text-gray-700 mt-1'>{comment.comment}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </article>
            }
        </section>
    )
}
