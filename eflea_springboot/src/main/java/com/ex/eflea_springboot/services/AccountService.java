package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.Controllers.AccountController;
import com.ex.eflea_springboot.dao.AccountDao;
import com.ex.eflea_springboot.model.Account;
import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private static Logger logger = LoggerFactory.getLogger(AccountController.class);
    private AccountDao accountDao;

    @Autowired
    public AccountService(AccountDao accountDao){
        this.accountDao = accountDao;
    }

    public List<Account> getAll() {return accountDao.findAll();}

    public Account login(String email, String password) throws Exception {
        Account user = null;

        if((email == null) || (password == null)) {
            throw new Exception("Invalid entries");
        }

        Account account = accountDao.findByEmail(email);

        if(email.equals(account.getEmail()) && password.equals(account.getPassword())){
            user = account;
        }
        return user;
    }

    public void register(Account account) throws Exception {
        if(account.getEmail() == null || account.getPassword() == null
                || account.getUsername() == null) {
            throw new Exception("invalid data, can not register");
        }

        accountDao.save(account);

    }

    public Account updateProfile(String email, String phone, String username) throws Exception {
        if(email == null) {
            throw new Exception("invalid data, can not update");
        }
        Account account = accountDao.findByEmail(email);
        account.setUsername(username);
        account.setPhone(phone);
        logger.warn(account.toString());
        accountDao.save(account);
        return account;
    }
}
