import React from "react";

const Link = ({ route, open }) => {
    return (
        <li className={`mr-12 p-2 hover:bg-purple-600 duration-700 ${open ? "w-full" : "w-auto"}`}>
            <a href={route.path} className="text-center text-white">
                {route.name}
            </a>
        </li>
    );
};

export default Link;
