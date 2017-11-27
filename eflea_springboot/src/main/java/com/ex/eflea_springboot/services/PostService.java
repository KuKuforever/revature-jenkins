package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.PostDao;
import com.ex.eflea_springboot.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
public class PostService {
    private PostDao postDao;
    @Autowired
    public PostService(PostDao postDao)
    {
        this.postDao = postDao;
    }

    public List<Post> getPosts(String email) {
        return postDao.findByPostEmail(email);
    }
}
