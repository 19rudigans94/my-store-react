
import React, { useState } from 'react';

const Header = () => {
    const [city, setCity] = useState('');
    const [displayCity, setDisplayCity] = useState('');

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleCitySubmit = () => {
        setDisplayCity(city);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white max-w-5xl mx-auto">
            <div className="text-xl font-bold">
                <img src="logo.png" alt="ShopLogo" className="w-12 h-12" />
                <p>ShopLogo</p>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleCityChange}
                    className="px-2 py-1 text-black rounded"
                />
                <button
                    onClick={handleCitySubmit}
                    className="px-4 py-1 bg-blue-500 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
                {displayCity && (
                    <div className="text-sm mt-2">{`City: ${displayCity}`}</div>
                )}
            </div>
        </header>
    );
};

export default Header;
