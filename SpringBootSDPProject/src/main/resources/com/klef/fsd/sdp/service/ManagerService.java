package com.klef.fsd.sdp.service;

import com.klef.fsd.sdp.model.Manager;

public interface ManagerService 
{
  public Manager checkmanagerlogin(String username,String password);
}