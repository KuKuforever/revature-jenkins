package com.ex.eflea_springboot.model;

import javax.persistence.*;


/* This is a class for status lookup table*/
@Entity
@Table(name="EFLEA_STATUS")
public class Status {
    public static final int PENDING = 1;
    public static final int ACTIVE = 2;
    public static final int REJECTED = 3;
    public static final int CLOSED = 4;
    public static final String STATUS_PENDING = "Pending";
    public static final String STATUS_ACTIVE = "Active";
    public static final String STATUS_REJECTED = "Rejected";
    public static final String STATUS_CLOSED = "Closed";

    private int statusId;
    private String status;

    public Status(){}
    public Status(int statusId, String status){
        this.statusId = statusId;
        this.status = status;
    }

    @Id
    @Column(name="STATUSID")
    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    @Column(name="STATUS")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Status{" +
                "statusId=" + statusId +
                ", status='" + status + '\'' +
                '}';
    }
}
