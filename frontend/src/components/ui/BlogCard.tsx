import { FC } from 'react'

type BlogProps = {
    title: string
    image: string
    summary: string
    sourceUrl: string
}

const BlogCard: FC<BlogProps> = ({ title, image, summary, sourceUrl }) => {

    return (
        <div className="flex flex-col max-w-sm overflow-hidden bg-white rounded shadow-lg">
            <img
                src={image}
                alt={title}
                className="object-cover w-full h-52"
                loading="lazy"
            />
            <div className="flex flex-col flex-grow p-4">
                <h2 className="mb-2 text-lg font-semibold text-gray-900">{title}</h2>
                <p className="mb-4 text-sm text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: summary }} />
                <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 mt-auto text-center text-white transition rounded shadow-xs hover:shadow-none bg-btnColor hover:bg-btnColor/90"
                >
                    Read More
                </a>
            </div>
        </div>
    )
}

export default BlogCard
