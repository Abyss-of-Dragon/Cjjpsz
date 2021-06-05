package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.Chara;
import com.yuanshenwiki.yuanshenwiki.bean.Commit;
import com.yuanshenwiki.yuanshenwiki.bean.Weapon;

import java.util.List;

public interface WeaponService {
    Weapon getWeaponByID(Integer id);
    void commit(Integer weaponId,Commit commit);
    List<Weapon> get4Stars();
    List<Weapon> get5Stars();
    List<Weapon> search(String key);
}
