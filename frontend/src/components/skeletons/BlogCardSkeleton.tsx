export default function BlogCardSkeleton() {
    return (
        <div
            className="pb-5 bg-white rounded-md shadow-sm"
            aria-busy="true"
            aria-label="Loading blog card"
        >
            <div className="relative">
                <div
                    className="w-full bg-gray-400 rounded-t-md h-52 animate-pulse"
                    role="status"
                    aria-hidden="true"
                />
            </div>

            <div className="px-4 mt-4 space-y-3">
                <div
                    className="w-[70%] h-6 bg-gray-400 animate-pulse rounded-md"
                    aria-hidden="true"
                />

                <div className="space-y-2">
                    <div className="w-full h-3 bg-gray-400 rounded-md animate-pulse" aria-hidden="true" />
                    <div className="w-[90%] h-3 bg-gray-400 animate-pulse rounded-md" aria-hidden="true" />
                    <div className="w-[80%] h-3 bg-gray-400 animate-pulse rounded-md" aria-hidden="true" />
                </div>

                <div className="w-full bg-gray-400 rounded-md h-9 animate-pulse" aria-hidden="true" />
            </div>
        </div>
    );
}
