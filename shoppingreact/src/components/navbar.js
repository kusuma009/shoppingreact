import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav style={{backgroundColor:'black'}}className="nav-navbar">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                  
                        <Link to="/">My Shop</Link>
                        <Link to="/cart">cart</Link>
                    
                </div>
            </nav>
   
        
    )
}

export default Navbar;