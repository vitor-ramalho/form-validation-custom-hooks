const validation = (values) => {
    let errors = {};

    if (!values.fullName) {
        errors.fullName = "Name is required."
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "email is invalid"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 5) {
        errors.password = "Password must be more than five characters."
    }
    return errors
}

export default validation