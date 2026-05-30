// Primitive types in TypeScript

let shopName: string = 'rayhan';
let totalProducts: number = 200;
let isOpen: boolean = true;
let nullableValue: null = null;
let discount: undefined = undefined;

// Non-primitive types in TypeScript

let baseProduct: string[] = ['laptop', 'Mobile', 'watch'];
let prices: number[] = [2000, 3000, 3000];

const  Product: {
  name: string;
  price: number;
  category: 'grocery' | 'electronics' | 'cloths';
  discount?: number;
}

= {
  name: 'laptop',
  price: 20000,
  category: 'grocery',
};

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
// console.log(calculateTotal(2000,33));

// rest operator in typescript

function totalcart(...prices :number[]):number{
    return prices.reduce((total,price)=> total+ price,250);

}
// spraed operator in typesvript 
const newProducts = [...baseProduct,'applehaedphone']
console.log(newProducts);
const buyer:{CustomerName :string,age:number,email : string,contactnumber : number} = {
  CustomerName : 'rayhan',
  age : 22,
  email : 'md.rayhanx617@gmail.com',
  contactnumber :  129039039
}
const {CustomerName,age,email}= buyer
console.log(CustomerName,age,email);
type Tproduct = {
  productName : string;
  price : number ;
  category : 'grocert'|'electronics'|'cloths';
  address : {
    thana : string;
    zipCode : number ;

  }


}
const item: Tproduct = {
  productName : 'water bottle',
  price : 200,
  category : 'grocert',
  address : {
    thana : 'mirpur',
    zipCode : 1200
  }

}

type TpaymentMethid = "bkash" | "nagad" | "rocket" | "cash on delivery";

let payment : TpaymentMethid = "bkash";

type TUser = {
  name  : string;


}
type TSeller = TUser &{
  shopName : string;
  
}
const SellerName :TSeller ={
  name : 'rayhan',
  shopName :"mayer dua dokan"
}
//ternary

const stock = 0;
const Prdstatus = stock>0 ? "available" :"out of stock";
//nullish
const discountPrice = Product.discount?? 0;
//optional chaining

const sellerName = Product?.name;

let userInput :unknown ;
function processInput(input : unknown){
  // (userInput as string).toUpperCase();
  if(typeof input === "string"){
    input.toUpperCase();
  }
  
}
function throwError(msg: string):never {
  throw new Error(msg);

}
//api response 

let apiData : unknown = 'rahim';
let userName  = (apiData as string).length