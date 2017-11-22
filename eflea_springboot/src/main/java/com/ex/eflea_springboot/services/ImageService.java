package com.ex.eflea_springboot.services;

import com.ex.eflea_springboot.dao.ImageDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private ImageDao imageDao;
    @Autowired
    public ImageService(ImageDao imageDao){
        this.imageDao = imageDao;
    }

    /* populate service with methods */
}
