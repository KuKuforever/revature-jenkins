package com.ex.eflea_springboot.dao;

import com.ex.eflea_springboot.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDao extends JpaRepository<Post, Integer> {
}
