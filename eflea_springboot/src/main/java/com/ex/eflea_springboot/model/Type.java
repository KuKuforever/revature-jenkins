package com.ex.eflea_springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="EFLEA_POSTTYPE")
public class Type {
    public static final int SALE = 1;
    public static final int WANT = 2;
    public static final String TYPE_SALE = "Sale";
    public static final String TYPE_WANT = "Want";

    private int typeId;
    private String type;

    public Type() {};
    public Type(int typeId, String type){
        this.typeId = typeId;
        this.type = type;
    }

    @Id
    @Column(name="TYPEID")
    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    @Column(name="TYPE")
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Type{" +
                "typeId=" + typeId +
                ", type='" + type + '\'' +
                '}';
    }
}
