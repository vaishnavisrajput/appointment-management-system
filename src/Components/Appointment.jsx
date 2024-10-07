import React from "react"
import { useState } from "react"
function Appointment(){
    const[username, setUsername] = useState("");
    const[date, setDate] = useState("");
    const[appointments, setAppointments] = useState([]);
    const[display, setDisplay] = useState(false);
    const handleClick = ()=> {
        if(username && date){
            setAppointments([...appointments, { username, date }]);
            console.log(appointments);
            setDisplay(true);
        }
        setUsername("");
        setDate("");
    }
    // const handleDashboard = () =>{
    //     setChange(false);
    // }
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
            {(display === false) ? (
                <div className="quote">
                    <h3>Book Your Appointment Today!</h3>
                </div>
            ) : (
                <div className="appoint-list">
                <div className="nav" >
                    <p className="nav-label">S.No</p>
                    <p className="nav-label">Name</p>
                    <p className="nav-label">Date</p>
                    <p className="nav-label">Edit</p>
                    <p className="nav-label">Delete</p>
                </div>
                {appointments.map((appointments) => (
                    <div className="display"  >
                <p className="p-tag">1</p>
                <p className="p-tag">{appointments.username}</p>
                <p className="p-tag">{appointments.date}</p>
                <div className="edit-delete">
                    <button onClick={handleEdit} className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                    
                </div>
            </div>
                ))}
            
            </div>
            )}
            
        
        
            
        </>
    )
}

export default Appointment