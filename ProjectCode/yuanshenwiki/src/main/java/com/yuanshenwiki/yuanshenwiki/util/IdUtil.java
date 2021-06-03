package com.yuanshenwiki.yuanshenwiki.util;

import java.util.ArrayList;
import java.util.List;

public class IdUtil {
    public static List<Integer> str2list(String source){
        List<Integer> ids=new ArrayList<>();
        if(source==null||source.equals(""))return ids;
        String split[]=source.split(",");
        for(String str:split){
            if(!str.equals("")){
                ids.add(Integer.valueOf(str));
            }
        }
        return ids;
    }
    public static String list2str(List<Integer> list){
        StringBuffer buffer=new StringBuffer();
        for(Integer id:list){
            buffer.append(id).append(',');
        }
        return buffer.toString();
    }
}
