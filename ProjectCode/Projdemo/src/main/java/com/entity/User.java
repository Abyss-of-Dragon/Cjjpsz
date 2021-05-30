package com.entity;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "user")
public class User implements Serializable {

    /**
     * 用户 User ID
     */
    @Id
    private long uid = -1;

    /**
     * 账户激活状态 DEACTIVATED=0, ACTIVATED=1
     */
    @Column
    private Status status = Status.ACTIVATED;

    /**
     * 用户角色 ADMIN=0, Normal=1,
     */
    @Column
    private Role role = Role.NORMAL;

    /**
     * 用户姓名 User name
     */
    @Column
    private String name = "N/A";

    /**
     * 密码 Password
     */
    @Column
    private String password = "N/A";
}