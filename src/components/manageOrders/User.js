import React from 'react';
import { Button } from 'react-bootstrap';
import './User.css';

const User = (props) => {

    const {name, phone, date, service } = props.user || {};

    console.log(props.user);
    return (
        <div className="user-card">
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

export default User;