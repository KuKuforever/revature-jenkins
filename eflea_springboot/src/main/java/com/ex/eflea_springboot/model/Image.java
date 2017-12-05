package com.ex.eflea_springboot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="EFLEA_IMAGE")
public class Image {
    private long imageId;
    private long postId;
    private String url;
    private Post post;

    @Id
    @Column(name = "IMAGEID")
    @GenericGenerator(name="imageIdGen", strategy = "increment")
    @GeneratedValue(generator = "imageIdGen")
    public long getImageId() {
        return imageId;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "POSTID", referencedColumnName = "POSTID", nullable = false)
    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }



    /*@Column(name = "POSTID")
    *//*@ManyToOne
    @JoinColumn(name="POSTID", referencedColumnName = "POSTID", nullable = false)*//*
    public long getPostId() {
        return postId;
    }

    public void setPostId(long postId) {
        this.postId = postId;
    }*/

    @Column(name = "URL")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Image{" +
                "imageId=" + imageId +
                ", postId=" + postId +
                ", url='" + url + '\'' +
                '}';
    }
}
