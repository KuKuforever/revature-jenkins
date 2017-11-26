package com.ex.eflea_springboot.Controllers;

import com.ex.eflea_springboot.services.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/post")
public class PostController {
    private PostService postService;
    private static Logger logger = LoggerFactory.getLogger(AccountController.class);
    @Autowired
    public PostController(PostService postService){
        this.postService = postService;
    }


    @RequestMapping(path = "/new", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public uploadNewPost(@ResponseBody , HttpServletResponse resp){

    }
}
