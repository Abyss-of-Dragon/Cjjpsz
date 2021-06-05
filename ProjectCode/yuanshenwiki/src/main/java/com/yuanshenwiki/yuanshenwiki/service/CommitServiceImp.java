package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.Commit;
import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.mapper.CommitMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommitServiceImp implements CommitService{
    @Autowired
    UserService userService;
    @Autowired
    CharaService charaService;
    @Autowired
    WeaponService weaponService;
    @Autowired
    CommitMapper mapper;
    @Override
    public Commit getCommitByID(Integer id) {
        User user=userService.getUserByID(mapper.getUserIdByID(id));
        String context=mapper.getContextByID(id);
        return new Commit(id,user,context);
    }

    @Override
    public void commitChara(Integer charaId, Integer user, String context) {
        Integer newId=mapper.getMaxId()+1;
        mapper.commit(newId,user,context);
        charaService.commit(charaId,getCommitByID(newId));
    }

    @Override
    public void commitWeapon(Integer weaponId, Integer user, String context) {
        Integer newId=mapper.getMaxId()+1;
        mapper.commit(newId,user,context);
        weaponService.commit(weaponId,getCommitByID(newId));
    }
}
