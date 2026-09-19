package com.rabindra.portfolio.config;
import com.rabindra.portfolio.entity.*;
import com.rabindra.portfolio.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration @RequiredArgsConstructor
public class DataInitializer {
 private final UserRepository users;
 private final ProjectRepository projects;
 private final PasswordEncoder encoder;

 @Bean CommandLineRunner init(){
  return args->{
   if(users.findByUsername("rabindra").isEmpty()){
    users.save(User.builder().username("rabindra").password(encoder.encode("rabindra@123")).role("ADMIN").build());
   }
   if(projects.count()==0){
       projects.save(Project.builder()
               .title("Appan Bazaar - E-Commerce Platform")
               .category("Full Stack")
               .description("Full-stack e-commerce platform with product and inventory management, product search, cart and order processing, secure authentication, role-based access control, payment integration, and order tracking.")
               .technologies("Java, Spring Boot, Spring Security, MySQL, JPA, Hibernate, React, Redis")
               .githubUrl("#")
               .liveUrl("https://lnkd.in/gsmDUZi2")
               .featured(true)
               .build());
    projects.save(Project.builder().title("Homes.com - Real Estate Platform").category("Backend").description("Real estate platform supporting property listings, subscriptions, visits, payments and notifications.").technologies("Java, Spring Boot, REST API, MySQL, MongoDB, JWT, React, AWS").githubUrl("#").liveUrl("#").featured(true).build());
    projects.save(Project.builder().title("Finishline - E-Commerce Microservices").category("Microservices").description("Microservices-based commerce application with product, order, inventory, ratings and reviews services.").technologies("Java, Spring Boot, Microservices, MongoDB, MySQL, Kafka").githubUrl("#").liveUrl("#").featured(true).build());
    projects.save(Project.builder().title("COD Tracker").category("Finance / Logistics").description("Application for tracking financial status of consignments and operational information.").technologies("Java 17, Spring Boot, MySQL, AWS").githubUrl("#").liveUrl("#").featured(true).build());
    projects.save(Project.builder().title("Lingo-Test").category("AI / Full Stack").description("AI-assisted spoken English practice application providing real-time feedback to learners.").technologies("Python, AI, NLP, React, REST API").githubUrl("#").liveUrl("#").featured(false).build());
    projects.save(Project.builder().title("Developer Portfolio Platform").category("Full Stack").description("This portfolio itself: React frontend, Spring Boot REST API, JWT admin authentication, project CRUD and MySQL.").technologies("React, TypeScript, Tailwind CSS, Axios, Java 17, Spring Boot, JWT, JPA, Hibernate, MySQL").githubUrl("#").liveUrl("#").featured(true).build());
   }
  };
 }
}
