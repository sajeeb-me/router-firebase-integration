import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h3>Knock Knock, who is there?</h3>
            <h2>Name: {user ? user.displayName : 'Bhoot'}</h2>
        </div>
    );
};

export default Products;