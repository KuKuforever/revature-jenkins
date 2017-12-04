package com.ex.eflea_springboot.dao;

import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
import com.ex.eflea_springboot.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface PostDao extends JpaRepository<Post, Serializable> {
    List<Post> findByPostEmail(Serializable String);
    Post findByPostId(Serializable Long);
    List<Post> findByStatusId(Status status);

    //@Query("SELECT * FROM EFLEA_POST WHERE STATUSID = 2 AND TYPEID = ?1")
    List<Post> findByStatusIdAndTypeId(Status status, Type type);
    List<Post> findByTitleIgnoreCaseContainingAndStatusId(String title, Status status);

    List<Post> findByTitleIgnoreCaseContainingAndTypeIdAndStatusId(String title, Type type, Status status);
}
