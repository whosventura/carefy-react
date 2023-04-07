import axios from "axios";
import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      
      const navigate = useNavigate();
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:8081/login', formData);
          if (response.data.status === 'Sucesso') {
            navigate('/');
          } else {
            alert('Erro');
          }
        } catch (err) {
          console.error(err);
          alert('Erro no servidor');
        }
      };
      
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };      

    return ( 
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                <strong>Email</strong>
                </label>
                <input type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleInputChange} className="form-control rounded-0" />
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                <strong>Password</strong>
                </label>
                <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleInputChange} className="form-control rounded-0" />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
            <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
            </form>
        </div>
        </div> 
        );
}

export default Login