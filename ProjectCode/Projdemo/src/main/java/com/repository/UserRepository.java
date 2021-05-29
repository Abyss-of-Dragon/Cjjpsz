package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.entity.Role;
import com.entity.User;

import java.util.ArrayList;

public interface UserRepository extends JpaRepository<User, Long> {

    public ArrayList<User> findAll();
    public ArrayList<User> findAllByRole(Role role);
}
