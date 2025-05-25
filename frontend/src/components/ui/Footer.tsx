import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';



export default function Footer() {
    const date = new Date();

    return (
        <footer className="container px-4 mx-auto bg-white md:px-8 lg:px-12">
            <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="text-teal-600">
                            <Link to="/" className="p-2 shrink-0">
                                <img src={logo} className='w-20 md:w-22' alt="logo" />
                            </Link>
                        </div>

                        <p className="max-w-xs mt-4 text-gray-500">
                            Discover and share your favorite recipes from around the world. Our community helps you cook delicious meals with ease.
                        </p>

                        <ul className="flex gap-6 mt-8">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition-opacity duration-300 hover:opacity-80"
                                >
                                    <FaFacebook size={23} className="text-gray-700" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition-opacity duration-300 hover:opacity-80"
                                >
                                    <FaInstagram size={23} className="text-gray-700" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition-opacity duration-300 hover:opacity-80"
                                >
                                    <FaTwitter size={23} className="text-gray-700" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition-opacity duration-300 hover:opacity-80"
                                >
                                    <FaGithub size={23} className="text-gray-700" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="transition-opacity duration-300 hover:opacity-80"
                                >
                                    <FaDribbble size={23} className="text-gray-700" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium text-gray-900">Recipes</p>

                            <ul className="mt-6 space-y-4 text-sm">

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Popular Recipes </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> New Additions </a>
                                </li>

                                <li>
                                    <Link to="/categories/breakfast" className="text-gray-700 transition hover:opacity-75"> Browse by Category </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog & News </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Support</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75">Contact Us</a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="text-secondary/10" />
                <p className="text-center text-gray-500">&copy; {date.getFullYear()}. Company Name. All rights reserved.</p>
            </div>
        </footer>
    )
}
