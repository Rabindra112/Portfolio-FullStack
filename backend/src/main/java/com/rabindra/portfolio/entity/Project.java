package com.rabindra.portfolio.entity;
import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name="projects")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Project {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 @Column(nullable=false) private String title;
 @Column(length=3000) private String description;
 private String category;
 @Column(length=1000) private String technologies;
 private String githubUrl;
 private String liveUrl;
 private String imageUrl;
 private boolean featured;
}
