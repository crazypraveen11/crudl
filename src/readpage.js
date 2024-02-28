import { useEffect,useState } from "react"
import { Read } from "./temperoryvalues"



export let Readpage = (pos) =>{
    const[eventdetails,setEventdetails] = useState({
        eventname:"",
        date:0,
        location:"",
        description:""
    })

    useEffect(() =>{
        setEventdetails(Read(pos.who))
    },[pos.who])

    return(
        <>
        <div className="row justify-content-center  bg-info"> 
            <div className="card col-5  mt-5 mb-5">
                <h1 className="card-title text-center mt-5"><ins><span className="text-danger">Event </span> Details</ins></h1>
                <div className="card-text mt-5 text-center">
                    <ul className="list-group mb-5 ms-5 mb-5">
                        <li className="list-group-item "><span className="fw-bold">EVENTNAME : </span>{eventdetails.eventname}</li>
                        <li className="list-group-item"><span className="fw-bold">DATE : </span>{eventdetails.date}</li>
                        <li className="list-group-item"><span className="fw-bold">LOCATION : </span>{eventdetails.location}</li>
                        <li className="list-group-item"><span className="fw-bold">DESCRIPTION : </span>{eventdetails.description}</li>
                    </ul>
                </div>
            </div><br/>
        </div>
        </>
    )
}