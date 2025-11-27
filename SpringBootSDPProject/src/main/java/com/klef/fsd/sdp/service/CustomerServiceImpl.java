package com.klef.fsd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.BookEvent;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.Event;
import com.klef.fsd.sdp.repository.BookEventRepository;
import com.klef.fsd.sdp.repository.CustomerRepository;
import com.klef.fsd.sdp.repository.EventRepository;

@Service
public class CustomerServiceImpl implements CustomerService
{
	@Autowired
    private CustomerRepository customerRepository;
	
	@Autowired
	private EventRepository eventRepository;
	
	@Autowired
	private BookEventRepository bookEventRepository;
	
	@Override
	public String customerregistration(Customer customer) 
	{
		customerRepository.save(customer);
		return "Customer Registered Successfully";
	}

	@Override
	public Customer checkcustomerlogin(String username, String password) 
	{
		return customerRepository.findByUsernameAndPassword(username, password);
	}

	@Override
	public String customerupdateprofile(Customer customer) 
	{
		Optional<Customer> object	= customerRepository.findById(customer.getId());
		
		String msg = null;
			  
			  if(object.isPresent())
			  {
				  Customer c = object.get();
				  
				  c.setName(customer.getName());
				  c.setDob(customer.getDob());
				  c.setMobileno(customer.getMobileno());
				  c.setEmail(customer.getEmail());
				  c.setPassword(customer.getPassword());
				  c.setLocation(customer.getLocation());
				  
				  customerRepository.save(customer);
				  
				  msg = "Customer Profile Updated Successfully";
			  }
			  else
			  {
				  msg = "Customer ID Not Found to Update";
			  }
			  return msg;
	}

	@Override
	public List<Event> viewallevents() 
	{
	   return eventRepository.findAll();
	}

	@Override
	public Customer getCustomerById(int cid) 
	{
		return customerRepository.findById(cid).orElse(null);
	}

	@Override
	public Event getEventById(int eid) 
	{
		return eventRepository.findById(eid).orElse(null);
	}

	@Override
	public String bookevent(BookEvent bookEvent) 
	{
		bookEventRepository.save(bookEvent);
		return "Travel Booked Successfully";
	}

	@Override
	public List<BookEvent> getbookedeventsByCustomer(int cid) 
	{
		Customer customer = customerRepository.findById(cid).orElse(null);
		return bookEventRepository.findByCustomer(customer);
	}

	@Override
	public String cancelbooking(int bookingId) 
	{
		if(bookEventRepository.existsById(bookingId))
		{
			bookEventRepository.deleteById(bookingId);
			return "Booking Cancelled Successfully";
		}
		return "Booking Not Found";
	}

	@Override
	public String updatebooking(BookEvent bookEvent) 
	{
		BookEvent existing = bookEventRepository.findById(bookEvent.getId()).orElse(null);
		if(existing != null)
		{
			existing.setTraveldate(bookEvent.getTraveldate());
			existing.setTraveltime(bookEvent.getTraveltime());
			existing.setPassengers(bookEvent.getPassengers());
			bookEventRepository.save(existing);
			return "Booking Updated Successfully";
		}
		return "Booking Not Found";
	}

}