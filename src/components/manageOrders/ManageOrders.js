import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const ManageOrders = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://blooming-basin-61884.herokuapp.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h3>Manage all orders here</h3>
            <div className="all-users">
                {
                    users.map(user=><User 
                    key={user._id}
                    user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;