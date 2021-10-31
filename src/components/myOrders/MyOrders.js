import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
// import Order from './Order';
import { Button, Spinner } from 'react-bootstrap';
import './MyOrders.css';


const MyOrders = () => {

    const { user } = useAuth();
    
    // console.log(userEmail);

    // Fetching the data of user then setting in state
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://blooming-basin-61884.herokuapp.com/users')
        // fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    // filtering the Data of the user that logged in
    const userEmail = user?.email;
    const myReserved = users.filter(mr=> mr.email == userEmail);
    console.log(myReserved);

    // Delete function for the user to delete the event
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this event???????');
        if(proceed){
            console.log('delete kore dei eta?', id);
            const url = `https://blooming-basin-61884.herokuapp.com/users/${id}`;
            // const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount){
                    alert("successfully deleted")
                    const remaining = users.filter(userf => userf._id !== id);
                    setUsers(remaining);
                }
            })
        }
        
    }


    return (
        <div className="mng-my-odr">
            <h1 className="reservation-head">Your Reservations</h1>
            {
                myReserved.length === 0 ?
                <div>
                    <h1>Loading...</h1>
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                </div>
                :
                <div className="my-orders">
                    {
                        myReserved.map(myRes=>
                        <div className="my-order" key={myRes._id} >
                            <div>
                                <img className="user-img" src={user.photoURL} alt="user-preview" />
                            </div>
                            <div>
                                <h3>{myRes.name}</h3>
                                <h2>{myRes.service}</h2>
                                <p>{myRes.date}</p>
                                <p>Status: {myRes.status}</p>
                            </div>
                            <div>
                                {/* <Button variant="warning">Update</Button> */}
                                {/**************** Calling delete function **************/}
                                <Button onClick={()=> handleDelete(myRes._id)} variant="danger">Delete</Button>
                            </div>
                            
                        </div>)
                    }
                </div>

            }
            
        </div>
    );
};

export default MyOrders;