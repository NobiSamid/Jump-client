import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Services.css";

const Service = (props) => {
    
    const { title, location, requirements, description, cost, imageurl, _id} = props.service || {};

    // //////simple service card display
    return (
        <div className="service-card">
            <div className="face face1">
                <div className="content">
                    <img className="card-img" src={imageurl} alt="card-prev" />
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Location: {location}</p>
                    <p>Requirements: {requirements}</p>
                    <p>Description: {description}</p>
                    <p>Cost: {cost}$</p>
                    <Link to={`/services/${_id}`}>
                    <Button className="doit-btn" variant="light" >Let's do it</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;