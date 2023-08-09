import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
    return (
        <div>
            <li className="flex items-center">
                <span>
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2"></CheckCircleIcon>
                </span>
                <span>{feature}</span>
            </li>
        </div>
    );
};

export default Feature;
