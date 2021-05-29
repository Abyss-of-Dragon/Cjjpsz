package com.entity;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table( name = "life")
public class Life implements Serializable {

    /**
     * 命之座 ID
     */
    @Id
    private long lid = -1;

    /**
     * 命之座名 Name
     */
    @Column
    private String name = "";

    /**
     * 命之座描述 Introduction
     */
    @Column
    private String introduction = "";

}
