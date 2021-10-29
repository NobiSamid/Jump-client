import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const { user, isLoading } = useAuth();
    if(isLoading){
        return<h1>Wait a sec </h1>
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