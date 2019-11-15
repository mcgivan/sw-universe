import React from 'react';
import { useAppContext } from '../AppProvider';

const NavMenu = () => {
    const [state] = useAppContext();
    console.log(state);

    return (
        <nav className="border-b border-gray-600 mb-2 pb-2">
            <ul className="flex flex-row flex-wrap">
                <li className="w-1/3 text-center md:w-1/6">
                    <button className="focus:outline-none py-2 inline-block w-full hover:bg-gray-600 hover:text-gray-700">
                        People
                    </button>
                </li>
                <li className="w-1/3 text-center md:w-1/6">
                    <button className="focus:outline-none py-2 inline-block w-full hover:bg-gray-600 hover:text-gray-700">
                        Films
                    </button>
                </li>
                <li className="w-1/3 text-center md:w-1/6">
                    <button className="focus:outline-none py-2 inline-block w-full hover:bg-gray-600 hover:text-gray-700">
                        Starships
                    </button>
                </li>
                <li className="w-1/3 text-center md:w-1/6">
                    <button className="focus:outline-none py-2 inline-block w-full hover:bg-gray-600 hover:text-gray-700">
                        Vehicles
                    </button>
                </li>
                <li className="w-1/3 text-center md:w-1/6">
                    <button className="focus:outline-none py-2 inline-block w-full hover:bg-gray-600 hover:text-gray-700">
                        Species
                    </button>
                </li>
                <li className="w-1/3 text-center md:w-1/6">
                    <button className="focus:outline-none py-2 inline-block w-full hover:bg-gray-600 hover:text-gray-700">
                        Planets
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
