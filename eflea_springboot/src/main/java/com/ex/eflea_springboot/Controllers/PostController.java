package com.ex.eflea_springboot.Controllers;

import com.ex.eflea_springboot.helpers.Session;
import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.services.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/post")
public class PostController {
    private PostService postService;
    private static Logger logger = LoggerFactory.getLogger(AccountController.class);
    @Autowired
    public PostController(PostService postService){
        this.postService = postService;
    }


    @GetMapping(path = "/postHistory", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Post> viewPost(HttpServletRequest req) {
        Session account = (Session)req.getSession().getAttribute("account");
        List<Post> posts = postService.getPosts(account.email);
        return posts;
    }
}
