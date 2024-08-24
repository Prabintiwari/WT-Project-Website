export default function Validation(values) {
    const errors = {}

    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (values.email === "") {
        errors.email = "Email is required";
    } 
    else if (!email_regex.test(values.email)) {
        errors.email = "Email is invalid";
    }

    if(values.password === "") {
        errors.password = "Password is required";
    }   
    else if(!password_regex.test(values.password)) {
        errors.password = "Password is invalid";
    }

    if(values.confirmPassword === "") {
        errors.confirmPassword = "Confirm Password is required";
    } 
    else if(values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password does not match";
    }

    return errors;
}