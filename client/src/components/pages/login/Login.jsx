import React from "react"
import axios from "axios"
import { Link } from "@material-ui/core";


class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //TODO: remove this after  finishind funcitonality
        
        axios.post("http://localhost:8080/api/auth/login", 
        {
            email: this.state.email,
            password: this.state.password
        }).then( (response) => {
            console.log(data);
            if (response.data.accessToken){
                localStorage.setItem("token", JSON.stringify(response.data));
            }
        }).catch( error => {
            console.log(error);
        })

        console.log(this.state.email + ' ' + this.state.password);
        event.preventDefault(); // prevents the page being refreshed on form submissio ( which is the default behaviour)
    }

    render(){
        return (
            <div className="auth-section">
                <div className="auth-form-navbar">
                     <h1>Sign-In</h1>
                </div>
                <div className="auth-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Email:
                            <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                        </label>
                        <input type="submit" value="Sign In" />
                     </form>
                </div>
        
                <div className="auth-form-footer">
                    <span> No account ? 
                        <Link path="/register">
                            Create one
                        </Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default Login;