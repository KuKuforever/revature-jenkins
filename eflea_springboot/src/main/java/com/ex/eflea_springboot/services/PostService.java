package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private PostDao postDao;
    @Autowired
    public PostService(PostDao postDao)
    {
        this.postDao = postDao;
    }
}
