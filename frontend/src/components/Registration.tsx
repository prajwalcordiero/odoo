import React, { useState } from 'react';

const Registration: React.FC<{ setIsLoading: (val: boolean) => void }> = ({ setIsLoading }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    password: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration Successful!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server connection failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="photo-placeholder">Photo</div>
      <div className="form-row">
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      </div>
      <div className="form-row">
        <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      </div>
      <div className="form-row">
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />
      </div>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <textarea name="additionalInfo" placeholder="Additional Information ...." onChange={handleChange} />
      <button type="submit">Register Users</button>
    </form>
  );
};

export default Registration;