package com.ex.eflea_springboot;

import com.ex.eflea_springboot.dao.AccountDao;
import com.ex.eflea_springboot.dao.PostDao;
import com.ex.eflea_springboot.model.Account;
import com.ex.eflea_springboot.model.Post;
import com.ex.eflea_springboot.model.Status;
import com.ex.eflea_springboot.model.Type;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class EfleaSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(EfleaSpringbootApplication.class, args);
	}
/*
	@Bean
	public CommandLineRunner demo(PostDao repo) {
		Status status = new Status();
		status.setStatus("Active");
		status.setStatusId(2);
		return (args) -> {
			// save a couple of customers
			Type type = new Type();
			type.setType("Want");
			type.setTypeId(2);
			for (Post post : repo.findByTitleIgnoreCaseContainingAndTypeIdAndStatusId("",type, status)) {
				System.out.println(post.toString());
			}

		};
	}*/
}
