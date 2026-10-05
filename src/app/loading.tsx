
const Loading = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Spinner */}
                <div className="flex justify-center mb-6">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-primary"></div>
                </div>

                {/* Loading text */}
                <h2 className="text-center text-2xl font-bold text-gray-800">
                    Loading...
                </h2>

                <p className="mt-2 text-center text-gray-500">
                    Please wait while we load the page.
                </p>

                {/* Skeleton */}
                <div className="mt-8 space-y-4">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;

