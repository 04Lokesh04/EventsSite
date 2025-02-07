import { FaArrowRightLong } from "react-icons/fa6"; 
import { FaLocationDot } from "react-icons/fa6";
import {v4 as uuidv4} from 'uuid'
import { useState, useEffect } from "react";
import {format} from 'date-fns'
import './index.css'
const Recommended=()=>{
    const [recomList, setRecomList]=useState([])

    useEffect(()=>{
        const fetchdetails=async ()=>{
            try{
                const response=await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
                const data= await response.json()
                const fetched= data.events.map((each)=>{
                     return {...each, date: format( new Date(each.date), "MMMM d, yyyy"),
                        distanceKm: `${Math.round(parseFloat(each.distanceKm/100))}km`
                     }
                })
                setRecomList(fetched)
            }catch(err){
                console.log(err)
            }
        }
        fetchdetails()
        
    }, [])

    return (
        <div className=" w-[90%]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                <p className="hover:text-gray-500 text-white underline">Recommended Events</p>
                <FaArrowRightLong className="hover:text-gray-500 ml-2 m-1 text-white"/>
                </div>
                <p className="hover:text-gray-500 text-white underline">see all</p>
            </div>

            <div className="w-full overflow-hidden">
                <ul className="text-white flex flex-row whitespace-nowrap animate-scroll gap-2 ">
                    {recomList.map((each)=>{
                        console.log(`url(https://drive.google.com/thumbnail?id=${each.imgUrl.split('/d/')[1].split('/')[0]})`)
                        return (
                        <li className="flex-none bg-cover bg-center rounded-xl  h-[300px] w-[250px] flex flex-col  p-2 m-2 " key={uuidv4()}
                        style={{
                            backgroundImage: "url('/src/assets/Rectangle 4.svg')"
                        }}>
                            <div className="flex flex-row justify-between mt-auto">

                                <div className="p-1 m-1 ">
                                    <h1 className="text-xs font-semibold mb-2">Make Agree</h1>
                                    <div className="flex flex-row">
                                        <FaLocationDot className="mr-1 text-white text-xs mt-0.5"/>
                                        <p className="text-xs "> {each.cityName}</p>
                                    </div>
                                </div>

                                <div className="m-1 p-1">
                                    <p className="text-xs mb-2">{each.date}</p>
                                    <p className="text-xs ">{each.weather} | {each.distanceKm}</p>
                                </div>

                            </div>

                        </li>)
                    
                    })
                    }
                </ul>
            </div>
        </div> 
    )
}


export default Recommended