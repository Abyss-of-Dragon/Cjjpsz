package com.entity;


import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table( name = "character")
public class Character implements Serializable {

    /**
     * 角色 Character ID
     */
    @Id
    @GeneratedValue
    private long cid = -1;

    /**
     * 角色名 Character Name
     */
    @Column
    private String name = "N/A";

    /**
     * 所属 Belong
     */
    @Column
    private String belong = "";

    /**
     * 神之眼 Eye
     */
    @Column
    private String eye = "";

    /**
     * 武器类型 Weapon Type
     */
    @Column
    private String weapon_type = "";

    /**
     * 头像 icon URL
     */
    @Column
    private String iconUrl = "";

    /**
     * 角色介绍 Character Profile
     */
    @Column
    private String profile = "";

}
