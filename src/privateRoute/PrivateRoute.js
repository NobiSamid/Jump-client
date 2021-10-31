import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    ////////////////   to sequire the website private route created here

    const { user, isLoading } = useAuth();
    if(isLoading){
        return(
            <div>  
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({location})=> 
                user.email ? children : <Redirect
                    to={{
                        pathname:"/login",
                        state:{from:location}
                    }}
                ></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;