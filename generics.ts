            //                 Generics.   //


// In TypeScript, Generics let you write reusable code that can work with different data types while keeping type safety.

// Definition

// Generics: A way to create reusable functions, classes, or types where the data type is provided later.

// We usually use <T> for a generic type.

// function getValue<T>(value: T): T {
//   return value;
// }

// console.log(getValue<string>("Hello"));
// console.log(getValue<number>(100));
// console.log(getValue<boolean>(true));
// const Friends  : string[] =['MR.X','MR.Y','MR/Z'];


// type GenericArray<Value> = Array<Value>

type GenericArray<T> = Array<T>

const Friends  :  GenericArray<string>=['MR.X','MR.Y','MR/Z'];

// const rollNumbers :  number[] = [4,5,34,3]

const rollNumbers :   GenericArray<number> = [4,5,34,3]

// const isEligableList  : boolean[] = [true, false, true,false]
const isEligableList  : GenericArray<Boolean> = [true, false, true,false]

// type Coordinates = [number , number];
// ;
type Coordinates <x,y> = [x,y]; // declaer generic type.



const  coordinates1 : Coordinates <string,number> = ['rayhan',22]


const  coordinates2 : Coordinates <number, number> = [20,30]

// how to use generic object 

type User = {
name :string,
    age : number
}

const userList :GenericArray<User>  = [
    {
        name : "Rayhan",
        age : 22
    },
    {
        name : "karim",
        age : 99
     
    }
]
// ❌ Avoid
// GenericArray<object>

// কারণ object দিলে TypeScript জানে না object-এর ভিতরে কোন কোন property আছে।

// ✅ Better
// GenericArray<User>

// কারণ User type object-এর exact structure define করে।

// type User = {
//   name: string;
//   age: number;
// };
