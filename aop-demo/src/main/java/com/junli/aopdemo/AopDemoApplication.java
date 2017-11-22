package com.junli.aopdemo;

import com.junli.aopdemo.aspects.EventAspect;
import com.junli.aopdemo.model.*;
import com.junli.aopdemo.services.EventService;
import com.junli.aopdemo.services.MethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.lang.reflect.Method;

@SpringBootApplication
public class AopDemoApplication {

	private EventService service;
	/*@Autowired
	public AopDemoApplication(EventService service){
		this.service = service;
	}*/

	private MethodService methodService;
	@Autowired
	public AopDemoApplication(MethodService methodService) {
		this.methodService = methodService;
	}

	public static void main(String[] args) {
		SpringApplication.run(AopDemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(){
		return args->{
			/*Play p = new Play("ROM");
			//what happens: new EventAspect().setUp();
			service.playPlay(p);

			Concert c = new Concert("Guns");
			service.playConcert(c);

			AmusementPark a = new AmusementPark("Disney");
			service.runAmusementPark(a);

			*//*Event ne = new NonEvent();
			service.doEvent(ne);*/
			methodService.doInstantMethod("instant");
			methodService.doShortMethod(123);
			methodService.doLongMethod(true);


		};
	}
}
