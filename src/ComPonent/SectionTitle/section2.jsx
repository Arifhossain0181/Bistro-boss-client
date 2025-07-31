import React from 'react';
import img from '../../assets/shop/banner2.jpg'
const section2 = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img src={img} alt="Banner" className="w-full h-[500px] object-cover" />

            {/* Overlay Box */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 text-center p-8 max-w-xl rounded-lg shadow-lg">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">BISTRO BOSS</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum
                        deserunt ratione dolor officiis praesentium doloremque magni sapiente! Unde sunt dolorem at, nihil
                        odio ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default section2;