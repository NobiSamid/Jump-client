import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
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