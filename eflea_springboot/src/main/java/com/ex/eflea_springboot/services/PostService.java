package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.Controllers.AccountController;
import com.ex.eflea_springboot.dao.PostDao;
import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
import com.ex.eflea_springboot.model.Type;
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
    private static Logger logger = LoggerFactory.getLogger(PostService.class);
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
        Status status = new Status(Status.ACTIVE, Status.STATUS_ACTIVE);
        post.setStatusId(status);
        postDao.save(post);

    }

    public void rejectByPostId(Long id) throws Exception {
        if (id <= 0) {
            throw new Exception("Invalid post ID");
        }

        Post post = postDao.findByPostId(id);
        Status status = new Status(Status.REJECTED, Status.STATUS_REJECTED);
        post.setStatusId(status);
        postDao.save(post);
    }

    public void closePostById(Long id) throws Exception{
        if (id<=0) {
            throw new Exception(("Invalid Post ID"));
        }
        Post post = postDao.findByPostId(id);
        Status status = new Status(Status.CLOSED, Status.STATUS_CLOSED);
        post.setStatusId(status);
        postDao.save(post);
    }

    public long uploadPost(Post post){
            return postDao.save(post).getPostId();
    }

    public List<Post> getPostByStatusAndType(Status status, Type type) {

        return postDao.findByStatusIdAndTypeId(status, type);
    }


}
