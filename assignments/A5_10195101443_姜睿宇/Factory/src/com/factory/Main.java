package com.factory;

public class Main {

    public static void main(String[] args) {
        //学生工厂对象
        StudentFactory factory=new StudentFactory();
        //利用工厂给学生对象属性赋值（像流水线一样依次赋值）
        factory.setId(1).setEmail("1").setName("name").setSex("male").setGrade("2").setTel("123456789");
        //获得学生对象产品
        Student student=factory.create();
        System.out.println(student);
    }

}
