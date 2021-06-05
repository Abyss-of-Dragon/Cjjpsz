package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.Commit;
import com.yuanshenwiki.yuanshenwiki.bean.Weapon;
import com.yuanshenwiki.yuanshenwiki.mapper.WeaponMapper;
import com.yuanshenwiki.yuanshenwiki.util.IdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service

public class WeaponServiceImp implements WeaponService{

    @Autowired
    WeaponMapper mapper;
    @Autowired
    CommitService commitService;
    @Override
    public Weapon getWeaponByID(Integer id) {
        String name=mapper.getNameByID(id);
        String type=mapper.getTypeByID(id);
        String rarity=mapper.getRarityByID(id);
        String access=mapper.getAccessByID(id);
        String basic_attribute1=mapper.getBasic_attribute1ByID(id);
        String basic_attribute2=mapper.getBasic_attribute2ByID(id);
        Integer atk=mapper.getAtkByID(id);
        String sec_attribute=mapper.getSec_attributeByID(id);
        String skill=mapper.getSkillByID(id);
        String avatar=mapper.getAvatarByID(id);
        List<Integer> commitIds=IdUtil.str2list(mapper.getCommitsByID(id));
        List<Commit> commits=new ArrayList<>();
        for(Integer i:commitIds){
            commits.add(commitService.getCommitByID(i));
        }
        Weapon c=new Weapon(id,name,type,rarity,access,basic_attribute1,basic_attribute2,atk,sec_attribute,skill,avatar,commits);
        return c;
    }

    @Override
    public void commit(Integer WeaponId,Commit commit) {
        Weapon c=getWeaponByID(WeaponId);
        List<Commit> commits=c.getCommits();
        commits.add(commit);
        List<Integer> ids=new ArrayList<>();
        for(Commit com:commits){
            ids.add(com.getId());
        }
        mapper.setCommits(IdUtil.list2str(ids),WeaponId);
    }

    @Override
    public List<Weapon> get4Stars() {
        List<Integer> ids=mapper.getIdsByRarity("4星");
        List<Weapon> results=new ArrayList<>();
        for(Integer id:ids){
            results.add(getWeaponByID(id));
        }
        return results;
    }

    @Override
    public List<Weapon> get5Stars() {
        List<Integer> ids=mapper.getIdsByRarity("5星");
        List<Weapon> results=new ArrayList<>();
        for(Integer id:ids){
            results.add(getWeaponByID(id));
        }
        return results;
    }

    @Override
    public List<Weapon> search(String key) {
        List<Integer> ids=mapper.search(key);
        List<Weapon> result=new ArrayList<>();
        for(Integer id:ids){
            result.add(getWeaponByID(id));
        }
        return result;
    }

}
