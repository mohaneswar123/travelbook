package com.klef.fsd.sdp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "travel_table")
public class Event 
{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column(nullable = false,length = 50)
  private String vehicleType;
  @Column(nullable = false,length = 100)
  private String source;
  @Column(nullable = false,length = 100)
  private String destination;
  @Column(nullable = false)
  private int capacity;
  @Column(nullable = false)
  private double cost;

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getVehicleType() {
	return vehicleType;
}

public void setVehicleType(String vehicleType) {
	this.vehicleType = vehicleType;
}

public String getSource() {
	return source;
}

public void setSource(String source) {
	this.source = source;
}

public String getDestination() {
	return destination;
}

public void setDestination(String destination) {
	this.destination = destination;
}

public int getCapacity() {
	return capacity;
}

public void setCapacity(int capacity) {
	this.capacity = capacity;
}

public double getCost() {
	return cost;
}

public void setCost(double cost) {
	this.cost = cost;
}
}
