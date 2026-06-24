package gov.iti.jets.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;
    private String description;
    private String Category;
    private String image;


    public Product() {}


    public Product(String name, double price, String description, String Category, String image)
    { this.name = name;
        this.price = price;
        this.description = description;
        this.Category = Category;
        this.image = image;
    }


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getCategory() { return Category; }
    public void setCategory(String Category) { this.Category = Category; }
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}