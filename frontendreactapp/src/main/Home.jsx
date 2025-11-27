import { Link } from 'react-router-dom';
import './style.css'; 

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">🌍 Travel Booking System</h1>
          <p className="hero-subtitle">Your Journey Starts Here</p>
          <p className="hero-description">Book Cars, Buses, and Trains to your favorite destinations across India</p>
          <div className="hero-buttons">
            <Link to="/customerregistration" className="btn-primary">Get Started</Link>
            <Link to="/customerlogin" className="btn-secondary">Sign In</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>Comfortable Cars</h3>
            <p>Travel in style with our premium car services</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚌</div>
            <h3>Luxury Buses</h3>
            <p>Enjoy comfortable long-distance bus journeys</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚆</div>
            <h3>Fast Trains</h3>
            <p>Quick and reliable train bookings</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>Competitive rates for all destinations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Booking</h3>
            <p>Simple and quick booking process</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>Safe and secure transactions</p>
          </div>
        </div>
      </div>

      {/* Popular Routes Section */}
      <div className="routes-section">
        <h2 className="section-title">Popular Routes</h2>
        <div className="routes-grid">
          <div className="route-card">
            <div className="route-image delhi-agra"></div>
            <div className="route-info">
              <h4>Delhi → Agra</h4>
              <p>See the magnificent Taj Mahal</p>
              <span className="route-price">₹2,500</span>
            </div>
          </div>
          <div className="route-card">
            <div className="route-image mumbai-goa"></div>
            <div className="route-info">
              <h4>Mumbai → Goa</h4>
              <p>Beach paradise awaits</p>
              <span className="route-price">₹1,200</span>
            </div>
          </div>
          <div className="route-card">
            <div className="route-image bangalore-mysore"></div>
            <div className="route-info">
              <h4>Bangalore → Mysore</h4>
              <p>Explore the palace city</p>
              <span className="route-price">₹2,200</span>
            </div>
          </div>
          <div className="route-card">
            <div className="route-image delhi-mumbai"></div>
            <div className="route-info">
              <h4>Delhi → Mumbai</h4>
              <p>Connect two metros</p>
              <span className="route-price">₹1,500</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of happy travelers</p>
        <Link to="/customerregistration" className="btn-cta">Book Your Travel Now</Link>
      </div>
    </div>
  );
}