package com.factory;

public class StudentFactory {
    Student product;

    public StudentFactory(){
        this.product=new Student();
    }

    public StudentFactory new_product(){
        this.product=new Student();
        return this;
    }

    public StudentFactory setId(int id){
        product.setId(id);
        return this;
    }

    public StudentFactory setName(String name){
        product.setName(name);
        return this;
    }

    public StudentFactory setSex(String sex) {
        product.setSex(sex);
        return this;
    }

    public StudentFactory setGrade(String grade) {
        product.setGrade(grade);
        return this;
    }

    public StudentFactory setTel(String tel) {
        product.setTel(tel);
        return this;
    }

    public StudentFactory setEmail(String email) {
        product.setEmail(email);
        return this;
    }

    public Student create(){
        return product;
    }

}
