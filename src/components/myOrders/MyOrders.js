import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
// import Order from './Order';
import { Button } from 'react-bootstrap';
import './MyOrders.css';


const MyOrders = () => {

    const { user } = useAuth();
    
    // console.log(userEmail);

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://blooming-basin-61884.herokuapp.com/users')
        // fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    const userEmail = user?.email;
    const myReserved = users.filter(mr=> mr.email == userEmail);
    console.log(myReserved);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this note???????');
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
            <div className="my-orders">
                {
                    myReserved.map(myRes=>
                    <div className="my-order" key={myRes._id} >
                        
                        <div>
                            <h3>hello{myRes.name}</h3>
                            <h2>{myRes.service}</h2>
                            <p>{myRes.date}</p>
                            <p>Status: {myRes.status}</p>
                        </div>
                        <div>
                            {/* <Button variant="warning">Update</Button> */}
                            <Button onClick={()=> handleDelete(myRes._id)} variant="danger">Delete</Button>
                        </div>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;