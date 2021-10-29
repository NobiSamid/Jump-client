import React from 'react';
import { Button } from 'react-bootstrap';
import './MyOrders.css';

const Order = (props) => {

    const {name, phone, date, service } = props.myRes || {};

    return (
        <div className="my-order">
            <div>
                <h3>{name}</h3>
                <h2>{service}</h2>
                <p>{date}</p>
            </div>
            <div>
                <Button variant="warning">Update</Button>
                <Button variant="danger">Delete</Button>
            </div>
        </div>
    );
};

export default Order;