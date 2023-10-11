package com.product.demo.service;

import com.product.demo.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProductsByCategory(String category);
}
