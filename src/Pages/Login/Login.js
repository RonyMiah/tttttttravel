import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';

import { useHistory, useLocation } from 'react-router';



    

const Login = () => {

    const {signInUsingGoogle, setUser, setIsLoading,  error, setError}=useAuth();

    
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home"

    const handleSignInGoogle = () => {
        setIsLoading(true)
        setError('')
        signInUsingGoogle()
        .then((result)=>{
            setUser(result.user)
            history.push(redirect_url);

        }).catch((err)=>{
            setError(err.message)
            alert(err.message)
        })
        .finally(()=>setIsLoading(false));
    }



    return (
        <div>
            <form>
           <div className="login-block">
           <h1>Login</h1>
           <input onClick={handleSignInGoogle} className="btn btn-warning text" type="button" value=" Log In  With  Google " />
           {
               error ? <p className="text-danger">{error}</p> : ''
           }
            </div>
           
           
            </form>
            
        </div>
    );
};

export default Login;