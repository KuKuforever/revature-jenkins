package com.junli.aopdemo.model;

public abstract class Event {
    protected String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void doEvent() throws  Exception{
        throw new Exception("Exception from Event Class");
    }
}
