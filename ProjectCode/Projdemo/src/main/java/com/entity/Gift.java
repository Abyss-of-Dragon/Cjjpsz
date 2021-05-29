package com.entity;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table( name = "gift")
public class Gift implements Serializable {

    /**
     * 天赋 ID
     */
    @Id
    private long gid = -1;

    /**
     * 天赋名 Name
     */
    @Column
    private String name = "";

    /**
     * 天赋描述
     */
    @Column
    private String introduction = "";
}
