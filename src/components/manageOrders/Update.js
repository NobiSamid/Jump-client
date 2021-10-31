import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';

const Update = () => {
    const { userId } = useParams();
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const adminEmail = "nobisamid@gmail.com"

    useEffect(()=>{
        // const url=`http://localhost:5000/users/${userId}`
        const url=`https://blooming-basin-61884.herokuapp.com/users/${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setEvent(data))
    },[])

    const setage = event.age;
    const setdate = event.date;
    const setemail = event.email;
    const setname = event.name;
    const setpassport = event.passport;
    const setphone = event.phone;
    const setservice= event.service;

    const handleChange = e =>{
        const updatedStatus = e.target.value;
        const updateEventStatus = {status: updatedStatus, age:setage, date:setdate, email:setemail, name:setname, passport:setpassport, phone:setphone, service:setservice };
        setEvent(updateEventStatus)
    }
    const handleUpdate = e =>{
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
        e.preventDefault()
    }
    return (
        <div>
            <h3>update status: {event?.status}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleChange} value={event?.status || ''}></input>
                <input type="submit" value="Update"></input>
            </form>
        </div>
    );
};

export default Update;