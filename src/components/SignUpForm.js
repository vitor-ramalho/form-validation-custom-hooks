import React, { useState, useEffect } from 'react';
import validation from './validation';
import useForm from './useForm';
import '../App.css';


const SignUpForm = ({ submitForm }) => {

    const { handleChange, handleSubmit, values, errors } = useForm(submitForm);

    return (
        <div className="container">
            <div className="app-wrapper">
                <h2 className="title"> Create Account </h2>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input
                            className="input"
                            type="text"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <p className="error">{errors.fullName}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input
                            className="input"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
