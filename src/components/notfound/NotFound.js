import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

/// not found page

const NotFound = () => {
    return (
        <div className="bg">
            <div>
                <h1 className="fourOfour">404</h1>
            </div>
            <div className='float'>
                <h1 className="page">Page not found</h1>
                <Link to="/">
                    <button>
                        <a href="/" className="btntxt">Go to home page</a>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;