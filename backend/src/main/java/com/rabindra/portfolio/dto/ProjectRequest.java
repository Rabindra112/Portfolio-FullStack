package com.rabindra.portfolio.dto;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
@Data public class ProjectRequest {
 @NotBlank private String title;
 @NotBlank private String description;
 private String category;
 private String technologies;
 private String githubUrl;
 private String liveUrl;
 private String imageUrl;
 private boolean featured;
}
