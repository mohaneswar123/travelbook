package com.klef.fsd.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Customer;
import com.klef.fsd.sdp.model.Manager;
import com.klef.fsd.sdp.repository.AdminRepository;
import com.klef.fsd.sdp.repository.CustomerRepository;
import com.klef.fsd.sdp.repository.ManagerRepository;

@Service
public class AdminServiceImpl implements AdminService
{
  @Autowired
    private AdminRepository adminRepository;
  
  @Autowired
    private ManagerRepository managerRepository;
  
  @Autowired
  private CustomerRepository customerRepository;
  
  @Override
  public Admin checkadminlogin(String username, String password) 
  {
    return adminRepository.findByUsernameAndPassword(username, password);
  }

  @Override
  public String addeventmanager(Manager manager) 
  {
    managerRepository.save(manager);
    return "Event Manager Added Successfully";
  }

  @Override
  public List<Manager> displayeventmanagers() 
  {
    return managerRepository.findAll();
  }

  @Override
  public List<Customer> displaycustomers() 
  {
    return customerRepository.findAll();
  }

}