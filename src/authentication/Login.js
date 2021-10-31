import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

const Login = () => {

    const { signInUsingGoogle, setUser, setIsLoading, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    //Redirect works
    const redirect_uri = location.state?.from || '/home' ;

    ////////// Google log in authentication function
    const handleGoogleLoginRedirect = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
            setUser(result.user);
            setError("");
        })
        .catch(error =>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }
    return (
        <div style={{height:"35rem"}}>
            <h1 style={{marginTop:"4rem"}}>Please press the button to log in with your google id</h1>
            <Button style={{marginTop:"2rem"}} variant="warning" onClick={handleGoogleLoginRedirect}>Sign in with google</Button>
        </div>
    );
};

export default Login;