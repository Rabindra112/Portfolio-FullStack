package com.rabindra.portfolio.dto;
import jakarta.validation.constraints.*;
import lombok.Data;
@Data public class ContactRequest {
 @NotBlank private String name;
 @NotBlank @Email private String email;
 @NotBlank private String message;
}
