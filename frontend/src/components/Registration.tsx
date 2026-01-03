import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    alert('User Registered!');
  };

  return (
    <div className="registration-container">
      <div className="photo-placeholder">Photo</div>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-row">
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="country" placeholder="Country" onChange={handleChange} />
        </div>
        <textarea 
          name="additionalInfo" 
          placeholder="Additional Information ...." 
          onChange={handleChange}
        />
        <button type="submit" className="register-btn">Register Users</button>
      </form>
    </div>
  );
};

export default Registration;