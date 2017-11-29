package com.ex.eflea_springboot;

import com.ex.eflea_springboot.dao.AccountDao;
import com.ex.eflea_springboot.dao.PostDao;
import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.model.Post;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EfleaSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(EfleaSpringbootApplication.class, args);
	}

/*	@Bean
	public CommandLineRunner demo(PostDao repo) {
		return (args) -> {
			// save a couple of customers
			for (Post post : repo.findAll()) {
				System.out.println(post.toString());
			}

		};
	}*/
}
