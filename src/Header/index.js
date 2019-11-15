import React from 'react';

const Header = () => (
    <header className="flex items-center mb-2">
        <h2 className="text-yellow-400 text-2xl w-1/2 text-center font-mono tracking-wider">
            SW Universe
        </h2>
        <div className="w-1/2 relative relative">
            <input
                className="w-full px-2 py-1 pr-8 bg-transparent border-b border-gray-600 outline-none focus:bg-gray-800 text-sm"
                placeholder="Search"
            />
            <button className="absolute right-0 bottom-0 mb-1 mr-2 focus:outline-none">
                <svg
                    className=" center fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
            </button>
        </div>
    </header>
);

export default Header;
