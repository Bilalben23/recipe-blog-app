import { categories } from '@constants/categories';
import CategoryItem from './CategoryItem';

export default function CategoryList() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8">
            {
                categories.map((category) => (
                    <CategoryItem
                        key={category.name}
                        name={category.name}
                        href={`/categories/${category.name}`}
                        bgColor={category.bgColor}
                        color={category.color}
                    />
                ))
            }
        </div>
    );
};

