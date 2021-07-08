import React from 'react';
import {Link,Router,Route} from 'react-router-dom';
const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Happy shopping</h1>
                </div>
                <nav className="nav-wrapper">
                <div className="container">
                  <Router>
                    <Link to="/">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                    </ul>
                    </Router>
                </div>
            </nav>
                </div>
                </div>
            
    );
}

export default App;