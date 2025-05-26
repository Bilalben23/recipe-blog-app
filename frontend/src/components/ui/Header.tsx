import logo from "/assets/logo.svg";
import { Link } from 'react-router-dom';
import { HiBars3BottomRight } from "react-icons/hi2";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

const menuItems = [
    "recipes",
    "resources",
    "about",
    "contact"
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="flex items-center justify-between px-6 py-2 md:px-12 gap-x-5 ">
            <Link to="/" className="p-2 shrink-0">
                <img src={logo} className='w-18 md:w-20' alt="logo" />
            </Link>
            <nav className='justify-center flex-1 hidden md:flex'>
                <ul className='flex items-center gap-x-3'>
                    {
                        menuItems.map((item) => (
                            <li key={item}>
                                <Link to={`/${item}`} className="inline-block p-2 font-medium capitalize">{item}</Link>
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

            <div className='items-center hidden font-medium md:flex gap-x-2 shrink-0'>
                <button className="px-4 py-2 rounded text-secondary">Log In</button>
                <button className='px-4 py-2 rounded text-secondary'>Sign Up</button>
            </div>
        </header>
    )
}
