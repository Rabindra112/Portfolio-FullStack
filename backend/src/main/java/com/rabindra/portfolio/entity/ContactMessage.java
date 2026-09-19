package com.rabindra.portfolio.entity;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity @Table(name="contact_messages")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ContactMessage {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false) private String name;
 @Column(nullable=false) private String email;
 @Column(nullable=false,length=3000) private String message;
 private LocalDateTime createdAt;
 private String status;
 @PrePersist void create(){createdAt=LocalDateTime.now();if(status==null)status="NEW";}
}
