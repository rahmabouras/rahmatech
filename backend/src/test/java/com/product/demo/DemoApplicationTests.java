package com.product.demo;

import com.product.demo.model.Product;
import com.product.demo.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class DemoApplicationTests {

	@Autowired
	private ProductRepository productRepository;


	@Test
	public void testFindByCategory() {
		// Given
		Product product1 = new Product("Product1", "Category1", 10);
		Product product2 = new Product("Product2", "Category2", 5);
		Product product3 = new Product("Product3", "Category1", 15);

		// Save products to the test database
		productRepository.saveAll(Arrays.asList(product1, product2, product3));

		// When
		List<Product> category1Products = productRepository.findByCategory("Category1");
		List<Product> category2Products = productRepository.findByCategory("Category2");

		// Then
		assertEquals(2, category1Products.size());
		assertEquals(1, category2Products.size());
	}
}
