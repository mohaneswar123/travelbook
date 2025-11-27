import { useState, useEffect } from 'react';
import './customer.css';

export default function BookedEvents() {
  const [bookedEvents, setBookedEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    traveldate: '',
    passengers: 1
  });

  useEffect(() => {
    fetchBookedEvents();
  }, []);

  const fetchBookedEvents = () => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const customer = JSON.parse(sessionStorage.getItem('customer') || '{}');
    
    // Filter bookings for current customer
    const customerBookings = bookings.filter(b => b.customer?.id === customer.id);
    setBookedEvents(customerBookings);
  };

  const handleCancel = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      const updatedBookings = bookings.filter(b => b.id !== bookingId);
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      alert('Booking cancelled successfully!');
      fetchBookedEvents();
    }
  };

  const handleEdit = (booking) => {
    setEditingId(booking.id);
    setEditForm({
      traveldate: booking.traveldate,
      passengers: booking.passengers
    });
  };

  const handleUpdate = (bookingId) => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const updatedBookings = bookings.map(b => 
      b.id === bookingId 
        ? { ...b, ...editForm }
        : b
    );
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    alert('Booking updated successfully!');
    setEditingId(null);
    fetchBookedEvents();
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="bookings-page">
      <div className="bookings-container">
        <div className="bookings-header">
          <h2>🎫 My Travel Bookings</h2>
          <p>Manage and track all your travel reservations</p>
        </div>

        {bookedEvents.length > 0 ? (
          <div className="bookings-grid">
            {bookedEvents.map((event) => (
              <div key={event.id} className="booking-card">
                <div className="booking-card-header">
                  <div className="booking-id">
                    <span className="label">Booking ID</span>
                    <span className="value">#{event.id}</span>
                  </div>
                  <div className={`booking-status ${event.status.toLowerCase()}`}>
                    {event.status}
                  </div>
                </div>

                <div className="booking-route">
                  <div className="vehicle-badge">
                    {event.event?.vehicleType === 'CAR' && '🚗 Car'}
                    {event.event?.vehicleType === 'BUS' && '🚌 Bus'}
                    {event.event?.vehicleType === 'TRAIN' && '🚆 Train'}
                  </div>
                  <div className="route-info">
                    <span className="source">{event.event?.source}</span>
                    <span className="arrow">→</span>
                    <span className="destination">{event.event?.destination}</span>
                  </div>
                </div>

                <div className="booking-details">
                  <div className="detail-row">
                    <span className="icon">📅</span>
                    <div className="detail-content">
                      <label>Travel Date</label>
                      {editingId === event.id ? (
                        <input 
                          type="date" 
                          className="edit-input"
                          value={editForm.traveldate} 
                          onChange={(e) => setEditForm({...editForm, traveldate: e.target.value})}
                        />
                      ) : (
                        <p>{new Date(event.traveldate).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric' 
                        })}</p>
                      )}
                    </div>
                  </div>

                  <div className="detail-row">
                    <span className="icon">👥</span>
                    <div className="detail-content">
                      <label>Passengers</label>
                      {editingId === event.id ? (
                        <input 
                          type="number" 
                          min="1"
                          className="edit-input"
                          value={editForm.passengers} 
                          onChange={(e) => setEditForm({...editForm, passengers: e.target.value})}
                        />
                      ) : (
                        <p>{event.passengers} {event.passengers === 1 ? 'person' : 'people'}</p>
                      )}
                    </div>
                  </div>

                  <div className="detail-row">
                    <span className="icon">💰</span>
                    <div className="detail-content">
                      <label>Total Cost</label>
                      <p className="cost">₹{event.event?.cost * event.passengers}</p>
                    </div>
                  </div>
                </div>

                <div className="booking-actions">
                  {editingId === event.id ? (
                    <>
                      <button 
                        className="btn-save"
                        onClick={() => handleUpdate(event.id)}
                      >
                        ✓ Save
                      </button>
                      <button 
                        className="btn-cancel-edit"
                        onClick={handleCancelEdit}
                      >
                        ✕ Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        className="btn-edit"
                        onClick={() => handleEdit(event)}
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        className="btn-cancel"
                        onClick={() => handleCancel(event.id)}
                      >
                        🗑️ Cancel Booking
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-bookings">
            <div className="no-bookings-icon">🎫</div>
            <h3>No bookings yet</h3>
            <p>Start exploring amazing destinations and book your first trip!</p>
            <a href="/viewallevents" className="browse-btn">Browse Routes</a>
          </div>
        )}
      </div>
    </div>
  );
}