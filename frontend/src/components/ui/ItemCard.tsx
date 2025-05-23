import { categories } from '@constants/categories'
import { FC } from 'react'
import { GoClock } from "react-icons/go";
import { Link } from 'react-router-dom';


type ItemCardProps = {
    id: string,
    name: string,
    thumbnail_image: string,
    category_name: string,
    prep_time: string,
    difficulty: string
}


const ItemCard: FC<ItemCardProps> = ({ id, name, thumbnail_image, category_name, prep_time, difficulty }) => {

    const categoryStyles = categories.find(c => c.name === category_name);


    return (
        <div className='shadow hover:shadow-md transition duration-300 bg-white pb-5 rounded-md'>
            <Link to={`/items/${id}`} className='relative'>
                <img
                    src={thumbnail_image}
                    alt={name}
                    className='rounded-t-md w-full aspect-[10/9]'
                    loading='lazy'
                />
                <div className='absolute z-1 top-2 right-2 bg-white rounded-md text-sm px-2 py-1 shadow font-medium'>
                    {difficulty}
                </div>
            </Link>
            <div className='px-4'>
                <p className='font-semibold text-lg mt-2 capitalize line-clamp-2'>{name}</p>

                {/* category and reading time */}
                <div className='flex justify-between items-center flex-wrap mt-4'>
                    <button
                        type='button'
                        className='px-2 py-1 font-medium rounded-md text-sm shadow-md hover:shadow-lg transition duration-300 capitalize'
                        style={{
                            backgroundColor: categoryStyles?.bgColor || "#fff",
                            color: categoryStyles?.color || "#000"
                        }}>
                        {category_name}
                    </button>

                    <div className='flex items-center gap-x-1'>
                        <GoClock />
                        <span className='text-sm'>{prep_time}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemCard;
