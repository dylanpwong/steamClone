const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function(data){
    let errors={};

    // Returns a boolean if email and/or password is properly formatted...
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : "";

    // Otherwise, returns errors based on those booleans
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "password field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}