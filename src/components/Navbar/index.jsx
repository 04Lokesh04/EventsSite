import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { FaUser } from "react-icons/fa";

const Navbar=()=>{

    return (
        <div className="flex flex-row justify-between p-0.5 pl-3 pr-3">
            <h1 className="text-orange-700 text-lg font-semibold">BookNow</h1>
            <div className=" flex flex-row md:border-1 md:rounded-lg pl-2 pr-2 md: w-[300px] md:ml-[200px]">
                <input className="w-[300px] hidden md:block" type="search" placeholder="search events"/>
                <FaSearch className=" hover:text-gray-500 md:ml-auto mt-1.5"/>
            </div>

            <div className="flex flex-row justify-between">
            <div className="flex flex-row mr-3">
                <FaHeart className=" hover:text-gray-500 mt-1.5 mr-2.5"/>
                <p className="hidden md:block hover:text-gray-500">Favourites</p>
            </div>
            <div className=" md:border-1 md:rounded-lg flex flex-row md:pl-1 md:pr-1">
                <FaUser className="mt-1.5 mr-2.5 hover:text-gray-500"/>
                <button className=" hidden md:block hover:text-gray-500">Sign In</button>
            </div>
            </div>
            
        </div>
    )
}

export default Navbar