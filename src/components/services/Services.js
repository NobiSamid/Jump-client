import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        // fetch('http://localhost:5000/services')
        fetch('https://blooming-basin-61884.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="services-main">
            <div className="all-services">
                {
                    services.map(service=><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;