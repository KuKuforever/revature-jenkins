package com.junli.aopdemo.services;

import org.springframework.stereotype.Service;

@Service
public class MethodService {

    public MethodService(){}

    public void doInstantMethod(String s){
        System.out.println("Running Blazing fast method...");
    }

    public void doShortMethod(long n){
        System.out.println("Running short live method...");
        for (long i=0; i<999999999;i++)
        {
            long k = i;
        }

    }

    public void doLongMethod(boolean b){
        System.out.println("Running Long Method...");
        for(long i=0; i<10;i++)
        {
            for (long j=0; j<999999999;j++) {
                long k = i;
            }
        }
    }

}
