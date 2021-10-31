import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hook/useFirebase';

// This is context component to pass data of useFirebase by useAuth globally


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;