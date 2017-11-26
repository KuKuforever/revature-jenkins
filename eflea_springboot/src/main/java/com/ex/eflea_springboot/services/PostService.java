package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@CrossOrigin("*")
public class PostService {
    private PostDao postDao;
    @Autowired
    public PostService(PostDao postDao)
    {
        this.postDao = postDao;
    }
}
