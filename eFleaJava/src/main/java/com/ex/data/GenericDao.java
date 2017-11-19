package com.ex.data;

import java.io.Serializable;
import java.util.List;

public interface GenericDao<T> {
    public List<T> getAll();
    public T getOneByPK(Serializable pk);
    public T update(T o);
    // delete: return 1 for success, 0 for failure
    public int delete(Serializable pk);
}
