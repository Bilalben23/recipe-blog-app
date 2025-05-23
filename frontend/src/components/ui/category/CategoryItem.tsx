import { Link } from 'react-router-dom';
import { FC } from 'react';

type CategoryItemProps = {
    name: string;
    href: string;
    bgColor: string;
    color: string;
};

const CategoryItem: FC<CategoryItemProps> = ({ name, href, bgColor, color }) => {
    const style = {
        backgroundColor: bgColor,
        color,
        borderColor: color,
    };

    return (
        <div>
            <Link
                to={href}
                className="px-4 py-2 text-center uppercase rounded-full shadow-xs"
                style={style}
            >
                {name}
            </Link>
        </div>
    );
};

export default CategoryItem;
