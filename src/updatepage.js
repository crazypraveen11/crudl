import { useState } from "react"
import { Reedit } from "./temperoryvalues"


export const Updatepage = (char) =>{
    const[pos, setPos] = useState(char.who)
    const[eventdetails,setEventdetails] = useState(
        {
            eventname: char.mention.eventname,
            date: char.mention.date,
            location: char.mention.location,
            description: char.mention.description
        }
    )

    let setter = (some) =>{
        const {name, value} = some.target

        setEventdetails(
            (mydata)=>{
                return{
                    ...mydata,
                    [name]: value
                }
            }
        )
    } 

    var Edit = () =>{
       alert("Updated Successfully" + JSON.stringify(eventdetails));
       Reedit(eventdetails,pos);
    }

    return(
        <>
        <div className='bg-secondary col-sm-12 '>
              <div className='mb-3'>
                 <div className='text-center'>
                     <br/><br/>
                     <h1 className='mt-3'><ins><span className='text-danger'>REGISTRATION</span></ins></h1>
                 </div>
                  <br/>
                 <div className="row justify-content-center">
                      <div className=" row ms-3 col-lg-3 mt-5 me-2 border mb-5"> 
                         <label className="form-label mt-4 ">Event Name </label>
                         <div className='col-10'>
                              <input type='text' 
                              onChange={setter} 
                              name='eventname' 
                              value={eventdetails.eventname} 
                              className="form-control ms-5" 
                              placeholder="Enter your Event" />
                         </div>
                          <br></br><br></br>
                         <label className="form-label mt-2">Date </label>
                         <div className='col-10'>
                              <input type='date' 
                              onChange={setter} 
                              name='date' 
                              value={eventdetails.date}  
                              className="form-control ms-5"   
                              placeholder="Select your Date" />
                         </div>
                         <br></br><br></br>
                         <label className="form-label mt-2">Location </label>
                         <div className='col-10'>
                              <input type='text' 
                              onChange={setter} 
                              name='location' 
                              value={eventdetails.location}  
                              className="form-control ms-5"  
                              placeholder="Enter the Location" />
                         </div>
                         <label className="form-label mt-2">Description</label>
                         <div className='col-10'>
                              <input type='text' 
                              onChange={setter} 
                              name='description' 
                              value={eventdetails.description} 
                              className="form-control ms-5"  
                              placeholder="Enter your Description" />
                         </div>
                          <div className="text-center mt-5 mb-4 ">
                              <button className="btn btn-outline-success text-center" 
                              onClick={Edit}
                             >Update</button>
                             <button className="btn btn-outline-danger ms-3">Cancel</button>
                          </div>
                     </div>
                 </div><br/><br/>
             </div><br/><br/><br/><br/>
         </div>
        </>
    )
}