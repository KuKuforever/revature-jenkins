package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.PostDao;
import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
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

    public List<Post> getPosts(String email) throws Exception {
        if(email == null){
            throw new Exception("Undefined Email");
        }
        return postDao.findByPostEmail(email);
    }

    public Post getPostById(Long id) throws Exception {
        if(id <= 0 ){
            throw new Exception("Undefined ID");
        }
        return postDao.findByPostId(id);
    }

    public List<Post> getPostByStatus(Status status) throws Exception {
        if(status == null){
            throw new Exception("Undefined status");
        }
        return postDao.findByStatusId(status);
    }

    public void activeByPostId(Long id) throws Exception {
        if(id <= 0) {
            throw new Exception("Invalid post ID");
        }

        Post post = postDao.findByPostId(id);
        Status status = new Status();
        status.setStatus("active");
        status.setStatusId(2);
        post.setStatusId(status);
        postDao.save(post);

    }

    public void rejectByPostId(Long id) throws Exception {
        if(id <= 0) {
            throw new Exception("Invalid post ID");
        }

        Post post = postDao.findByPostId(id);
        Status status = new Status();
        status.setStatus("rejected");
        status.setStatusId(3);
        post.setStatusId(status);
        postDao.save(post);

    }
}
