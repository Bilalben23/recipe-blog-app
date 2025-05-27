import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <section className="container mx-auto mt-12 mb-24">
            <h1 className="text-2xl font-bold text-center text-secondary sm:text-3xl md:text-4xl sm:leading-snug">
                About Us
            </h1>

            <p className="mx-auto mt-5 mb-20 text-lg text-center md:text-xl text-secondary sm:w-3/4 md:w-1/2">
                Welcome to Vegiffy — your ultimate destination for discovering delicious recipes,
                cooking tips, and kitchen inspiration. We're passionate about helping home cooks explore
                flavors, improve skills, and bring joy to their kitchens.
            </p>

            {/* Hero section */}
            <div
                className="relative flex flex-col items-center justify-center text-center text-white min-h-[80vh] rounded-lg overflow-hidden mb-20"
                style={{
                    backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/bcacfded-198f-4492-899c-da0e4457a247.jpg?crop=1xw:1xh;center,top&resize=980:*')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.6)',
                }}
            >
                <h2 className="max-w-3xl px-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                    Cook Smarter, Eat Better, Share the Joy
                </h2>
                <p className="max-w-2xl px-4 mx-auto mt-4 text-lg text-gray-200 sm:text-xl md:text-2xl">
                    From beginner-friendly meals to chef-inspired dishes, our mission is to make cooking
                    approachable and fun for everyone. Join our vibrant food-loving community and level up
                    your kitchen game.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    <Link
                        to="/recipes"
                        className="inline-block px-6 py-3 font-medium text-white transition duration-300 rounded shadow-sm bg-btnColor/85 hover:bg-btnColor"
                    >
                        Browse Recipes
                    </Link>
                    <Link
                        to="/resources"
                        className="inline-block px-6 py-3 font-medium transition duration-300 border rounded shadow-sm text-btnColor border-btnColor hover:bg-btnColor hover:text-white"
                    >
                        Visit Blog
                    </Link>
                </div>
            </div>

            {/* quotation section */}
            <div className="flex flex-col-reverse items-center justify-between gap-6 p-6 bg-white rounded-md shadow-lg md:p-10 md:flex-row">
                <div className="max-w-xl text-center md:text-left">
                    <blockquote className="relative text-lg italic leading-relaxed text-secondary">
                        <div className="mb-3 text-btnColor">
                            <FaQuoteLeft size={24} />
                        </div>
                        We're a team of creators and food lovers on a mission to make cooking easy, fun, and inspiring for everyone. Explore new flavors, master simple techniques, and enjoy every meal you make.
                        <div className="mt-4 text-btnColor">
                            <FaQuoteRight size={24} className="ml-auto" />
                        </div>
                    </blockquote>
                </div>

                <div className="shrink-0">
                    <a
                        href="#"
                        className="inline-block px-6 py-3 font-medium text-white transition duration-300 rounded shadow-sm bg-btnColor/85 hover:bg-btnColor"
                    >
                        Call Now
                    </a>
                </div>
            </div>

        </section>
    );
}
