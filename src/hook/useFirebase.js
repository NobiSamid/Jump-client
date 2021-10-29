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


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const signInUsingGoogle = () =>{
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        });
    } 

 
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


   const logOut = () =>{
       setIsLoading(true);
       signOut(auth)
       .then(()=>{})
       .finally(()=>setIsLoading(false));
    }

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