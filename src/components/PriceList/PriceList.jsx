import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch("prices.json")
            .then((res) => res.json())
            .then((data) => setPrices(data));
    }, []);
    return (
        <div className="px-12">
            <h2 className="text-5xl p-4 text-center text-purple-950 bg-purple-300">Awesome Affordable Prices</h2>

            <div className="grid md:grid-cols-3 gap-3">
                {prices.map((price) => (
                    <PriceCard key={price.id} price={price}></PriceCard>
                ))}
            </div>
        </div>
    );
};

export default PriceList;
