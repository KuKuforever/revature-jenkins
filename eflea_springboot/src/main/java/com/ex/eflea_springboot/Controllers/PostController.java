package com.ex.eflea_springboot.Controllers;

import com.ex.eflea_springboot.helpers.Session;
import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
import com.ex.eflea_springboot.services.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Post>> viewPost(HttpServletRequest req) {
        Session account = (Session)req.getSession().getAttribute("account");
        if(account == null){
            return new ResponseEntity<List<Post>>(HttpStatus.UNAUTHORIZED);
        }
        List<Post> posts = null;
        try {
            posts = postService.getPosts(account.email);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }

    @RequestMapping(path = "/getPost", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<Post> getPost(@RequestBody Long id) {
        try {
            Post post = postService.getPostById(id);
            return new ResponseEntity<Post>(post, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("error, " + e.getMessage());
        }
        return new ResponseEntity<Post>(HttpStatus.UNAUTHORIZED);
    }

    @RequestMapping(path = "/getPendingPost", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<List<Post>> getPendingPost(@RequestBody String status) {
        ResponseEntity<List<Post>> response = null;
        try{
            if(status.equals("Pending")) {
                Status statusId = new Status();
                statusId.setStatusId(1);
                statusId.setStatus("Pending");
                List<Post> posts = postService.getPostByStatus(statusId);
                response = new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
            } else{
                response = new ResponseEntity<List<Post>>(HttpStatus.UNAUTHORIZED);
            }
        } catch(Exception e) {
            logger.error("error, " + e.getMessage());

        }
        return response;
    }

    @PostMapping(path = "/approve", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE},
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity approveAction(@RequestBody Long id) {
        try{
            logger.error("approve");
            postService.activeByPostId(id);
        } catch(Exception e) {
            logger.error("Error, " + e.getMessage());
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping(path = "/deny", consumes = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE},
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity denyAction(@RequestBody Long id) {
        try{
            logger.error("deny");
            postService.rejectByPostId(id);
        } catch(Exception e) {
            logger.error("Error, " + e.getMessage());
        }
        return new ResponseEntity(HttpStatus.OK);
    }
}
