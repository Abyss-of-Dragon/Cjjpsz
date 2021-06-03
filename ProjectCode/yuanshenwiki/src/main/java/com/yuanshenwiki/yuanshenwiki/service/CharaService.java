package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.Chara;
import com.yuanshenwiki.yuanshenwiki.bean.Commit;

import java.util.List;

public interface CharaService {
    Chara getCharaByID(Integer id);
    void commit(Integer charaId,Commit commit);
    List<Chara> get4Stars();
    List<Chara> get5Stars();
    List<Chara> search(String key);
}
