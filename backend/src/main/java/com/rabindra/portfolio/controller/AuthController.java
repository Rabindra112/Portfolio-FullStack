package com.rabindra.portfolio.controller;
import com.rabindra.portfolio.dto.*;
import com.rabindra.portfolio.security.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/api/auth") @RequiredArgsConstructor
public class AuthController {
 private final AuthenticationManager authenticationManager;
 private final JwtService jwt;
 @PostMapping("/login")
 public LoginResponse login(@Valid @RequestBody LoginRequest r){
   authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(r.getUsername(),r.getPassword()));
   return new LoginResponse(jwt.generate(r.getUsername()));
 }
}
