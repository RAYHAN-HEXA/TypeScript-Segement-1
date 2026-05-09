// Primitive types in TypeScript

let shopName: string = 'rayhan';
let totalProducts: number = 200;
let isOpen: boolean = true;
let nullableValue: null = null;
let discount: undefined = undefined;

// Non-primitive types in TypeScript

let productNames: string[] = ['laptop', 'Mobile', 'watch'];
let prices: number[] = [2000, 3000, 3000];

interface Product {
  name: string;
  price: number;
  category: 'grocery' | 'electronics' | 'cloths';
  discount?: number;
}

const product: Product = {
  name: 'laptop',
  price: 20000,
  category: 'grocery',
};

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
