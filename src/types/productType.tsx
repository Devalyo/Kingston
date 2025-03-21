export interface Product {
  id: string;
  name: string;
  image?: string;
  category: string;
  price: number;
  stock: number;
  colors: string[];
  sizes: string[];
}
