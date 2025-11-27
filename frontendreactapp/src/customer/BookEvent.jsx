import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './customer.css';

// Default sample travel routes
const defaultEvents = [
  { id: 1, vehicleType: 'CAR', source: 'Delhi', destination: 'Agra', capacity: 4, cost: 2500 },
  { id: 2, vehicleType: 'CAR', source: 'Mumbai', destination: 'Pune', capacity: 4, cost: 1800 },
  { id: 3, vehicleType: 'CAR', source: 'Bangalore', destination: 'Mysore', capacity: 4, cost: 2200 },
  { id: 4, vehicleType: 'CAR', source: 'Chennai', destination: 'Pondicherry', capacity: 4, cost: 1500 },
  { id: 5, vehicleType: 'BUS', source: 'Delhi', destination: 'Jaipur', capacity: 40, cost: 800 },
  { id: 6, vehicleType: 'BUS', source: 'Mumbai', destination: 'Goa', capacity: 45, cost: 1200 },
  { id: 7, vehicleType: 'BUS', source: 'Bangalore', destination: 'Hyderabad', capacity: 50, cost: 950 },
  { id: 8, vehicleType: 'BUS', source: 'Kolkata', destination: 'Darjeeling', capacity: 35, cost: 1100 },
  { id: 9, vehicleType: 'BUS', source: 'Chennai', destination: 'Coimbatore', capacity: 42, cost: 750 },
  { id: 10, vehicleType: 'TRAIN', source: 'Delhi', destination: 'Mumbai', capacity: 200, cost: 1500 },
  { id: 11, vehicleType: 'TRAIN', source: 'Bangalore', destination: 'Chennai', capacity: 180, cost: 600 },
  { id: 12, vehicleType: 'TRAIN', source: 'Kolkata', destination: 'Delhi', capacity: 220, cost: 1800 },
  { id: 13, vehicleType: 'TRAIN', source: 'Mumbai', destination: 'Bangalore', capacity: 190, cost: 1400 },
  { id: 14, vehicleType: 'TRAIN', source: 'Hyderabad', destination: 'Pune', capacity: 160, cost: 900 },
  { id: 15, vehicleType: 'TRAIN', source: 'Chennai', destination: 'Bangalore', capacity: 175, cost: 550 }
];

export default function BookEvent() 
{
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const eventId = parseInt(queryParams.get('eventid'));
  
  const selectedEvent = defaultEvents.find(e => e.id === eventId);

  const [formData, setFormData] = useState({
    vehicleType: selectedEvent?.vehicleType || '',
    source: selectedEvent?.source || '',
    destination: selectedEvent?.destination || '',
    traveldate: '',
    passengers: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const customer = JSON.parse(sessionStorage.getItem("customer") || "{}");
    
    const bookingData = {
      id: Math.floor(100000 + Math.random() * 900000),
      event: selectedEvent,
      customer: customer,
      ...formData,
      status: 'BOOKED',
      bookingtime: new Date().toISOString()
    };

    // Get existing bookings
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    alert("Travel booked successfully!");
    navigate('/bookedevents');
  };

  if (!selectedEvent) {
    return <div style={{padding: '20px', textAlign: 'center'}}>Event not found!</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Book Your Travel</h3>
      
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <h4>Selected Route</h4>
        <p><strong>Vehicle Type:</strong> {selectedEvent.vehicleType}</p>
        <p><strong>From:</strong> {selectedEvent.source}</p>
        <p><strong>To:</strong> {selectedEvent.destination}</p>
        <p><strong>Cost:</strong> ₹{selectedEvent.cost}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '20px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>Travel Date: </label>
          <input 
            type="date" 
            name="traveldate" 
            value={formData.traveldate} 
            onChange={handleChange} 
            required 
            style={{width: '100%', padding: '8px'}}
          />
        </div>
        
        <div style={{marginBottom: '20px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>Number of Passengers: </label>
          <input 
            type="number" 
            name="passengers" 
            min="1" 
            max={selectedEvent.capacity}
            value={formData.passengers} 
            onChange={handleChange} 
            required 
            style={{width: '100%', padding: '8px'}}
          />
        </div>
        
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button 
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 40px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}