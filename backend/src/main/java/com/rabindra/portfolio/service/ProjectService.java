package com.rabindra.portfolio.service;
import com.rabindra.portfolio.dto.ProjectRequest;
import com.rabindra.portfolio.entity.Project;
import com.rabindra.portfolio.exception.ResourceNotFoundException;
import com.rabindra.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service @RequiredArgsConstructor
public class ProjectService {
 private final ProjectRepository repo;
 public List<Project> all(){return repo.findAll();}
 public List<Project> featured(){return repo.findByFeaturedTrue();}
 public Project one(Long id){return repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Project not found: "+id));}
 public Project create(ProjectRequest r){return repo.save(map(new Project(),r));}
 public Project update(Long id,ProjectRequest r){return repo.save(map(one(id),r));}
 public void delete(Long id){repo.delete(one(id));}
 private Project map(Project p,ProjectRequest r){
   p.setTitle(r.getTitle());p.setDescription(r.getDescription());p.setCategory(r.getCategory());
   p.setTechnologies(r.getTechnologies());p.setGithubUrl(r.getGithubUrl());p.setLiveUrl(r.getLiveUrl());
   p.setImageUrl(r.getImageUrl());p.setFeatured(r.isFeatured());return p;
 }
}
