export default function ItemDetailsSkeleton() {
    return (
        <article className='bg-white p-4 md:p-10 animate-pulse'>
            <div className='flex flex-col md:flex-row gap-7 md:gap-10'>
                <div className='flex-1 space-y-4 relative'>
                    <div className='w-full aspect-[10/9] bg-gray-400 rounded-lg'></div>
                    <div className='absolute top-2 right-2 w-24 h-6 rounded-full bg-gray-400'></div>
                </div>

                <div className='flex-1 space-y-5'>
                    <div className='space-y-2'>
                        <div className='h-7 bg-gray-400 rounded w-3/4'></div>
                        <div className='h-5 bg-gray-400 rounded w-full'></div>
                    </div>

                    <div className='mt-4 ml-4 space-y-2'>
                        <div className='h-6 bg-gray-400 rounded w-1/2'></div>
                        <div className='space-y-1'>
                            <div className='h-4 bg-gray-400 rounded w-3/4'></div>
                            <div className='h-4 bg-gray-400 rounded w-2/3'></div>
                            <div className='h-4 bg-gray-400 rounded w-1/2'></div>
                        </div>
                    </div>

                    <div className='ml-4 mt-4 space-y-2'>
                        <div className='h-6 bg-gray-400 rounded w-1/2'></div>
                        <div className='space-y-1'>
                            <div className='h-4 bg-gray-300 rounded w-5/6'></div>
                            <div className='h-4 bg-gray-300 rounded w-2/3'></div>
                            <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='my-7 w-3/4 mx-auto text-gray-200' />

            <div className='px-4 space-y-4'>
                <div>
                    <div className='h-6 bg-gray-400 rounded w-1/3'></div>
                    <div className='space-y-2 mt-2'>
                        <div className='h-4 bg-gray-300 rounded w-full'></div>
                        <div className='h-4 bg-gray-300 rounded w-5/6'></div>
                        <div className='h-4 bg-gray-300 rounded w-2/3'></div>
                    </div>
                </div>

                <div>
                    <div className='h-6 bg-gray-400 rounded w-1/3'></div>
                    <div className='space-x-2 mt-2 flex flex-wrap'>
                        <div className='w-16 h-6 bg-gray-300 rounded-full'></div>
                        <div className='w-16 h-6 bg-gray-300 rounded-full'></div>
                        <div className='w-16 h-6 bg-gray-300 rounded-full'></div>
                    </div>
                </div>

                <div>
                    <div className='h-6 bg-gray-400 rounded w-1/3'></div>
                    <div className='space-y-1 mt-2'>
                        <div className='h-4 bg-gray-300 rounded w-1/2'></div>
                        <div className='h-4 bg-gray-300 rounded w-2/3'></div>
                    </div>
                </div>

                <div>
                    <div className='h-6 bg-gray-400 rounded w-1/3'></div>
                    <div className='space-y-3 mt-3'>
                        <div className='flex gap-4 items-start'>
                            <div className='w-10 h-10 rounded-full bg-gray-400'></div>
                            <div className='space-y-1 w-full'>
                                <div className='h-4 bg-gray-300 rounded w-1/4'></div>
                                <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-start'>
                            <div className='w-10 h-10 rounded-full bg-gray-400'></div>
                            <div className='space-y-1 w-full'>
                                <div className='h-4 bg-gray-300 rounded w-1/3'></div>
                                <div className='h-4 bg-gray-300 rounded w-2/3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
