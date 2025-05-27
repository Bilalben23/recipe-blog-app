import { FC } from 'react'
import { HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom'

type MobileNavbarProps = {
    isOpen: boolean;
    menuItems: string[],
    closeMenu: () => void
}

const MobileNavbar: FC<MobileNavbarProps> = ({ isOpen, menuItems, closeMenu }) => {
    return (
        <nav className={`absolute flex items-center justify-center inset-0 bg-white z-50 transition-transform duration-200 ease-in w-full ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

            <div className='px-5 min-w-xs'>
                <div className="flex justify-end mb-8">
                    <button className="p-1 border rounded-full cursor-pointer" onClick={closeMenu}>
                        <HiXMark className="size-6 sm:size-7" />
                    </button>
                </div>
                <ul className='flex flex-col gap-y-2'>
                    {
                        menuItems.map((item) => (
                            <li key={item}>
                                <Link to={`/${item}`} className="inline-block p-2 font-medium capitalize" onClick={closeMenu}>{item}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default MobileNavbar;