
const NotFoundPage = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center">
                <p className="text-8xl font-extrabold text-primary">404</p>

                <h2 className="mt-4 text-3xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-500 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn&apos;t exist or
                    may have been moved.
                </p>

                <a
                    href="/"
                    className="inline-block mt-6 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;

