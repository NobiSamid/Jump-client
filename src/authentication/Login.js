import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

const Login = () => {

    const { signInUsingGoogle, setUser, setIsLoading, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home' ;

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
        <div>
            <Button variant="warning" onClick={handleGoogleLoginRedirect}>Sign in with google</Button>
        </div>
    );
};

export default Login;