/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import LoginImg from '../assets/imgs/sign-in.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header />
      <div className="loginMainDiv">
        <div className="LoginSubDiv">
          <div style={{ width: '75px', height: '75px' }}>
            <img src={LoginImg} alt="." style={{ width: '100%', height: '100%' }} />
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to access your account or explore as a guest.</p>
          {/* form inputs */}
          <div className="formInputMainDiv">
            <form onSubmit={handleSubmit}>
              <h2>Email</h2>
              <label htmlFor="Email" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="emailInput"
              />
              <br />
              <h2>Password</h2>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="passwordInput"
              />
              <br />
              <button
                type="submit"
                disabled={!formData.email || !formData.password}
                className="LoginformBtn"
              >
                Login as User
              </button>
            </form>
            <p>Or, continue as a specific role:</p>
            <div className="AdminVenderBtns">
              <button className="AdminBtnsLogin1">Vendor</button>
              <button className="AdminBtnsLogin2">Admin</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
