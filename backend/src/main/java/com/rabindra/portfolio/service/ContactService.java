package com.rabindra.portfolio.service;
import com.rabindra.portfolio.dto.ContactRequest;
import com.rabindra.portfolio.entity.ContactMessage;
import com.rabindra.portfolio.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service @RequiredArgsConstructor
public class ContactService {
 private final ContactRepository repo;
 public ContactMessage save(ContactRequest r){
   return repo.save(ContactMessage.builder().name(r.getName()).email(r.getEmail()).message(r.getMessage()).build());
 }
}
