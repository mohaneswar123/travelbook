package com.klef.fsd.sdp.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "booking_table")
public class BookEvent 
{
    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "travel_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Column(nullable = false)
    private String traveldate;

    @Column(nullable = false)
    private String traveltime;

    @Column(nullable = false)
    private int passengers;

    @Column(nullable = false)
    private String status;

    // Automatically sets the booking time at record creation
    @CreationTimestamp
    @Column(nullable = false)
    private LocalDateTime bookingtime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getTraveldate() {
        return traveldate;
    }

    public void setTraveldate(String traveldate) {
        this.traveldate = traveldate;
    }

    public String getTraveltime() {
        return traveltime;
    }

    public void setTraveltime(String traveltime) {
        this.traveltime = traveltime;
    }

    public int getPassengers() {
        return passengers;
    }

    public void setPassengers(int passengers) {
        this.passengers = passengers;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getBookingtime() {
        return bookingtime;
    }

    public void setBookingtime(LocalDateTime bookingtime) {
        this.bookingtime = bookingtime;
    }

	@Override
	public String toString() {
		return "BookEvent [id=" + id + ", event=" + event + ", customer=" + customer + ", traveldate=" + traveldate
				+ ", traveltime=" + traveltime + ", passengers=" + passengers + ", status=" + status
				+ ", bookingtime=" + bookingtime + "]";
	}
}