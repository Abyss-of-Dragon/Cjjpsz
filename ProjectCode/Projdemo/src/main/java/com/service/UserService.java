package com.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import com.entity.User;
import com.repository.UserRepository;

import java.util.Optional;

/**
 * 用户表增删改查服务
 * author: Temper
 * since: 5/30/2021
 */
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 添加用户
     * @param user 用户对象
     */
    public void saveUser(User user) {
        userRepository.save(user);
    }

    /**
     * 通过 uid 删除用户
     * @param uid 用户 uid
     */
    public void deleteUser(Long uid) {
        userRepository.deleteById(uid);
    }

    /**
     * 修改用户信息
     * @param uid 被更新的用户 uid
     * @param user 新的用户对象
     */
    public void updateUser(Long uid, User user) {
        user.setUid(uid);
        userRepository.saveAndFlush(user);
    }

    /**
     * 获取特定用户信息
     * @param uid 用户 uid
     * @return 如果用户不存在，返回 null，否则返回用户对象
     */
    public User getUser(Long uid) {
        Optional<User> optional = userRepository.findById(uid);
        return optional.orElse(null);
    }

    /**
     * 获取用户列表
     * @param pageNum 页号
     * @param pageSize 单页条目数
     * @return Page 对  象
     */
    public Page<User> pageQuery(int pageNum, int pageSize) {
        return userRepository.findAll(PageRequest.of(pageNum - 1, pageSize));
    }


}
