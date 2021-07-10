import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: ''}
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
    }
    handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully');
    }
    render() {
        return(<React.Fragment>
            <form>
                <h1>Login</h1>
                <div className="form-group">
                    <label>name:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.name} id="name" placeholder="please Enter your Name" name="name" onChange={this.setEmpState} />
                </div>
               <button type="submit" className="btn btn-danger" onClick={this.handleLogin}>Submit</button>
           </form>
        </React.Fragment>)
    }
}
export default Login;
