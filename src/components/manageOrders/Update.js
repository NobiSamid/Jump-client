import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import './ManageOrders.css';

const Update = () => {
    const { userId } = useParams();
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const adminEmail = "nobisamid@gmail.com"
    
    // Fetching data from backend  of the item that we will update
    useEffect(()=>{
        // const url=`http://localhost:5000/users/${userId}`
        const url=`https://blooming-basin-61884.herokuapp.com/users/${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setEvent(data))
    },[])

    // making variable of other data of the event
    const setage = event.age;
    const setdate = event.date;
    const setemail = event.email;
    const setname = event.name;
    const setpassport = event.passport;
    const setphone = event.phone;
    const setservice= event.service;

    // taking input field data of update and setting to te state
    const handleChange = e =>{
        const updatedStatus = e.target.value;
        const updateEventStatus = {status: updatedStatus, age:setage, date:setdate, email:setemail, name:setname, passport:setpassport, phone:setphone, service:setservice };
        setEvent(updateEventStatus)
    }

    //// Update function to update the status of the event
    /// first fetch the particular data of event then using pUT methon in it then setting the data
    const handleUpdate = e =>{
        const userEmail = user.email;
        if(userEmail == adminEmail){
            // const url = `http://localhost:5000/users/${userId}`;
            const url = `https://blooming-basin-61884.herokuapp.com/users/${userId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(event)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.modifiedCount > 0){
                    alert("Updated Successfully")
                }
            })
            console.log(event);
        }
        else{
            alert("only Admin can Update your event status")
        }
        
        e.preventDefault()
    }
    return (
        <div className="update-div">
            <h1>change the update status and update</h1>
            <h3>update status: {event?.status}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleChange} value={event?.status || ''}></input>
                <input type="submit" className="update-pg-btn" value="Update"></input>
            </form>
        </div>
    );
};

export default Update;