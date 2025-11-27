import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerHome() 
{
     const [customer, setCustomer] = useState("");
     const navigate = useNavigate();
     
     useEffect(() => {
       const storedCustomer = sessionStorage.getItem('customer');
       if (storedCustomer) {
        setCustomer(JSON.parse(storedCustomer));
       }
     }, []);
     
  return (
    <div className="customer-home">
      <div className="welcome-section">
        <h1>Welcome back, {customer.name}! 🎉</h1>
        <p>Ready for your next adventure?</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={() => navigate('/viewallevents')}>
          <div className="card-icon">🗺️</div>
          <h3>Browse Routes</h3>
          <p>Explore available travel destinations</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/bookedevents')}>
          <div className="card-icon">🎫</div>
          <h3>My Bookings</h3>
          <p>View and manage your bookings</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/customerprofile')}>
          <div className="card-icon">👤</div>
          <h3>My Profile</h3>
          <p>Update your personal information</p>
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-card">
          <h4>🚗 Car</h4>
          <p>Comfortable rides</p>
        </div>
        <div className="stat-card">
          <h4>🚌 Bus</h4>
          <p>Budget-friendly</p>
        </div>
        <div className="stat-card">
          <h4>🚆 Train</h4>
          <p>Scenic journeys</p>
        </div>
      </div>

      <div className="featured-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400)'}}>
            <div className="destination-overlay">
              <h3>Delhi - Agra</h3>
              <p>Visit the Taj Mahal</p>
            </div>
          </div>
          <div className="destination-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400)'}}>
            <div className="destination-overlay">
              <h3>Mumbai - Goa</h3>
              <p>Beach paradise</p>
            </div>
          </div>
          <div className="destination-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400)'}}>
            <div className="destination-overlay">
              <h3>Bangalore - Mysore</h3>
              <p>Royal heritage</p>
            </div>
          </div>
          <div className="destination-card" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400)'}}>
            <div className="destination-overlay">
              <h3>Chennai - Pondicherry</h3>
              <p>Coastal beauty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}