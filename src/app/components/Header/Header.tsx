import React from 'react';

import { NavLink } from 'react-router-dom';
export let Header =()=>{
    return(
        
        <header >  
            
        <h1>Book Store</h1>
        
            <NavLink exact to="/"
                className="button" 
                activeClassName="success">Home</NavLink>

            <NavLink to="/books"
            className="button" 
            activeClassName="success">Books</NavLink>

            <NavLink to="/cart"
            className="button" 
            activeClassName="success">Cart</NavLink>

            <NavLink to="/checkout"
            className="button" 
            activeClassName="success">Checkout</NavLink>

            <NavLink to="/adminbooks"
            className="button" 
            activeClassName="success">Manage Books Admin</NavLink>

            <NavLink to="/manageorders"
            className="button" 
            activeClassName="success">Manage Orders Admin</NavLink>




            <hr/>
        </header>
    )
}