package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.Commit;

public interface CommitService {
    Commit getCommitByID(Integer id);
    void commitChara(Integer charaId,Integer user,String context);
    void commitWeapon(Integer weaponId,Integer user,String context);
}
