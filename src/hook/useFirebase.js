import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{

// Calling getAuth and Google provider for authentication

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    //Sign in using Google pop up authentication function
    const signInUsingGoogle = () =>{
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        });
    } 

 // This is Observer that observe the user
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    },[])

// Log out function 
   const logOut = () =>{
       setIsLoading(true);
       signOut(auth)
       .then(()=>{})
       .finally(()=>setIsLoading(false));
    }
// return the function data
    return{
        setUser,
        user,
        setIsLoading,
        isLoading,
        error,
        setError,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;