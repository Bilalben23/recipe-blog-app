import CategoryWrapper from '@components/ui/category/CategoryWrapper';
import { CategoryName } from '@constants/categories';
import { useParams } from 'react-router-dom'

export default function CategoryPage() {

    const { category } = useParams<{ category: CategoryName }>();

    if (!category) {
        return <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600">No category provided</p>
        </div>
    }


    return (
        <div className='px-4 sm:px-8 md:px-10 lg:px-12 py-4'>
            <h1 className='text-center capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-6 md:py-9 font-semibold text-secondary sm:leading-relaxed'>
                {category}
            </h1>
            <CategoryWrapper />
        </div>
    )
}
