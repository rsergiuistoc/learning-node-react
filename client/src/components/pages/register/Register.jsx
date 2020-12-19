import axios from "axios";
import React from "react"
import { Link } from "@material-ui/core";
import { 
    validateEmail, 
    validatePassword,
    validateConfirmPassword
} from "../../../utils/Validator"

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: { value: '', error: '', validateOnChange: true},
            lastName: { value: '', error: '', validateOnChange: true},
            email: { value: '', error: '', validateOnChange: true, validator: validateEmail},
            password: { value: '', error: '', validateOnChange: true, validator: validatePassword},
            confirmPassword: { value: '', error: '', validateOnChange: false, validator: validateConfirmPassword},
            complicanceAgreed: { value: false, error: '', validateOnChange: false},
            validForm: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(state => ({
            [name]: {
                ...state[name],
                value: value,
                error: state[name]['validateOnChange'] ? this.validate(state[name], value): ''
            }
        }));
    }

    handleSubmit(event){
        event.preventDefault();
        const emailError =  this.state.email.validator(this.state.email.value);
        const passwordError =  this.state.password.validator(this.state.password.value);
        const confirmPasswordError = this.state.confirmPassword.validator(this.state.password.value, this.state.confirmPassword.value);

        if([emailError, passwordError, confirmPasswordError].every( e => e === false)){
            axios.post(process.env.SERVER_URL + "/auth/register"

            ).then().catch( error => {

            })
            this.setState(...this.state);
        }else{
            this.setState( state => ({
                email: {
                    ...state.email,
                    error: emailError
                },
                password: {
                    ...state.password,
                    error: passwordError
                },
                confirmPassword: {
                    ...state.confirmPassword,
                    error: confirmPasswordError
                }
            }));
        }
    }

    validate(field, value){
        const validator = field['validator']; 
        if ( validator ){
            return validator(value);
        }
    }

    render(){
        const { firstName, lastName, email, password, confirmPassword, complicanceAgreed} = this.state;
        return (
            <div className="auth-section">
                <div className="auth-form-navbar">
                     <h1>Sign-In</h1>
                </div>
                <div className="auth-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>First Name: </label>
                            <input 
                                name="firstName" 
                                type="text" 
                                placeholder="Enter your first name"
                                value={firstName.value} 
                                onChange={this.handleInputChange} />
                            <div className="form-field-errors">{firstName.error}</div>
                        </div>
                        <div className="form-group">
                            <label>Last Name: </label>
                            <input 
                                name="lastName" 
                                type="text" 
                                placeholder="Enter your last name"
                                value={lastName.value}
                                onChange={this.handleInputChange} />
                            <div className="form-field-errors">{lastName.error}</div>
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input 
                                name="email" 
                                type="email" 
                                placeholder="Enter your email"
                                value={email.value} 
                                onChange={this.handleInputChange} />
                            <div className="form-field-errors">{email.error}</div>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input 
                                name="password" 
                                type="password" 
                                placeholder="Enter your password"
                                value={password.value} 
                                onChange={this.handleInputChange} />
                            <div className="form-field-errors">{password.error}</div>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password: </label>
                            <input 
                                name="confirmPassword"
                                type="password" 
                                placeholder="Confirm password"
                                value={confirmPassword.value} 
                                onChange={this.handleInputChange} />
                            <div className="form-field-errors">{confirmPassword.error}</div>
                        </div>
                        <div className="form-group">
                            <label>Aggrement</label>
                            <input 
                                name="complicanceAgreed" 
                                type="checkbox" 
                                value={complicanceAgreed.value} 
                                onChange={this.handleInputChange} />
                            <div className="form-field-errors">{complicanceAgreed.error}</div>
                        </div>
                        <input type="submit" value="Sign In" />
                     </form>
                </div>
        
                <div className="auth-form-footer">
                    <span> Already have an account ? 
                        <Link path="/login">
                            Sign In
                        </Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default Register;