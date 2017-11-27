package com.ex.eflea_springboot.Controllers;

import com.ex.eflea_springboot.helpers.Session;
import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
import com.ex.eflea_springboot.model.Type;
import com.ex.eflea_springboot.services.AccountService;
import com.ex.eflea_springboot.services.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/post")
public class PostController {
    private PostService postService;
    private static Logger logger = LoggerFactory.getLogger(AccountController.class);

    //static class to hold json object
    public static class JsonPost{
        public String title;
        public String postEmail;
        public int statusId;
        public int typeId;
        public String city;
        public String state;
        public String country;
        public String zip;
        public String description;
        public Date postDate;
        public long postId;

        @Override
        public String toString() {
            return "JsonPost{" +
                    "title='" + title + '\'' +
                    ", postEmail='" + postEmail + '\'' +
                    ", statusId=" + statusId +
                    ", typeId=" + typeId +
                    ", city='" + city + '\'' +
                    ", state='" + state + '\'' +
                    ", country='" + country + '\'' +
                    ", zip='" + zip + '\'' +
                    ", description='" + description + '\'' +
                    ", postDate=" + postDate +
                    ", postId=" + postId +
                    '}';
        }
    }
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

    @RequestMapping(path = "/new", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE,
        MediaType.APPLICATION_XML_VALUE})
    public void newPost(@RequestBody JsonPost jsonPost, HttpServletResponse resp, HttpServletRequest req) {
        logger.info("In the new Post from PostController");
        try {
            logger.info("jsonPost: "+jsonPost.toString());
            Type type = new Type();
            Status status = new Status();
            status.setStatus(Status.STATUS_PENDING);
            status.setStatusId(Status.PENDING);
            type.setTypeId(Type.WANT);
            type.setType(Type.TYPE_WANT);

            Post post = new Post();
            post.setTitle(jsonPost.title);
            post.setPostEmail(jsonPost.postEmail);
            post.setStatusId(status);
            post.setTypeId(type);
            post.setCity(jsonPost.city);
            post.setState(jsonPost.state);
            post.setCountry(jsonPost.country);
            post.setZip(jsonPost.zip);
            post.setDescription(jsonPost.description);
            post.setPostDate(new Date());
            logger.info(post.toString());
            long id = postService.uploadPost(post);
            logger.info("The id of newly upload post: "+id);


        } catch (Exception e){
            logger.error("update error, " + e.getMessage());
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }


    }
}
