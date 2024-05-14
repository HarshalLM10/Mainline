import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/FirebaseConfig';

const Signup = () => {
    // State declarations
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = async () => {
        if(email === "" || password === ""){
            return alert("Please fill all fields")
        }
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup Successful");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    }

    // Event handler functions
    const handleUsernameChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your login logic here
        console.log('E-mail:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container"> {/* Apply custom CSS class */}
            <form onSubmit={handleSubmit} className="login-form"> {/* Apply custom CSS class */}
                <h2>Signup</h2>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" value={email} onChange={handleUsernameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                
                <button type="submit" onClick={signup}>Login</button>
            </form>
        </div>
    );
};

export default Signup;
