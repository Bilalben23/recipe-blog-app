import logo from "/assets/logo.svg";
import { Link } from 'react-router-dom';
import { HiBars3BottomRight } from "react-icons/hi2";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

const menuItems = [
    "recipe",
    "resources",
    "about",
    "contact"
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="flex items-center justify-between px-6 md:px-12 py-2 gap-x-5 border">
            <Link to="/" className="p-2 shrink-0">
                <img src={logo} className='w-18 md:w-20' alt="logo" />
            </Link>
            <nav className='hidden flex-1 md:flex justify-center'>
                <ul className='flex items-center gap-x-3'>
                    {
                        menuItems.map((item) => (
                            <li key={item}>
                                <Link to={`/${item}`} className="capitalize p-2 inline-block font-semibold">{item}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* for mobile */}
            <div className="md:hidden">
                <button className="p-1 cursor-pointer" onClick={toggleMenu}>
                    <HiBars3BottomRight className="size-8 sm:size-9" />
                </button>

                <MobileNavbar
                    isOpen={isOpen}
                    menuItems={menuItems}
                    closeMenu={toggleMenu}
                />
            </div>

            <div className='hidden md:flex items-center gap-x-2 font-medium shrink-0'>
                <button className="text-secondary px-4 py-2 rounded">Log In</button>
                <button className='text-secondary px-4 py-2 rounded'>Sign Up</button>
            </div>
        </header>
    )
}
