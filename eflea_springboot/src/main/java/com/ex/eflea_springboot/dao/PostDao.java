package com.ex.eflea_springboot.dao;

import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface PostDao extends JpaRepository<Post, Serializable> {
    List<Post> findByPostEmail(Serializable String);
    Post findByPostId(Serializable Long);
    List<Post> findByStatusId(Status status);
}
