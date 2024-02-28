import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react';
import React from 'react'
import { Create, Erase, Fetchexact, Listall } from './temperoryvalues';
import { Readpage } from './readpage';
import { Updatepage } from './updatepage';



 export let Mainpage = () =>{


    const[page,setPage] = useState(false);
    const[nextpage,setNextpage] = useState(false);
    const[tempvalues,setTempvalues] = useState([]);
    const[readpage,setReadpage] = useState(false);
    const[position,setPosition] = useState(0)
    const[updatepage,setUpdatepage] = useState(false);
    const[obj,setObj] = useState({})
    const[eventdetails,setEventdetails] = useState(
        {
            eventname:"",
            date:0,
            location:"",
            description:""
        }
    )

    let setter = (get) =>{
        const {name,value} = get.target

        setEventdetails(
            (mydata)=>{
                return{
                    ...mydata,
                    [name]: value
                }
            }
        )
    }
    
    const Register = () =>{
        alert("Registered Successfully..!" + JSON.stringify(eventdetails));
        setNextpage(true)
        Create(eventdetails);
    }

    useEffect(()=>{
        setTempvalues(Listall);
    },[])

    var Login = () =>{
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        if (name.length === 0) {
            document.getElementById("name1").innerHTML = "Your name shouldn't be empty"
            return false;
        }
        else if (!(/^[a-z A-Z]$/)){
            document.getElementById("name1").innerHTML ="Your name should be in Alphabets"
            return false;
        }

        if (email.length === 0) {
            document.getElementById("email1").innerHTML = "Your email cannot be empty"
            return false;
        }
        else if (!(/^[a-z A-Z @ 0-9]$/)){
            document.getElementById("email11").innerHTML ="Your name should be in Alphabets"
            return false;
        }

        if (password.length === 0) {
            document.getElementById("password1").innerHTML = "Your password cannot be empty"
            return false;
        }
        else if (!(/^[a-z A-Z @ 0-9]$/)){
            document.getElementById("password1").innerHTML ="Your password should be Strong"
            return false;
        }
      alert("Login Success...!");
      setPage(true)
    }

    return(
        <>
        {
            (updatepage) ?
            <>
             <Updatepage who={position} mention={obj} />
             <button className='btn btn-outline-warning' 
             onClick={() =>{
                setUpdatepage(false);
             }} >BACK</button>
            </>
            :
            (readpage) ?
            <>
            <Readpage who={position} />
            <button className='btn btn-outline-warning'
            onClick={() =>{
                setReadpage(false)
            }} >BACK</button>
            </>
            :
            (nextpage) ?
            <>
              <div className='bg-info mt-3'>
                <div className='ms-5 me-5'>
                <div className='mt-5'>
                <h2 className='text-center '><ins>EVENT <span className='text-danger'> MANAGEMENT </span> SYSTEM</ins></h2>
                </div>
                <br/>
                <h3 className='text-center'><ins>Event Details</ins></h3>
                <table className='table table-striped table-bordered mt-5 text-center'>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tempvalues.map(
                                (element,hi) =>
                                <>
                                 <tr>
                                    <td>{element.eventname}</td>
                                    <td>{element.date}</td>
                                    <td>{element.location}</td>
                                    <td>{element.description}</td>
                                    <td>
                                        <button className='btn btn-outline-info'
                                        onClick={() =>{
                                            setReadpage(true);
                                            setPosition(hi)
                                        }} >READ</button>
                                        <button className='btn btn-outline-success ms-2'
                                        onClick={() =>{
                                            setUpdatepage(true);
                                            setPosition(hi);
                                            setObj(Fetchexact(element.eventname))
                                        }} >UPDATE</button>
                                        <button className='btn btn-outline-danger ms-2'
                                        onClick={()=>{
                                            setTempvalues(Erase(hi));
                                        }} >DELETE</button>
                                    </td>
                                 </tr>
                                </>
                            )
                        }
                    </tbody>
                </table>
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             </div>
             <button className='btn btn-outline-warning'
             onClick={() => {
                setNextpage(false)
             }}> BACK </button>
            </>
            :
            (page) ?
            <>
             <div className='bg-secondary'>
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
                              <input type='text' onChange={setter} name='eventname' value={eventdetails.eventname} className="form-control ms-5" placeholder="Enter your Event" />
                         </div>
                          <br></br><br></br>
                         <label className="form-label mt-2">Date </label>
                         <div className='col-10'>
                              <input type='date' onChange={setter} name='date' value={eventdetails.date}  className="form-control ms-5"   placeholder="Select your Date" />
                         </div>
                         <br></br><br></br>
                         <label className="form-label mt-2">Location </label>
                         <div className='col-10'>
                              <input type='text' onChange={setter} name='location' value={eventdetails.location}  className="form-control ms-5"  placeholder="Enter the Location" />
                         </div>
                         <label className="form-label mt-2">Description</label>
                         <div className='col-10'>
                              <input type='text' onChange={setter} name='description' value={eventdetails.description} className="form-control ms-5"  placeholder="Enter your Description" />
                         </div>
                          <div className="text-center mt-5 mb-4 ">
                              <button className="btn btn-outline-danger text-center"
                              onClick={
                                Register
                              }
                             >Register</button>
                          </div>
                     </div>
                 </div>
             </div><br/><br/><br/><br/>
             <button className='btn btn-outline-warning mb-5 ms-4'
              onClick={() =>{
                setPage(false)
              }} >Back</button>
         </div>
            </>
            :
            <>
             <div className=' bg-info'>
              <div className='mb-3'>
                 <div className='text-center'>
                     <br/><br/><br/><br/><br/>
                     <h1 className='mt-4'><ins><span className='text-danger'>LOGIN </span> PAGE</ins></h1>
                 </div>
                  <br/>
                 <div className="row justify-content-center">
                      <div className=" row ms-3 col-lg-3 mt-4 me-2 border mb-5"> 
                         <label for="name" className="form-label mt-4 ">Name </label>
                         <div className='col-10'>
                              <input id='name' type='text' className="form-control ms-5" placeholder="Enter your Name" />
                              <span id='name1'className='text-danger ms-5' ></span>
                         </div>
                          <br></br><br></br>
                         <label for="email" className="form-label mt-2">Email </label>
                         <div className='col-10'>
                              <input id='email' type='email' className="form-control ms-5" placeholder="Enter your Email" />
                              <span id='email1' className='text-danger ms-5' ></span>
                         </div>
                         <br></br><br></br>
                         <label for="password" className="form-label mt-2">Password </label>
                         <div className='col-10'>
                              <input id='password' type='text' className="form-control ms-5" placeholder="Enter your Password" />
                              <span id='password1' className='text-danger ms-5' ></span>
                         </div>
                          <div className="text-center mt-4 mb-4">
                              <button className="btn btn-outline-danger text-center" 
                              onClick={Login} >Login</button>
                          </div>
                     </div> 
                 </div>
             </div><br/><br/><br/><br/><br/><br/><br/><br/>
         </div>
            </>
        }
        </>
    )

 }
