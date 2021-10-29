import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import Order from './Order';

const MyOrders = () => {

    const { user } = useAuth();
    
    // console.log(userEmail);

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://blooming-basin-61884.herokuapp.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    const userEmail = user?.email;
    const myReserved = users.filter(mr=> mr.email == userEmail);
    console.log(myReserved);


    return (
        <div>
            <h3>here what i ordered</h3>
            <div className="my-orders">
                {
                    myReserved.map(myRes=><Order
                    key={myRes._id}
                    myRes={myRes}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;