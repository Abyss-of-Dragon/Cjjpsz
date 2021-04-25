package com.iterator.arraysummer;

/**
 * 迭代器接口
 * @param <T>
 */
public interface Iterator<T> {
    T getData();//获得迭代器中的数据
    boolean hasNext();//是否有下个迭代器对象
    Iterator next();//返回下个迭代器对象
}
