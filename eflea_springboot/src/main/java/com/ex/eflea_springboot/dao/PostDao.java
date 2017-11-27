package com.ex.eflea_springboot.dao;

import com.ex.eflea_springboot.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface PostDao extends JpaRepository<Post, Serializable> {
    List<Post> findByPostEmail(Serializable String);
}
