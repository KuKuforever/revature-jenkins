package com.junli.aopdemo.aspects;

import com.junli.aopdemo.model.Event;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class EventAspect {
    public static Logger logger = LoggerFactory.getLogger(EventAspect.class);


    //below the string is a point-cut
    @Before("execution(* com.junli.aopdemo.services.EventService.play*(..))")
    public void setUp(JoinPoint jp){ //advice
        Object[] args = jp.getArgs();
        Event e = (Event)args[0];
        System.out.println("\nPatrons are entering the venue.--------"+e.getName());
    }

    @Around("execution(* com.junli.aopdemo.services.EventService.run*(..))")
    public void runVenue(ProceedingJoinPoint pjp)throws Throwable{
        System.out.println("\nOpening the vanue-----");
        pjp.proceed();
        System.out.println("\nClosing the venue-----");
    }

    @AfterThrowing(pointcut = "execution(* com.junli.aopdemo.services.EventService.doEvent(..))", throwing ="ex")
    public void exceptionAspect(Exception ex){
        System.out.println("Method execution caught an exception \n"+ex.getLocalizedMessage());
    }

}
