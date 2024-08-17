import React, { useState } from 'react';

const images = [
    'https://picsum.photos/1920/1080/?random=1',
    'https://picsum.photos/1920/1080/?random=2',
    'https://picsum.photos/1920/1080/?random=3',
    'https://picsum.photos/1920/1080/?random=4',
    'https://picsum.photos/1920/1080/?random=5',
];

const DiscountSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">Discount Section</h2>
            <section className="flex items-center justify-center p-4">
                <button
                    onClick={prevImage}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                    Prev
                </button>
                <img src={images[currentImage]} alt="Discount" className="mx-4 w-64 h-64 object-cover" />
                <button
                    onClick={nextImage}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                    Next
                </button>
            </section>
        </div>
    );
};

export default DiscountSection;
