import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h3>Knock Knock, who is there?</h3>
            <h2>Name: {user ? user.displayName : 'Bhoot'}</h2>
        </div>
    );
};

export default Products;