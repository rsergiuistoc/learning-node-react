import React from "react"


class Login extends React.Component{
    render(){
        return (
            <div className="auth-section">
                <div className="auth-navbar">

                </div>
                <div id="auth-center-section">
                    <div id="auth-main-section">
                        <div className="auth-form-container">
                            <div>
                                <div>
                                    <form className="auth-validate-form">
                                        <div className="auth-section">
                                            <div className="auth-form-box">
                                                <div className="auth-form-box-inner">
                                                    <h1>Sign-In</h1>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="auth-divider">
                                    <h5>New to Amazon</h5>
                                </div>
                                <span id="auth-create-account-link"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auth-fade-line">

                </div>
                <div className="auth-footer">

                </div>
            </div>
        );
    }
}

export default Login;