package com.junli.aopdemo.services;

import com.junli.aopdemo.model.AmusementPark;
import com.junli.aopdemo.model.Concert;
import com.junli.aopdemo.model.Event;
import com.junli.aopdemo.model.Play;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    public EventService(){}

    public void playConcert(Concert c) throws Exception {
        c.doEvent();
    }
    public void playPlay(Play p) throws Exception{
        p.doEvent();
    }
    public void runAmusementPark(AmusementPark a) throws Exception{
        a.doEvent();
    }
    public void doEvent(Event e) throws Exception{
        e.doEvent();
    }
}
