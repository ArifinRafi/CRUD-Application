import React from 'react';
import Form from './Form';
import Nav from './Nav';

const User = () => {
    return (
        <div className= 'container-flex'>
            <Nav></Nav>
        <div className='container w-50'>
        <Form></Form>
        </div> 
        </div>
    );
};

export default User;    