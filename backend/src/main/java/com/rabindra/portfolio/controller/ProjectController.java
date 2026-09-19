package com.rabindra.portfolio.controller;
import com.rabindra.portfolio.dto.ProjectRequest;
import com.rabindra.portfolio.entity.Project;
import com.rabindra.portfolio.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/projects") @RequiredArgsConstructor
public class ProjectController {
 private final ProjectService service;
 @GetMapping public List<Project> all(){return service.all();}
 @GetMapping("/featured") public List<Project> featured(){return service.featured();}
 @GetMapping("/{id}") public Project one(@PathVariable Long id){return service.one(id);}
 @PostMapping @ResponseStatus(HttpStatus.CREATED) public Project create(@Valid @RequestBody ProjectRequest r){return service.create(r);}
 @PutMapping("/{id}") public Project update(@PathVariable Long id,@Valid @RequestBody ProjectRequest r){return service.update(id,r);}
 @DeleteMapping("/{id}") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable Long id){service.delete(id);}
}
