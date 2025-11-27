import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function ViewAllEvents() {
  const [events] = useState(defaultEvents);
  const [searchTerms, setSearchTerms] = useState({
    vehicleType: '',
    source: '',
    destination: '',
    cost: ''
  });

  const navigate = useNavigate();

  const handleBookClick = (eventId) => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    if (!customer || !customer.id) {
      alert("Customer not logged in");
      return;
    }

    navigate(`/bookevent?eventid=${eventId}`);
  };

  const handleSearchChange = (e, field) => {
    setSearchTerms(prev => ({ ...prev, [field]: e.target.value }));
  };

  const filteredEvents = events.filter(event => {
    return (
      event.vehicleType.toLowerCase().includes(searchTerms.vehicleType.toLowerCase()) &&
      event.source.toLowerCase().includes(searchTerms.source.toLowerCase()) &&
      event.destination.toLowerCase().includes(searchTerms.destination.toLowerCase()) &&
      event.cost.toString().includes(searchTerms.cost)
    );
  });

  return (
    <div className="event-container">
      <h3 className="event-heading">🌍 Available Travel Routes</h3>
      <table className="event-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Capacity</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
          <tr>
            <th></th>
            <th><input type="text" placeholder="Search vehicle..." onChange={e => handleSearchChange(e, 'vehicleType')} /></th>
            <th><input type="text" placeholder="Search source..." onChange={e => handleSearchChange(e, 'source')} /></th>
            <th><input type="text" placeholder="Search destination..." onChange={e => handleSearchChange(e, 'destination')} /></th>
            <th></th>
            <th><input type="text" placeholder="Search cost..." onChange={e => handleSearchChange(e, 'cost')} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>
                  <strong>
                    {event.vehicleType === 'CAR' && '🚗 Car'}
                    {event.vehicleType === 'BUS' && '🚌 Bus'}
                    {event.vehicleType === 'TRAIN' && '🚆 Train'}
                  </strong>
                </td>
                <td><strong>{event.source}</strong></td>
                <td><strong>{event.destination}</strong></td>
                <td>{event.capacity} seats</td>
                <td style={{color: '#2a5298', fontWeight: 'bold', fontSize: '1.1rem'}}>₹{event.cost}</td>
                <td>
                  <button className="book-button" onClick={() => handleBookClick(event.id)}>
                    Book Now
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{padding: '2rem', fontSize: '1.2rem', color: '#666'}}>
                No travel routes found. Try different search terms.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}