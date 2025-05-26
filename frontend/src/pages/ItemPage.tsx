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
        <section className='container mx-auto mt-6'>
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
                        ) : recipe && <article className='p-4 bg-white md:p-10'>
                            <div className='flex flex-col md:flex-row gap-7 md:gap-10'>
                                <div className='relative flex-1'>
                                    <img
                                        src={recipe.thumbnail_image}
                                        alt={recipe.name}
                                        className='w-full aspect-[10/9] object-cover rounded-lg'
                                    />
                                    <span
                                        className='absolute z-10 px-3 py-1 text-sm font-semibold capitalize rounded-full top-2 right-2'
                                        style={{
                                            backgroundColor: findCategory(recipe.category.name)?.bgColor || "#fff",
                                            color: findCategory(recipe.category.name)?.color || "#000"
                                        }}>{recipe.category.name}</span>
                                </div>

                                <div className='flex-1'>
                                    <div>
                                        <h1 className='flex items-center gap-x-3'>
                                            <span className='mb-2 text-2xl font-semibold capitalize sm:text-3xl md:text-4xl'>{recipe.name}</span>
                                            <span
                                                className={`text-sm shadow-xs px-2 py-1 rounded-4xl ${difficultyLevels[recipe.more.difficulty].bgColor}`}
                                            >{recipe.more.difficulty}</span>
                                        </h1>
                                        <p className='text-lg leading-relaxed'>{recipe.description}</p>
                                    </div>
                                    <div className='mt-4 ml-4'>
                                        <p className='text-xl font-semibold'>Preparation Time</p>
                                        <ul className='p-2 ml-5 list-disc'>
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
                                    <div className='mt-4 ml-4'>
                                        <p className='text-xl font-semibold'>Ingredients</p>
                                        <ul className='p-2 ml-5 list-disc'>
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

                            <hr className='w-3/4 mx-auto text-gray-200 my-7' />

                            <div className='px-4' >
                                <div>
                                    <p className='text-xl font-semibold'>Instructions</p>
                                    <ol className='p-2 ml-5 list-decimal'>
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
                                        <p className='mb-2 text-xl font-semibold'>Tags</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {recipe.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className='px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full'
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}


                                <div className='mt-6'>
                                    <p className='mb-1 text-xl font-semibold'>Additional Information</p>
                                    <p className='mb-2 text-gray-600'>
                                        Here are some extra details about the recipe including how many people it serves and where it originally came from.
                                    </p>
                                    <ul className='p-2 ml-5 list-disc'>
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
                                        <p className='mb-4 text-xl font-semibold'>Comments <span className='text-sm font-normal'>({recipe.comments.length})</span></p>
                                        <ul className='space-y-4'>
                                            {recipe.comments.map((comment, idx) => (
                                                <li
                                                    key={idx}
                                                    className='flex items-start gap-4 p-4 rounded-lg shadow-sm bg-gray-50'
                                                >
                                                    <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 font-semibold text-white uppercase bg-blue-500 rounded-full'>
                                                        {comment.user[0]}
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold text-gray-800'>{comment.user}</p>
                                                        <p className='mt-1 text-gray-700'>{comment.comment}</p>
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
