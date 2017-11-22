package com.ex.eflea_springboot.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="EFLEA_IMAGE")
public class Image {
    private long imageId;
    private long postId;
    private String url;

    @Id
    @Column
    @GenericGenerator(name="imageIdGen", strategy = "increment")
    @GeneratedValue(generator = "imageIdGen")
    public long getImageId() {
        return imageId;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    @Column
    public long getPostId() {
        return postId;
    }

    public void setPostId(long postId) {
        this.postId = postId;
    }

    @Column
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
