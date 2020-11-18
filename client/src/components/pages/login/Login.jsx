import React from "react"

import {
    Link    
} from "react-router-dom"

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import "./Login.scss"

class Login extends React.Component{
    render(){
        return (
            <div className="auth-section auth-padding-medium">
                <div className="auth-navbar">

                </div>
                <div id="auth-center-section">
                    <div id="auth-main-section">
                        <div className="auth-form-container">
                            <div className="auth-section">
                                <div className="auth-section">
                                    <form name="signin" method="post" className="auth-validate-form">
                                        <div className="auth-section">
                                            <div className="auth-form-box">
                                                <div className="auth-form-box-inner">
                                                    <h1>Sign-In</h1>
                                                    <div className="auth-row">
                                                        <label for="auth-email-field" class="auth-form-label">Email or mobile phone number</label>
                                                        <input type="email" name="email" id="auth-email-field" className="auth-input-text auth-span-12"/>
                                                    </div>
                                                    <div className="auth-section">
                                                        <span id="continue-btn" className="auth-button">
                                                            <input id="continue" type="submit" value="Continue"/>
                                                        </span>
                                                        <div id="legal-text-row">
                                                            By continuing, you agree to Amazon's
                                                            <Link to="signin_notification_condition_of_use"> Conditions of Use</Link> and 

                                                             <Link to="signin_notification_privacy_notice">Privacy Notice</Link>
                                                        </div>
                                                    </div>
                                                    <div className="auth-section">
                                                        <Link to="/help_page">
                                                            <ArrowDropDownIcon></ArrowDropDownIcon>
                                                            <span className="auth-expander-prompt">
                                                                Need help?
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="auth-divider divider-break">
                                    <h5>New to Amazon?</h5>
                                </div>
                                <span id="auth-create-account-link" className="auth-button auth-button-span12">
                                    <span class="auth-btn-inner">
                                        <Link to="/register" className="auth-button-text" role="button">Create your Amazon account</Link>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auth-footer">

                </div>
            </div>
        );
    }
}

export default Login;