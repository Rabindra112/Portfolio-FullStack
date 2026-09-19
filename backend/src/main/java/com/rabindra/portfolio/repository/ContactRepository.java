package com.rabindra.portfolio.repository;
import com.rabindra.portfolio.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ContactRepository extends JpaRepository<ContactMessage,Long>{}
