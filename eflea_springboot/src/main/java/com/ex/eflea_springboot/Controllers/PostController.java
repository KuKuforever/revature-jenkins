package com.ex.eflea_springboot.Controllers;

import com.ex.eflea_springboot.helpers.Session;
import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
import com.ex.eflea_springboot.model.Type;
import com.ex.eflea_springboot.services.AccountService;

import com.ex.eflea_springboot.services.ImageService;
import com.ex.eflea_springboot.services.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/post")
public class PostController {
    private PostService postService;
    private ImageService imageService;
    private static Logger logger = LoggerFactory.getLogger(AccountController.class);

    //static class to hold json object
     static class JsonPost{
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
        public String imgUrl;

        public JsonPost () {}
    }

    static class Filters {
         public String filterType;
         public String filterTitle;

         public Filters() {}
    }
    @Autowired
    public PostController(PostService postService, ImageService imageService){
        this.postService = postService;
        this.imageService = imageService;
    }

    @GetMapping(path = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<List<Post>> getAllPost(HttpServletRequest req) {
        Session account = (Session)req.getSession().getAttribute("account");
        if(account == null) {
            return new ResponseEntity<List<Post>>(HttpStatus.UNAUTHORIZED);
        }
        List<Post> posts = null;
        try{
            posts = postService.getAll();
            logger.info(posts.toString());
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }

    @GetMapping(path = "/wantPost", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<List<Post>> getWantPost(HttpServletRequest req) {
        Session account = (Session)req.getSession().getAttribute("account");
        if(account == null){
            return new ResponseEntity<List<Post>>(HttpStatus.UNAUTHORIZED);
        }
        List<Post> wantPosts = null;
        try {
            Type want = new Type(Type.WANT, Type.TYPE_WANT);
            Status active = new Status(Status.ACTIVE, Status.STATUS_ACTIVE);
            wantPosts = postService.getPostByStatusAndType(active, want);
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return new ResponseEntity<List<Post>>(wantPosts, HttpStatus.OK);
    }
    @GetMapping(path = "/salePost", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<List<Post>> getSalePost(HttpServletRequest req) {
        Session account = (Session)req.getSession().getAttribute("account");
        if(account == null){
            return new ResponseEntity<List<Post>>(HttpStatus.UNAUTHORIZED);
        }
        List<Post> salePosts = null;
        try {
            Type sale = new Type(Type.SALE, Type.TYPE_SALE);
            Status active = new Status(Status.ACTIVE, Status.STATUS_ACTIVE);
            salePosts = postService.getPostByStatusAndType(active, sale);
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return new ResponseEntity<List<Post>>(salePosts, HttpStatus.OK);
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

    @RequestMapping(path = "/getActivePost", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<List<Post>> getActivePost() {
        ResponseEntity<List<Post>> response = null;
        try{
                Status status = new Status(Status.ACTIVE, Status.STATUS_ACTIVE);
                List<Post> posts = postService.getPostByStatus(status);
                response = new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
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
    @PostMapping(path = "/close", consumes = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE},
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity closeAction(@RequestBody Long id) {
        try {
            logger.info("now in closeAction()");
            postService.closePostById(id);
        } catch(Exception e) {
            logger.error(e.getMessage());
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(path = "/new", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE,
        MediaType.APPLICATION_XML_VALUE})
    public void newPost(@RequestBody JsonPost jsonPost, HttpServletResponse resp) {
        try {
            logger.info("jsonPost: "+jsonPost.toString());
            Type type = new Type();
            Status status = new Status();
            status.setStatus(Status.STATUS_PENDING);
            status.setStatusId(Status.PENDING);
            type.setTypeId(jsonPost.typeId);
            type.setType(jsonPost.typeId==1?Type.TYPE_SALE:Type.TYPE_WANT);

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
            if(jsonPost.imgUrl!=null) {
                imageService.uploadImage(id, jsonPost.imgUrl);
            }
            logger.info("The id of newly upload post: "+id);


        } catch (Exception e){
            logger.error("update error, " + e.getMessage());
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }

    @RequestMapping(path = "/filteredPosts", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_XML_VALUE,
        MediaType.APPLICATION_JSON_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<List<Post>> filteredPosts(@RequestBody Filters filter, HttpServletRequest req) {
         if((Session)req.getSession().getAttribute("account") == null) {
             return new ResponseEntity<List<Post>>(HttpStatus.BAD_REQUEST);
         }
         try {
             List<Post> posts = postService.getFilteredPosts(filter.filterType, filter.filterTitle);
             return new ResponseEntity<>(posts, HttpStatus.OK);
         }catch (Exception e) {
             logger.error("Error, " + e.getMessage());
         }
        return new ResponseEntity<List<Post>>(HttpStatus.BAD_REQUEST);
    }
}
