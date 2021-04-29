package com.iterator.arraysummer;

import java.util.Scanner;

public class main {

    public static void main(String[] args) {
        //构建链表
        List<Integer> array=new List<>();
        Scanner sc=new Scanner(System.in);
        String input;
        //读取数据直到遇到#
        while((input=sc.next())!=null&&!input.equals("#")){
            try{
                //将数据存到链表中
                array.add(Integer.parseInt(input));
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        //迭代求和
        int sum=0;
        Iterator<Integer> iterator=array.getIterator();
        while (iterator.hasNext()){
            iterator=iterator.next();
            sum+=iterator.getData();
        }
        System.out.printf("sum=%d\n",sum);
    }
}
