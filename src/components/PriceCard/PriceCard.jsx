import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
    return (
        <div className="bg-purple-200 p-4 mt-3 rounded-md flex flex-col">
            <h3 className="text-center">
                <span className="text-5xl font-extrabold text-purple-800">{price.price}</span>
                <span className="text-2xl text-gray-600">\month</span>
            </h3>
            <h5 className="text-3xl font-bold text-gray-800 text-center">{price.name}</h5>
            <h6 className="text-2xl font-semibold underline mt-5">Features</h6>
            <ul className="mt-2 mb-5">
                {price.features.map((feature, idx) => (
                    <Feature key={idx} feature={feature}></Feature>
                ))}
            </ul>
            <button className="w-full py-5 mt-auto bg-green-500 font-bold text-white rounded-md hover:bg-green-700 duration-500">Buy Now</button>
        </div>
    );
};

export default PriceCard;
