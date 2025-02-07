import { FaLocationDot } from "react-icons/fa6";

import Navbar from "../Navbar";
import Recommended from "../Recommended";
import Upcoming from "../Upcoming";

const BannerSection=()=>{

    return(
        <div className="w-full h-screen p-0 m-0 box-border overflow-x-hidden">
            <Navbar />
            <div className="m-1 flex flex-row w-full">
                <div className="flex flex-row mr-3">
                    <FaLocationDot className="m-1 hover:text-gray-500"/>
                    <p className="hover:text-gray-500">Mumbai, India</p>
                </div>

                <ul className=" m-auto flex flex-row flex-wrap justify-evenly w-100">
                    <li className="hover:text-gray-500">Live Shows</li>
                    <li className="hover:text-gray-500">Movies</li>
                    <li className="hover:text-gray-500">Streams</li>
                    <li className="hover:text-gray-500">Plays</li>
                    <li className="hover:text-gray-500">Events</li>
                </ul>
            </div>
            <div className="relative bg-cover bg-center h-screen flex flex-col justify-center p-1 mb-50"
            style={{
                backgroundImage:"url('/Front screen.svg')",
            }}>
                <h1 className="text-gray-50 text-2xl font-bold mb-2 text-center">Discover Exciting Events Happening Near You - Stay Tuned For Updates</h1>
                <p className="text-gray-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=" p-2 absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 w-full flex flex-row justify-end">
                    <Recommended />
                </div>    
                
            </div>

            <Upcoming/>
        </div>
    )
}

export default BannerSection