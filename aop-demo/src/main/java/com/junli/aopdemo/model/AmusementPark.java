package com.junli.aopdemo.model;

public class AmusementPark extends Event {
    public AmusementPark(){}

    public AmusementPark(String name){
        this.name = name;
    }

    @Override
    public void doEvent() throws Exception {
        System.out.println("Running amusement park "+name);
    }
}
