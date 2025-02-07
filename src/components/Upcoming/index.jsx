import { FaArrowRightLong } from "react-icons/fa6"; 
import { FaLocationDot } from "react-icons/fa6";
import {v4 as uuidv4} from 'uuid'
import { useState, useEffect, useRef } from "react";
import {format} from 'date-fns'

const Upcoming=()=>{
    const [upcomingList, setUpcomingList]=useState([])
    const [hasmore, setMore]=useState(true)
    const [page, setPage]=useState(1)
    const elemRef=useRef(null)

    function onIntersection(entries){
        const firstentry=entries[0]
        if (firstentry.isIntersecting && hasmore){
            fetchdetails()
        }
    }

    useEffect(()=>{

        const observer=new IntersectionObserver(onIntersection)

        if (observer && elemRef.current){
            observer.observe(elemRef.current)
        }

        return ()=>{
            if (observer){
                observer.disconnect()
            }
        }
        
    }, [upcomingList])

    const fetchdetails=async ()=>{
        if (page > 5) { // Stop fetching after 5 pages
            setMore(false);
            return;
        }
    
        try{
            const API_URL = import.meta.env.VITE_API_URL;
            const response=await fetch(`${API_URL}&page=${page}&type=upcoming`)
            const data= await response.json()
            if (data.events.length==0){
                setMore(false)
            }
            else{
                const fetched= data.events.map((each)=>{
                    return {...each, date: format( new Date(each.date), "MMMM d, yyyy"),
                       distanceKm: `${Math.round(parseFloat(each.distanceKm/100))}km`
                    }
               }) 
               setUpcomingList(prevlist=>[...prevlist, ...fetched])
               setPage(prevpage=>prevpage+1)
            }
            
            
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="p-3">
            <div className="w-full flex flex-row justify-between p-3">
                <div className="flex flex-row">
                    <p className="hover:text-gray-500 underline">Upcoming Events </p>
                    <FaArrowRightLong className="m-1 hover:text-gray-500"/>
                </div>
                <p className="underline hover:text-gray-500">see all</p>
            </div>

            <div className="w-full mt-3">
                <ul className=" p-2 w-[100%] flex flex-row flex-wrap justify-evenly whitespace-nowrap gap-2">
                    {upcomingList.map((each, index)=>{
                        console.log(index)
                        return (<li className="flex flex-col justify-between h-[250px] w-[250px] rounded-2xl border-t-0 border border-gray-300 shadow" key={uuidv4()}>
                             <img src='/src/assets/Rectangle 48.svg' className="rounded-2xl" alt="event-image" />
                             <div className="flex flex-row justify-between mt-auto">
                             <div className="p-1 m-1 ">
                                    <h1 className="text-xs font-semibold mb-2">Make Agree</h1>
                                    <div className="flex flex-row">
                                        <FaLocationDot className="mr-1 text-gray-500 text-xs mt-0.5"/>
                                        <p className="text-xs text-gray-500"> {each.cityName}</p>
                                    </div>
                                </div>

                                <div className="m-1 p-1">
                                    <p className="text-xs mb-2 text-gray-500">{each.date}</p>
                                    <p className="text-xs text-gray-500">{each.weather} | {each.distanceKm}</p>
                                </div>
                             </div>

                        </li>)
                    
                    })
                    }
                </ul>
                {hasmore && <div ref={elemRef} className="text-centerl">Loading... </div>}
            </div>
        </div> 
        
    )
}


export default Upcoming