// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import './MyOrders.css';

// const Order = (props) => {

//     const {name, date, service } = props.myRes || {};
//     const userOrder = props.myRes;

//     const handleDelete = id =>{
//         console.log('delete kore dei eta?', id);
//         const url = `http://localhost:5000/users/${id}`;
//         fetch(url, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(data =>{
//             console.log(data)
//             if(data.deletedCount){
//                 alert("successfully deleted")
//                 const remaining = rmngUsers.filter(rUser => rUser._id !== id);
//                 setRmngUsers(remaining);
//             }
//         })
//     }
//     return (
//         <div className="my-order">
//             <div>
//                 <h3>{name}</h3>
//                 <h2>{service}</h2>
//                 <p>{date}</p>
//             </div>
//             <div>
//                 <Button variant="warning">Update</Button>
//                 <Button onClick={()=> handleDelete(userOrder._id)} variant="danger">Delete</Button>
//             </div>
//         </div>
//     );
// };

// export default Order;