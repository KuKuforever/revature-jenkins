package com.junli.aopdemo.model;

public class Concert extends Event {
    public Concert(){}

    public Concert(String name){
        this.name = name;
    }

    @Override
    public void doEvent() throws Exception {
        System.out.println("Playing convert "+name);
    }
}
