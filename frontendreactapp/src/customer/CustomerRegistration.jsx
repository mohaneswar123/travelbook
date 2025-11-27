import { useState } from 'react';
import axios from 'axios';
import config from '../config'

export default function CustomerRegistration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username:'',
    password: '',
    mobileno: '',
    location: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    try
    {
        const response = await axios.post(`${config.url}/customer/registration`, formData);
        if (response.status === 200) // if succcessfully added
        {
            setMessage(response.data);
            setFormData({
              name: '',
              gender: '',
              dob: '',
              email: '',
              username:'',
              password: '',
              mobileno: '',
              location: ''
            });
        }
    } 
    catch (error) 
    {
      if(error.response) 
      {
        setMessage("")
        setError(error.response.data);
      }
      else 
      {
        setMessage("")
        setError("An unexpected error occurred.");
      }
    }

  };
  
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-overlay">
            <h2>Join Us Today!</h2>
            <p>Create an account and explore amazing destinations</p>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-form-wrapper">
            <h3 className="auth-heading">🎫 Create Account</h3>
            <p className="auth-subtext">Start your journey with us</p>
            
            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mobileno">Mobile No</label>
                  <input type="tel" id="mobileno" value={formData.mobileno} onChange={handleChange} placeholder="9876543210" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" value={formData.location} onChange={handleChange} placeholder="City, State" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" value={formData.username} onChange={handleChange} placeholder="Choose username" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Min. 6 characters" required />
                </div>
              </div>
              
              <button type="submit" className="auth-button">
                Create Account
              </button>
              
              <p className="auth-footer">
                Already have an account? <a href="/customerlogin">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
