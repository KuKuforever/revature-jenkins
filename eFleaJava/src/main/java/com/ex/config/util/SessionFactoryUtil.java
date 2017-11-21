package com.ex.config.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;


public class SessionFactoryUtil {
    private static SessionFactory sessionFactory;

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public static void setSessionFactory(SessionFactory sf) {
        sessionFactory = sf;
    }

    public static Session getSession() {
        if(sessionFactory == null) {
            throw new IllegalStateException("SessionFactory has not been initialize correctly.");
        }
        return sessionFactory.openSession();
    }

}
