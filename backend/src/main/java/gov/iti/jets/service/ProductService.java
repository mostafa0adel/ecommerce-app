package gov.iti.jets.service;

import gov.iti.jets.model.Product;
import gov.iti.jets.repository.ProductRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;


    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @PostConstruct
    public void seedDatabase() {

        if (productRepository.count() == 0) {
            List<Product> products = List.of(
                    new Product(
                            "Classic Leather Backpack",
                            89,
                            "A durable leather backpack with padded straps and a laptop sleeve.",
                            "Accessories",
                            "https://picsum.photos/seed/p1/400/400"
                    ),

                    new Product(
                            "Wireless Noise-Cancelling Headphones",
                            149,
                            "Over-ear headphones with active noise cancellation and 30-hour battery life.",
                            "Electronics",
                            "https://picsum.photos/seed/p2/400/400"
                    ),

                    new Product(
                            "Minimalist Analog Watch",
                            65,
                            "A slim stainless-steel watch with a genuine leather strap.",
                            "Accessories",
                            "https://picsum.photos/seed/p3/400/400"
                    ),

                    new Product(
                            "Organic Cotton T-Shirt",
                            24,
                            "Soft, breathable t-shirt made from 100% organic cotton.",
                            "Clothing",
                            "https://picsum.photos/seed/p4/400/400"
                    ),

                    new Product(
                            "Stainless Steel Water Bottle",
                            19,
                            "Double-walled insulated bottle that keeps drinks cold for 24 hours.",
                            "Home",
                            "https://picsum.photos/seed/p5/400/400"
                    ),

                    new Product(
                            "Ergonomic Office Chair",
                            219,
                            "Adjustable mesh-back chair designed for all-day comfort.",
                            "Home",
                            "https://picsum.photos/seed/p6/400/400"
                    ),

                    new Product(
                            "Running Sneakers",
                            98,
                            "Lightweight running shoes with responsive cushioning.",
                            "Clothing",
                            "https://picsum.photos/seed/p7/400/400"
                    ),

                    new Product(
                            "Mechanical Keyboard",
                            129,
                            "Tactile mechanical keyboard with customizable RGB backlighting.",
                            "Electronics",
                            "https://picsum.photos/seed/p8/400/400"
                    ),

                    new Product(
                            "Ceramic Coffee Mug Set",
                            32,
                            "Set of two handcrafted ceramic mugs in matte finish.",
                            "Home",
                            "https://picsum.photos/seed/p9/400/400"
                    ),

                    new Product(
                            "Polarized Sunglasses",
                            54,
                            "UV-protective sunglasses with a lightweight acetate frame.",
                            "Accessories",
                            "https://picsum.photos/seed/p10/400/400"
                    )
            );
            productRepository.saveAll(products);
        }
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}