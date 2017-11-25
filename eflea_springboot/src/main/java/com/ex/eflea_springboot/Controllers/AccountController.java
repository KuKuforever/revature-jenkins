package com.ex.eflea_springboot.Controllers;


import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.services.AccountService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("/account")
public class AccountController {
    private AccountService accountService;
    private static Logger logger = LoggerFactory.getLogger(AccountController.class);

    public static class LoginAccount {
        public String email;
        public String password;

        public LoginAccount() {}
    }

    public static class NewUser {
        public String email;
        public String password;
        public String phone;
        public String username;

        public NewUser() {}
    }

    @Autowired
    public AccountController(AccountService accountService){
        this.accountService = accountService;
    }

    @GetMapping("/all")
    @ResponseBody
    public String getAllAccounts(){
        List<Account> accounts = accountService.getAll();
        String ret="";
        for (Account a:accounts)
        {
            ret+=a.toString()+"\n";
        }
        return ret;
    }

    @RequestMapping(path= "/login", method = {RequestMethod.POST, RequestMethod.GET}, consumes = {MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public void login(@RequestBody LoginAccount login, HttpServletRequest req, HttpServletResponse resp) {

        try {
            boolean logged = accountService.login(login.email, login.password);
            if(logged){
                req.getSession().setAttribute("account", login);
                resp.setStatus(HttpServletResponse.SC_OK);
            } else{
                resp.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
            }
        } catch (Exception e) {
            logger.error("login failed " + e.getMessage());
            resp.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        }
    }


    @RequestMapping(path= "/verify", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Account verify(HttpServletRequest req) {
        return (Account)req.getSession().getAttribute("account");
    }


    @RequestMapping(path = "/register", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public void register(@RequestBody NewUser user, HttpServletResponse resp) {
        try{
            accountService.register(user.email, user.password, user.username, user.phone);
            resp.setStatus(HttpServletResponse.SC_OK);

        } catch(Exception e) {
            logger.error("error, " + e.getMessage());
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }
}
