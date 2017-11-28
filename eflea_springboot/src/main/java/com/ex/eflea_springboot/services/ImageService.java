package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.ImageDao;
import com.ex.eflea_springboot.model.Image;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private static Logger logger = LoggerFactory.getLogger(ImageService.class);
    private ImageDao imageDao;
    @Autowired
    public ImageService(ImageDao imageDao){
        this.imageDao = imageDao;
    }

    /* populate service with methods */
    public void uploadImage(long id, String url){
        Image image = new Image();
        image.setPostId(id);
        image.setUrl(url);
        imageDao.save(image);
    }
}
