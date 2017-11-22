package com.ex.eflea_springboot.Controllers;


import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/account")
public class AccountController {
    private AccountService accountService;

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
}
