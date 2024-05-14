import React, { useState } from 'react';
import './login.css'; // Import custom CSS file
import { auth } from '../Firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    if (email === "" || password === "") {
                return alert("Please fill all fields")
            }
            try {
                const users = await signInWithEmailAndPassword(auth, email, password);
                const user = localStorage.setItem('user', JSON.stringify(users));
                alert("Login successful");
                navigate('/')
                setemail("");
                setPassword("");
            } catch (error) {
                console.log(error);
            }
    }


  const handleUsernameChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container"> {/* Apply custom CSS class */}
      <form onSubmit={handleSubmit} className="login-form"> {/* Apply custom CSS class */}
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="text" id="email" value={email} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
