import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './customer.css';

export default function CustomerProfile() 
{
  const [customer, setCustomer] = useState("");
  const navigate = useNavigate();
     
  useEffect(() => {
    const storedCustomer = sessionStorage.getItem('customer');
    if (storedCustomer) {
     setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  if (!customer) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {customer.name?.charAt(0).toUpperCase()}
            </div>
          </div>
          <h2 className="profile-title">My Profile</h2>
          <p className="profile-subtitle">Manage your account information</p>
        </div>

        <div className="profile-card">
          <div className="profile-info-grid">
            <div className="info-item">
              <div className="info-icon">👤</div>
              <div className="info-content">
                <label>Full Name</label>
                <p>{customer.name}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⚧️</div>
              <div className="info-content">
                <label>Gender</label>
                <p>{customer.gender}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🎂</div>
              <div className="info-content">
                <label>Date of Birth</label>
                <p>{customer.dob}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <label>Email Address</label>
                <p>{customer.email}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🔑</div>
              <div className="info-content">
                <label>Username</label>
                <p>{customer.username}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <label>Mobile Number</label>
                <p>{customer.mobileno}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <label>Location</label>
                <p>{customer.location}</p>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="update-btn" onClick={() => navigate('/updateprofile')}>
              ✏️ Update Profile
            </button>
            <button className="bookings-btn" onClick={() => navigate('/bookedevents')}>
              🎫 View My Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}