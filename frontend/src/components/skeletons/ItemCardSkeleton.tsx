export default function ItemCardSkeleton() {
    return (
        <div
            className="pb-5 bg-white rounded-md shadow-sm"
            aria-busy="true"
            aria-label="Loading item"
        >
            <div className="relative">
                <div
                    className="rounded-t-md w-full bg-gray-400 aspect-[10/9] animate-pulse"
                    role="status"
                    aria-hidden="true"
                />
                <div className="absolute py-4 bg-gray-400 rounded-md w-22 top-2 right-2 z-1 animate-pulse" aria-hidden="true" />
            </div>

            <div className="px-4 mt-4">
                <div className="w-[80%] py-3 bg-gray-400 animate-pulse rounded-md" aria-hidden="true" />
                <div className="flex flex-wrap justify-between mt-6">
                    <div className="py-4 bg-gray-400 rounded-md w-22 animate-pulse" aria-hidden="true" />
                    <div className="flex items-center gap-x-2">
                        <div className="bg-gray-400 rounded-full size-6 animate-pulse" aria-hidden="true" />
                        <div className="py-3 bg-gray-400 rounded-md w-18 animate-pulse" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    );
}
