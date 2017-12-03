package com.ex.eflea_springboot.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="EFLEA_POST")
public class Post {
    private String title;
    private long postId;
    private String postEmail;
    private Date postDate;
    private Status statusId;
    private Type typeId;
    private String city;
    private String state;
    private String country;
    private String zip;
    private String description;

    private List<Image> imageList;

    @Id
    @Column(name="POSTID")
    @GenericGenerator(name="postIdGen", strategy = "increment")
    @GeneratedValue(generator = "postIdGen")
    public long getPostId() {
        return postId;
    }

    public void setPostId(long postId) {
        this.postId = postId;
    }
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "post")
    public List<Image> getImageList() {return imageList;}

    public void setImageList(List<Image> imageList) {
        this.imageList = imageList;
    }

    @Column(name="POSTEMAIL")
    public String getPostEmail() {
        return postEmail;
    }

    public void setPostEmail(String postEmail) {
        this.postEmail = postEmail;
    }

    @Column(name="POSTDATE")
    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

/*
    @ManyToOne
    @JoinColumn(name="STATUSID", referencedColumnName = "STATUSID", nullable = false)
    public Status getStatusId() {
        return statusId;
    }

    public void setStatusId(Status statusId) {
        this.statusId = statusId;
    }

    @ManyToOne
    @JoinColumn(name="TYPEID", referencedColumnName = "TYPEID", nullable = false)
    public Type getTypeId() {
        return typeId;
    }

    public void setTypeId(Type typeId) {
        this.typeId = typeId;
    }*/


    @ManyToOne
    @JoinColumn(name="STATUSID", referencedColumnName = "STATUSID", nullable = false)
    //@Column(name="STATUSID")
    public Status getStatusId() {
        return statusId;
    }

    public void setStatusId(Status statusId) {
        this.statusId = statusId;
    }

    @ManyToOne
    @JoinColumn(name="TYPEID", referencedColumnName = "TYPEID", nullable = false)
    //@Column(name="TYPEID")
    public Type getTypeId() {
        return typeId;
    }

    public void setTypeId(Type typeId) {
        this.typeId = typeId;
    }

    @Column
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Column
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Column
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Column
    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    @Column
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    @Override
    public String toString() {
        return "Post{" +
                "title='" + title + '\'' +
                ", postId=" + postId +
                ", postEmail='" + postEmail + '\'' +
                ", postDate=" + postDate +
                ", statusId=" + statusId +
                ", typeId=" + typeId +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", zip='" + zip + '\'' +
                ", description='" + description + '\'' +
                ", imageList=" + imageList +
                '}';
    }
}
