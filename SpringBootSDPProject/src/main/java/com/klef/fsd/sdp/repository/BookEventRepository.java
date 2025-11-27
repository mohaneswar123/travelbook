package com.klef.fsd.sdp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.sdp.model.BookEvent;
import com.klef.fsd.sdp.model.Customer;

@Repository
public interface BookEventRepository extends JpaRepository<BookEvent,Integer>
{
  public List<BookEvent> findByCustomer(Customer customer);
}