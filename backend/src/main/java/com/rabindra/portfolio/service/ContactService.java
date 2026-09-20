package com.rabindra.portfolio.service;

import com.rabindra.portfolio.dto.ContactRequest;
import com.rabindra.portfolio.entity.ContactMessage;
import com.rabindra.portfolio.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository repo;
    private final JavaMailSender mailSender;

    public ContactMessage save(ContactRequest r) {

        // 1. Save message to database
        ContactMessage contactMessage = ContactMessage.builder()
                .name(r.getName())
                .email(r.getEmail())
                .subject(r.getSubject())
                .message(r.getMessage())
                .build();

        ContactMessage savedMessage = repo.save(contactMessage);

        // 2. Send email to your Gmail
        sendEmail(r);

        return savedMessage;
    }

    private void sendEmail(ContactRequest r) {

        SimpleMailMessage mail = new SimpleMailMessage();

        // Gmail where you want to receive portfolio messages
        mail.setTo("rabindrakrmahato1123@gmail.com");

        mail.setSubject("Portfolio Contact: " + r.getSubject());

        mail.setText(
                "You received a new message from your portfolio.\n\n" +
                        "Name: " + r.getName() + "\n" +
                        "Email: " + r.getEmail() + "\n" +
                        "Subject: " + r.getSubject() + "\n\n" +
                        "Message:\n" +
                        r.getMessage()
        );

        mailSender.send(mail);
    }
}