package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.Chara;
import com.yuanshenwiki.yuanshenwiki.bean.Commit;
import com.yuanshenwiki.yuanshenwiki.mapper.CharaMapper;
import com.yuanshenwiki.yuanshenwiki.util.IdUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CharaServiceImp implements CharaService{

    @Autowired
    CharaMapper mapper;
    @Autowired
    CommitService commitService;
    @Override
    public Chara getCharaByID(Integer id) {
        String name=mapper.getNameByID(id);
        String rarity=mapper.getRarityByID(id);
        String weaponclass=mapper.getWeaponclassByID(id);
        String element=mapper.getElementByID(id);
        String sex=mapper.getSexByID(id);
        String nation=mapper.getNationByID(id);
        Integer hp=mapper.getHPByID(id);
        Integer damage=mapper.getDamageByID(id);
        Integer armor=mapper.getArmorByID(id);
        String growth=mapper.getGrowthByID(id);
        String tags=mapper.getTagsByID(id);
        String avatar=mapper.getAvatarByID(id);
//        new
        String tachie=mapper.getTachieByID(id);

        List<Integer> commitIds=IdUtil.str2list(mapper.getCommitsByID(id));
        List<Commit> commits=new ArrayList<>();
        for(Integer i:commitIds){
            commits.add(commitService.getCommitByID(i));
        }
        Chara c=new Chara(id,name,rarity,weaponclass,element,sex,nation,hp,damage,armor,growth,tags,avatar,commits,tachie);
        return c;
    }

    @Override
    public void commit(Integer charaId,Commit commit) {
        Chara c=getCharaByID(charaId);
        List<Commit> commits=c.getCommits();
        commits.add(commit);
        List<Integer> ids=new ArrayList<>();
        for(Commit com:commits){
            ids.add(com.getId());
        }
        mapper.setCommits(IdUtil.list2str(ids),charaId);
    }

    @Override
    public List<Chara> get4Stars() {
        List<Integer> ids=mapper.getIdsByRarity("4星");
        List<Chara> results=new ArrayList<>();
        for(Integer id:ids){
            results.add(getCharaByID(id));
        }
        return results;
    }

    @Override
    public List<Chara> get5Stars() {
        List<Integer> ids=mapper.getIdsByRarity("5星");
        List<Chara> results=new ArrayList<>();
        for(Integer id:ids){
            results.add(getCharaByID(id));
        }
        return results;
    }

    @Override
    public List<Chara> search(String key) {
        List<Integer> ids=mapper.search(key);
        List<Chara> result=new ArrayList<>();
        for(Integer id:ids){
            result.add(getCharaByID(id));
        }
        return result;
    }

}
