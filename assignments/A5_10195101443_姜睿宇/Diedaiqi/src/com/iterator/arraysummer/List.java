package com.iterator.arraysummer;

public class List<T> {
    /**
     * iterator:迭代器对象
     * size:链表大小
     */
    private List_Iterator<T> iterator;
    private int size;

    /**
     * 获取迭代器对象
     * @return 迭代器对象
     */
    public Iterator getIterator(){
        return iterator;
    }

    /**
     * 默认构造器
     */
    public List(){
        this.iterator=new List_Iterator<>();
        size=0;
    }

    /**
     * 返回链表是否为空
     * @return size<=0
     */
    public boolean empty(){
        return size<=0;
    }

    /**
     * 向链表尾部添加数据data
     * @param data 要添加的数据
     */
    public void add(T data){
        //用迭代器迭代到链表尾部
        List_Iterator<T> iterator=this.iterator;
        while(iterator.hasNext())iterator=iterator.next;
        //在尾部添加新数据的迭代器
        List_Iterator<T> new_iterator=new List_Iterator<>(data);
        iterator.next=new_iterator;
        size++;
    }

    /**
     * 迭代器
     * @param <T> 数据类型
     */
    private class List_Iterator<T> implements Iterator{
        //数据
        T data;
        //下一个迭代器
        List_Iterator<T> next;

        //默认迭代器构造器
        private List_Iterator(){
            this.next=null;
        }
        //带初始化数据的迭代器构造器
        private List_Iterator(T data){
            this();
            setData(data);
        }

        /**
         * 设置迭代器中的数据
         * @param data 数据data
         */
        private void setData(T data){
            this.data=data;
        }

        /**
         * 返回数据data
         * @return 数据data
         */
        @Override
        public Object getData() {
            return data;
        }

        /**
         * 返回是否有下一个迭代器
         * @return 是否有下一个迭代器
         */
        @Override
        public boolean hasNext() {
            return next!=null;
        }

        /**
         * 下一个迭代器
         * @return 下一个迭代器
         */
        @Override
        public Iterator next() {
            return next;
        }
    }

}
