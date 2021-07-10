import React from 'react';
import {Link,Router,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Product from './components/product/product';
const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Happy shopping</h1>
                </div>
                <nav className="nav-wrapper">
                <div className="container">
                    <Switch>
                        <Route exact path="/login" component="login"></Route>
                        <Route exact path="/product" component="product"></Route>
                        <Route exact path="/cart" component="cart"></Route>
                        <Route path="/" component="home"></Route>
                        
                        

                    </Switch>
                </div>
            </nav>
                </div>
                </div>
            
    );
}


export default App;