import { Product } from '../models/product';

const IN_MEM_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Classic Leather Backpack',
    price: 89,
    description: 'A durable leather backpack with padded straps and a laptop sleeve.',
    category: "Accessories",
    images: ['https://picsum.photos/seed/p1/400/400'],
  },
  {
    id: 2,
    title: 'Wireless Noise-Cancelling Headphones',
    price: 149,
    description: 'O/ver-ear headphones with active noise cancellation and 30-hour battery life.',
    category: "Electronics",
    images: ['https://picsum.photos/seed/p2/400/400'],
  },
  {
    id: 3,
    title: 'Minimalist Analog Watch',
    price: 65,
    description: 'A slim stainless-steel watch with a genuine leather strap.',
    category: "Accessories",
    images: ['https://picsum.photos/seed/p3/400/400'],
  },
  {
    id: 4,
    title: 'Organic Cotton T-Shirt',
    price: 24,
    description: 'Soft, breathable t-shirt made from 100% organic cotton.',
    category: "Clothing",
    images: ['https://picsum.photos/seed/p4/400/400'],
  },
  {
    id: 5,
    title: 'Stainless Steel Water Bottle',
    price: 19,
    description: 'Double-walled insulated bottle that keeps drinks cold for 24 hours.',
    category: "Home",
    images: ['https://picsum.photos/seed/p5/400/400'],
  },
  {
    id: 6,
    title: 'Ergonomic Office Chair',
    price: 219,
    description: 'Adjustable mesh-back chair designed for all-day comfort.',
    category: "Home",
    images: ['https://picsum.photos/seed/p6/400/400'],
  },
  {
    id: 7,
    title: 'Running Sneakers',
    price: 98,
    description: 'Lightweight running shoes with responsive cushioning.',
    category: "Clothing",
    images: ['https://picsum.photos/seed/p7/400/400'],
  },
  {
    id: 8,
    title: 'Mechanical Keyboard',
    price: 129,
    description: 'Tactile mechanical keyboard with customizable RGB backlighting.',
    category: "Electronics", 
    images: ['https://picsum.photos/seed/p8/400/400'],
  },
  {
    id: 9,
    title: 'Ceramic Coffee Mug Set',
    price: 32,
    description: 'Set of two handcrafted ceramic mugs in matte finish.',
    category: "Home",
    images: ['https://picsum.photos/seed/p9/400/400'],
  },
  {
    id: 10,
    title: 'Polarized Sunglasses',
    price: 54,
    description: 'UV-protective sunglasses with a lightweight acetate frame.',
    category: "Accessories",
    images: ['https://picsum.photos/seed/p10/400/400'],
  },
];

export class ProductService {
  getProducts(): Product[] {
    return IN_MEM_PRODUCTS;
  }
}
