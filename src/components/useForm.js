import React, { useState, useEffect } from 'react';
import validation from './validation';

const useForm = (submitForm) => {

    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    }

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return { handleChange, handleSubmit, errors, values }

}

export default useForm;