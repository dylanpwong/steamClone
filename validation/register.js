const Validator = require("validator");
const validText = require("./valid-text");


module.exports = function validateRegisterInput(data){
    let errors ={};

    data.username = validText(data.username) ? data.username : "";
    data.email = validText(data.email) ? data.email : "";
    data.email2 = validText(data.email2) ? data.email2 : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2: '';
    
    if(!Validator.isLength(data.username,{min: 4, max: 30})){
        errors.username = 'Username must be between 4 and 30 characters';
    }
    if(Validator.isEmpty(data.username)){
        errors.username = 'Username field is required';
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    // if(data.email != data.email2) {
    //     errors.email2 = 'Confirmed email is not identical';
    // }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    
    if(!Validator.isLength(data.password,{min: 4, max: 30})){
        errors.username = 'Username must be between 4 and 22 characters';
    }
    
    if(data.password != data.password2) {
        errors.password2 = 'Confirmed password is not identical';
    }

    return({
        errors,
        isValid: Object.keys(errors).length === 0
    })
}

// === doesnt convert type
// == converts, is slower