package com.ex.eflea_springboot.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="EFLEA_ACCOUNT")
public class Account {
    private String email;
    private String password;
    private String username;
    private int titleId;
    private Date createDate;
    private String phone;

    @Id
    @Column
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    // OneToOne annotation for look up table class
    /*@OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="TITLEID")*/
    @Column(name="TITLEID")
    public int getTitleId() {
        return titleId;
    }

    public void setTitleId(int titleId) {
        this.titleId = titleId;
    }

    @Column(name="CREATEDATE")
    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    @Column(name="PHONE")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Account{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", username='" + username + '\'' +
                ", titleId=" + titleId +
                ", createDate=" + createDate +
                ", phone='" + phone + '\'' +
                '}';
    }
}
