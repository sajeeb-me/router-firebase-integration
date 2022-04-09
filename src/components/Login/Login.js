import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;