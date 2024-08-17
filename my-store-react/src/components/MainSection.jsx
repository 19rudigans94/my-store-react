import React, { useState } from 'react';

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', image: `https://picsum.photos/300/400/?random=5`, brand: 'Brand 1', year: 2021, price: '$10' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: `https://picsum.photos/300/400/?random=6`, brand: 'Brand 2', year: 2022, price: '$20' },
    { id: 3, name: 'Product 3', description: 'Description 3', image: `https://picsum.photos/300/400/?random=7`, brand: 'Brand 3', year: 2023, price: '$30' },
    { id: 4, name: 'Product 4', description: 'Description 4', image: `https://picsum.photos/300/400/?random=8`, brand: 'Brand 4', year: 2024, price: '$40' },
    { id: 5, name: 'Product 5', description: 'Description 5', image: `https://picsum.photos/300/400/?random=9`, brand: 'Brand 5', year: 2025, price: '$50' },
    { id: 6, name: 'Product 6', description: 'Description 6', image: `https://picsum.photos/300/400/?random=10`, brand: 'Brand 6', year: 2026, price: '$60' },
    { id: 7, name: 'Product 7', description: 'Description 7', image: `https://picsum.photos/300/400/?random=11`, brand: 'Brand 7', year: 2027, price: '$70' },
    { id: 8, name: 'Product 8', description: 'Description 8', image: `https://picsum.photos/300/400/?random=12`, brand: 'Brand 8', year: 2028, price: '$80' },
];

const MainSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleInfo = (product) => {
        if (selectedProduct === product.id) {
            setSelectedProduct(null);
        } else {
            setSelectedProduct(product.id);
        }
    };

    return (
        <main className="p-4 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Our Store</h1>
            <p className="mb-6 text-center">We have {products.length} products available.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div className="border p-4 rounded shadow" key={product.id}>
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p>{product.description}</p>
                        <img src={product.image} alt={product.name} className="my-4 w-full h-48 object-cover" />
                        <button 
                            onClick={() => toggleInfo(product)} 
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                        >
                            Show More
                        </button>
                        {selectedProduct === product.id && (
                            <div className="mt-4 p-2 bg-gray-100 rounded">
                                <p>Brand: {product.brand}</p>
                                <p>Year: {product.year}</p>
                                <p>Price: {product.price}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MainSection;