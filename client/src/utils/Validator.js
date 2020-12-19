import validator from "validator"


function validateEmail(email){
    if ( validator.isEmpty(email)){
        return 'Email is required';
    } else if ( !validator.isEmail(email)){
        return 'Invalid Email address';
    }
    return false;
}

function validatePassword(password){
    if( validator.isEmpty(password)){
        return 'Password is required';
    } else if( !validator.isLength(password, {min: 8})){
        return 'Password should be minimum 8 characters';
    }
    return false;
}

function validateConfirmPassword(password, confirmPassword){

    if( validator.isEmpty(confirmPassword)){
        return 'Confirm Password is required';
    } else if ( password !== confirmPassword){
        return 'Passwords must match';
    }
    return false;
}

export {validateEmail, validatePassword, validateConfirmPassword};