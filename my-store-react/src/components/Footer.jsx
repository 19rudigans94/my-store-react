import React from 'react';

const sponsors = ['Vodka', 'Tequila', 'Sambuca', 'Coca Cola'];

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white">
            <div className="flex items-center text-xl font-bold mb-2">
                <img src="logo.png" alt="ShopLogo" className="w-12 h-12" />
                <p>ShopLogo</p></div>
            <ul className="flex space-x-4">
                {sponsors.map((sponsor, index) => (
                    <li key={index}>{sponsor}</li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
