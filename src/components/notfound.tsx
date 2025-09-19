import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex bg-gray-800 text-gray-100 gap-4 flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="mb-2">Oops! Page not found.</p>
            <Link
                to="/"
                className="underline text-blue-100 hover:text-blue-300"
            >
                Return to Home
            </Link>
        </div>
    );
}
