package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.Controllers.AccountController;
import com.ex.eflea_springboot.dao.PostDao;
import com.ex.eflea_springboot.model.Post;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.SQLException;
import java.util.List;

@Service
public class PostService {
    private static Logger logger = LoggerFactory.getLogger(AccountController.class);
    private PostDao postDao;
    @Autowired
    public PostService(PostDao postDao)
    {
        this.postDao = postDao;
    }

    public List<Post> getPosts(String email) {
        return postDao.findByPostEmail(email);
    }

    public long uploadPost(Post post){
            return postDao.save(post).getPostId();
    }
}
