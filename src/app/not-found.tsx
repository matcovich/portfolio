export default function GlobalNotFound() {
    return (
        <html>
            <body className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
                <span className="text-[120px] leading-none font-extralight text-purple-400">404</span>
                <h1 className="text-3xl font-bold mt-2 mb-4">Page not found</h1>
                <a
                    href="/"
                    className="px-10 py-2 rounded-md border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
                >
                    Back to home
                </a>
            </body>
        </html>
    );
}
