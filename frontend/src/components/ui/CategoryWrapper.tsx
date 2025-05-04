import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';



function CategoryItem() {
    return <div>
        <Link to={ROUTES.home}></Link>
    </div>
}


function CategoryList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            Category list
        </div>
    )
}




export default function CategoryWrapper() {
    return (
        <div>
            <CategoryList />
        </div>
    )
}
