package com.ex.config;

import com.ex.config.util.SessionFactoryUtil;
import com.ex.model.Account;
import com.ex.model.Image;
import com.ex.model.Post;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * Created by August Duet on 11/16/2017.
 */
@WebListener
public class ContextListener implements ServletContextListener{
    @Override
    /*
        This method will be called when our servlet container
        creates and loads the servlet context. We will utilize
        this opportunity to initialize Hibernate
     */
    public void contextInitialized(ServletContextEvent sce) {
        Configuration config = new Configuration();

        config.configure("hibernate.cfg.xml");
        // below: do I need these when mapping are declared in xml?
        config.addAnnotatedClass(Account.class);
        config.addAnnotatedClass(Post.class);
        config.addAnnotatedClass(Image.class);

        StandardServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
                .applySettings(config.getProperties()).build();

        SessionFactoryUtil.setSessionFactory(config.buildSessionFactory(serviceRegistry));
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        SessionFactoryUtil.getSessionFactory().close();
    }
}
