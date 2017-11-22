package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.AccountDao;
import com.ex.eflea_springboot.model.Account;
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


}
