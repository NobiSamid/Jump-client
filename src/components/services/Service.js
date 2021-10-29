import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Services.css";

const Service = (props) => {
    
    const { title, location, requirements, description, cost, imageurl, _id} = props.service || {};
    return (
        <div className="service-card">
            <div className="card-img">
                <img src={imageurl} alt="card-prev" />
            </div>
            <div className="card-details">
                <h3>{title}</h3>
                <p>Location: {location}</p>
                <p>Requirements: {requirements}</p>
                <p>Description: {description}</p>
                <h5>Cost: {cost}$</h5>
                <Link to={`/services/${_id}`}>
                <Button variant="warning" >Let's do it</Button>
                </Link>
            </div>
        </div>
    );
};

export default Service;