package com.klef.fsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsd.sdp.model.Manager;
import com.klef.fsd.sdp.repository.ManagerRepository;

@Service
public class ManagerServiceImpl implements ManagerService
{
  @Autowired
    private ManagerRepository managerRepository;
  
  @Override
  public Manager checkmanagerlogin(String username, String password) 
  {
    return managerRepository.findByUsernameAndPassword(username, password);
  }

}