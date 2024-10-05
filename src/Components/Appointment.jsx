import React from "react"
import { useState } from "react"
function Appointment(){
    const[username, setUsername] = useState("");
    const[date, setDate] = useState("");
    const[details, setDetails] = useState({});
    const handleClick = ()=> {
        setDetails({username, date});
        console.log(username, date);
        setUsername("");
        setDate("");
    }
    return(
        
        <>
            <div className="container">
                <h1>Appointment Management System</h1>
                {/* <h3>Book your appointment today!</h3> */}
                <p>Enter your Full Name:</p>
                <input type="username" name="fullName" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name"  />
                <p>Date of Appointment:</p>
                <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button className="btn" onClick={handleClick}>Book your Appointment</button>
            </div>
            <div className="appoint-list">
                <div className="nav" >
                    <label>S.No</label>
                    <label>Name</label>
                    <label>Date</label>
                    <label>Edit/Delete</label>
                </div>
            <div className="display" >
                <p>S.No</p>
                <p>Vaishnavi</p>
                <p>09-08-2025</p>
                <div className="edit-delete">
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Appointment