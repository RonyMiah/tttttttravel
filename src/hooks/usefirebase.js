import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut,onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  } from "firebase/auth";
import { useState,useEffect } from "react";
import initializeAuthontication from "../Pages/Firebase/Firebase.init";



initializeAuthontication();



const useFirebase = ()=>{
    const [isLoading, setIsLoading]= useState(true);
    const [user, setUser]= useState({});
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [name, setName]= useState('');
    const [error, setError]= useState('');
    
    const auth = getAuth();

  const signInUsingGoogle =() =>{
     setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider)
  }

  useEffect( ()=>{
       
   const unsubscribed = onAuthStateChanged(auth,(user)=>{
        if (user) {
            setUser(user) 
          } 
        else {
            setUser({})
          }
         setIsLoading(false)
    });
    return () => unsubscribed;
  } ,[])

  const logOut = ()=>{
     setIsLoading(true);
    signOut(auth)
    .then(() => { })
    .finally(()=>setIsLoading(false))
    
    
  }

  // Sign Up and Sign In Using Email Password:
  const handleEmail = e => {
    setEmail(e.target.value)
}
const handlePassword = e => {
    setPassword(e.target.value);
}
const handleName = e => {
    setName(e.target.value);
}

// Create New User:
const handleRegistration = () => {
    setIsLoading(true)
    // e.preventDefault();
    if (password?.length < 6) {
            setError('Password Must be at least 6 digit');
            alert('Password Must be at least 6 digit');
            window.location.reload();
            return;
    }
    console.log(email, password, name)
    createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                    console.log(result.user)
                    setError('')
                    setUserName()
                    alert('Successfully Create Account! Please Login Now!');
                    logOut()
            })
            .catch(error => {
                    setError(error.message);
            })
            .finally(() => setIsLoading(false));
}

// Login User:
const handleUserLogin = () => {
    setIsLoading(true)
    // e.preventDefault();
    if (password?.length < 6) {
            setError('Password Must be at least 6 digit');
            alert('Password Must be at least 6 digit');
            window.location.reload();
            return;
    }
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                    console.log(result.user)
                    setError()
            })
            .catch(error => {
                    setError(error.message);
            })
            .finally(() => setIsLoading(false))
}

const setUserName = () => {
    setIsLoading(true)
    updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
            .finally(() => { setIsLoading(false) })
}

    return{
            user,
            signInUsingGoogle,
            logOut,
            isLoading,
            setIsLoading,
            setUser,
            handleEmail,
            handlePassword,
            handleName,
            handleUserLogin,
            handleRegistration,
            error,
            setError
    }
}
export default useFirebase;