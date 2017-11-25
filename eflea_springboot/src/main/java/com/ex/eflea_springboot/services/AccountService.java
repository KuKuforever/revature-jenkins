package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.AccountDao;
import com.ex.eflea_springboot.model.Account;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private AccountDao accountDao;

    @Autowired
    public AccountService(AccountDao accountDao){
        this.accountDao = accountDao;
    }

    public List<Account> getAll() {return accountDao.findAll();}

    public boolean login(String email, String password) throws Exception {
        boolean result = false;

        if((email == null) || (password == null)) {
            throw new Exception("Invalid entries");
        }

        Account account = accountDao.findByEmail(email);

        if(email.equals(account.getEmail()) && password.equals(account.getPassword())){
            result = true;
        }
        return result;
    }

    public void register(String email, String password, String phone, String username) throws Exception {
        if(email == null || password == null || username == null) {
            throw new Exception("invalid data, can not register");
        }

        Account account = new Account();
        account.setEmail(email);
        account.setPassword(password);
        account.setPhone(phone);
        account.setUsername(username);
        account.setTitleId(2);
        accountDao.save(account);

    }
}
