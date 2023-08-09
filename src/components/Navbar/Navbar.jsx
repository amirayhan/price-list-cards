import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Portfolio", path: "/portfolio" },
        { id: 5, name: "Contact", path: "/contact" },
    ];
    return (
        <nav className="py-5 pl-5 bg-purple-400">
            <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer">
                <span>{open === true ? <XMarkIcon className="h-6 w-6 text-white"></XMarkIcon> : <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>}</span>
            </div>
            <ul className={`md:flex absolute md:static duration-700 bg-purple-400 text-center ${open ? "top-16 bg-purple-800 " : "-top-52"}`}>
                {routes.map((route) => (
                    <Link key={route.id} route={route} open={open}></Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
