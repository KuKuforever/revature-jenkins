package com.ex.eflea_springboot.dao;

import com.ex.eflea_springboot.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public interface AccountDao extends JpaRepository<Account, Serializable> {
    Account findByEmail(Serializable String);
}
