import React from "react";
import { useState } from "react";
function Appointment() {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    if (username && date) {
      if (editIndex === null) {
        setAppointments([...appointments, { username, date }]);
      } else {
        const updatedAppointments = [...appointments];
        updatedAppointments[editIndex] = { username, date };
        setAppointments(updatedAppointments);
        setEditIndex(null);
      }
    }
    setUsername("");
    setDate("");
  };
  const handleEdit = (index) => {
    const editedValue = appointments[index];
    setUsername(editedValue.username);
    setDate(editedValue.date);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredList = appointments.filter((_, i) => i!== index);
    setAppointments(filteredList);
  }


  return (
    <>
      <div className="container">
        <h1>Appointment Management System</h1>
        <p>Enter your Full Name:</p>
        <input
          type="username"
          name="fullName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Date of Appointment:</p>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="btn" onClick={handleClick}>
          {editIndex === null ? "Book your Appointment" : "Save Changes"}
        </button>
      </div>
      {appointments.length === 0 ? (
        <div className="quote">
          <h3>Book Your Appointment Today!</h3>
        </div>
      ) : (
        <div className="appoint-list">
          <div className="nav">
            <p className="nav-label">S.No</p>
            <p className="nav-label">Name</p>
            <p className="nav-label">Date</p>
            <p className="nav-label">Edit</p>
            <p className="nav-label">Delete</p>
          </div>
          {appointments.map((appointments, index) => (
            <div className="display" key={index}>
              <p className="p-tag">{index + 1}</p>
              <p className="p-tag">{appointments.username}</p>
              <p className="p-tag">{appointments.date}</p>
              <div className="edit-delete">
                <button onClick={() => handleEdit(index)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Appointment;
