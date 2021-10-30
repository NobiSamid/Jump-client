import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import User from './User';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './ManageOrders.css';

const ManageOrders = () => {

    const { user } = useAuth();
    console.log(user?.photoURL);
    const adminEmail = "nobisamid@gmail.com";

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://blooming-basin-61884.herokuapp.com/users')
        // fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    const handleDelete = id =>{
        const userEmail = user.email;
        if( userEmail == adminEmail){
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
        else{
            alert('Only Admin can operate delete function here')
        }
        
        
    }

    return (
        <div className="mng-odr-main">
            <h1 className="manage-head">Manage all orders here</h1>
            {
                users.length === 0 ?
                <div>
                    <h1>Loading...</h1>
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                </div>
                :
                <div className="all-users">
                    {
                        users.map(user=>
                        <div className="user-card" key={user._id}>
                            <div>
                                <img className="user-img-all" src={user?.photoURL} alt="user-preview" />
                            </div>
                            <div>
                                <h3>{user.name}</h3>
                                <h2>{user.service}</h2>
                                <p>{user.date}</p>
                            </div>
                            <div>
                                <Button className="mng-btn" variant="warning">Update</Button>
                                <Button className="mng-btn" onClick={()=> handleDelete(user._id)} variant="danger">Delete</Button>
                            </div>
                        </div>)
                    }
                </div>
            }
            
        </div>
    );
};

export default ManageOrders;