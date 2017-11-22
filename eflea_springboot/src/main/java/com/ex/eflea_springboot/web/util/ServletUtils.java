package com.ex.eflea_springboot.web.util;

import javax.servlet.http.HttpServletRequest;

public class ServletUtils {

    public static String stripContext(HttpServletRequest req) {
        String path = req.getRequestURI();
        return path.substring(req.getContextPath().length());
    }
}
