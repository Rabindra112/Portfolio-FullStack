package com.rabindra.portfolio.controller;
import com.rabindra.portfolio.dto.ContactRequest;
import com.rabindra.portfolio.entity.ContactMessage;
import com.rabindra.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/api/contact") @RequiredArgsConstructor
public class ContactController {
 private final ContactService service;
 @PostMapping @ResponseStatus(HttpStatus.CREATED)
 public ContactMessage save(@Valid @RequestBody ContactRequest r){return service.save(r);}
}
