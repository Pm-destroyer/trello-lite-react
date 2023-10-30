/* eslint-disable react/prop-types */
import { useState } from 'react';
import './UserLogin.scss';

import { userAPI } from '../../../services/hook';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      // Perform your login logic here

      userAPI.login(formData);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center my-3" style={{ color: '#fff' }}>
        Trello lite
      </h1>

      <div className="d-flex flex-column justify-content-center">
        <div className="container px-4 d-flex flex-column justify-content-center login-box mx-auto bg-blur">
          <h3 className="my-4 text-center">Login with Trello lite</h3>
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Username"
              type="email"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="name@example.com"
            />
            <TextInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="abc@1234"
            />
            <div className="d-grid gap-2 mt-4 mb-3">
              <button className="btn btn-green" type="submit">
                Continue
              </button>
            </div>
          </form>

          <h5 className="text-center">OR</h5>

          <SocialLogins />
        </div>
      </div>
    </div>
  );
};

const TextInput = ({ label, type, id, name, value, onChange, placeholder }) => (
  <div className="d-flex flex-column mb-2">
    <label htmlFor={id} className="form-label me-auto">
      {label}
    </label>
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const SocialLogins = () => (
  <div className="mb-4">{/* Render your social login components here */}</div>
);

export { UserLogin };
