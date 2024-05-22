import React, { Children, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import MenuIcon from "./assets/burger-menu.png"
import { Transition } from "react-transition-group";
const Menu = [
    {
        title: "Profile",
        link: "/"
    },
    {
        title: "Skills",
        link: "/skills/"
    },
    {
        title: "Projects",
        link: "/projects/"
    },
    {
        title: 'Contact',
        link: '/contact/'

    }
];
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Drawer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            <button
                className="me-6 mt-4 hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={toggleDrawer}
            >
                <img src={MenuIcon} alt="menu" width={40} />
            </button>

            <Transition in={isOpen} timeout={300} unmountOnExit>
                {(state) => (
                    <div
                        className={`fixed inset-y-0 right-0 w-full bg-slate-800 overflow-y-auto shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                    ${state === "entered" ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <div className="px-6 py-4 flex items-center justify-between">
                            <h2 className="text-4xl font-bold text-gray-100">Portfolio</h2>
                            <button
                                className="text-white hover:text-gray-500 focus:outline-none text-2xl font-bold transition-colors duration-300 ease-in-out"
                                onClick={toggleDrawer}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="px-6 py-4">
                            <hr className="mb-5 border-gray-600" />
                            {children}
                        </div>
                        <footer className=" text-white text-center py-4 w-full absolute bottom-0 bg-slate-900">
                            <div>&copy; 2024 @joshlorielsoo. All rights reserved.</div>
                        </footer>
                    </div>
                )}
            </Transition>
        </div>
    );
};

const CoreLayout = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <div className="h-screen w-[100vw] overflow-x-hidden overflow-auto text-white">
            <nav className='flex justify-between items-center w-screen z-20 bg-slate-800 fixed top-0'>
                <div className="text-2xl tracking-widest text-blue-700 font-bold h-16 w-40 flex items-center justify-center">
                    Portfolio
                </div>
                <div className="md:block hidden md:h-16 h-32 px-5 py-2">
                    <ul className='flex flex-row pt-2'>
                        {Menu.map((item, index) => (
                            <li key={index}>
                                <Link className='w-24 hover:bg-slate-950 hover:scale-105 ease-in flex items-center justify-center bg-slate-900 rounded-lg mr-1 h-9' to={item.link} >
                                    {item.title}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="block md:hidden">

                    <Drawer>
                        <ul>
                            {Menu.map((item, index) => (
                                <li key={index} className='text-zinc-50 mb-3'>
                                    <Link onClick={!isDrawerOpen} className='text-xl hover:text-zinc-200 tracking-widest font-medium l' to={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </Drawer>
                </div>
            </nav>

            <Outlet />
            <footer>
                <p className="text-center bg-black pt-5" style={{ height: '8.6vh' }}>
                    ©Allrights 2023 @joshlorielso
                </p>
            </footer>
        </div>
    )
}

export default CoreLayout