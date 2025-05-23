import { Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';
import { APP_ROUTES } from "@constants/routes";

export default function NotFound() {
    return (
        <main className="relative grid px-6 py-12 border place-items-center sm:py-32 lg:px-8 not-found-bg">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 text-center text-white">
                <p className="text-3xl font-semibold text-btnColor">404</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="flex items-center justify-center mt-10 gap-x-6">
                    <Link
                        to={APP_ROUTES.home}
                        className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs bg-btnColor"
                    >
                        Go back home
                    </Link>
                    <Link to="/contact" className="flex items-center text-sm font-semibold text-white hover:underline">
                        Contact support <FiArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
