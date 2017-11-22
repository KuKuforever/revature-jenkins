package com.ex.eflea_springboot.dao;

import com.ex.eflea_springboot.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageDao extends JpaRepository<Image, Integer> {
}
