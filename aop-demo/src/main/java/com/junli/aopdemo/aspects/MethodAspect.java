package com.junli.aopdemo.aspects;


import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.junit.rules.Stopwatch;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class MethodAspect {
    public static Logger logger = LoggerFactory.getLogger(MethodAspect.class);

    @Around("execution(* com.junli.aopdemo.services.MethodService.do*(..))")
    public void runInstant(ProceedingJoinPoint pjp)throws Throwable{
        System.out.println("Calling Method: "+pjp.getSignature().getName());
        Object[] args = pjp.getArgs();
        System.out.println("Argument value: "+args[0]+" | Argument class: "+args[0].getClass());
        long startTime = System.currentTimeMillis();
        pjp.proceed();
        long endTime = System.currentTimeMillis();
        long elasped = endTime-startTime;
        System.out.println("Time elapsed: "+elasped + " ms");
        System.out.println();

    }
}
