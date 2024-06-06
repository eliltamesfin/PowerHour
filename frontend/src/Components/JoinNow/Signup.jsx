import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required /><br />
                <label>Last Name:</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required /><br />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br />
                <label>Repeat Password:</label>
                <input type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required /><br />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already a member? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;
