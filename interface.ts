                       //INTERFACE AND TYPEALIAS//
// explain type alias 
// Type Alias: A Type Alias is a way to give a custom name to a type in TypeScript so that the type can be reused easily.
/*
Difference Between Type Alias and Interface

1. Interface:
- Mainly used to define the structure of an object or class.
- Uses the "interface" keyword.
- Can be extended using "extends".
- Supports declaration merging.

Example:
interface User {
  name: string;
  age: number;
}

2. Type Alias:
- Can define objects, unions, primitives, tuples, etc.
- Uses the "type" keyword.
- Can be combined using "&".
- Does not support declaration merging.

Example:
type User = {
  name: string;
  age: number;
};

Main Difference:
- Interface = mainly for Object/Class structure.
- Type Alias = more flexible, can define many kinds of types.

Easy Memory:
Interface -> Object/Class
Type Alias -> Object + Union + Primitive + Tuple + More
*/

type User =  {
    name  : string;
    age : number


}

type Role = {
    role : 'admin'| 'user'
}

type UserWithRole = Role & User // type intersection

const user1 : UserWithRole = {
    name : 'rayhan',
    age : 23,
    role : "admin"
}

const user2 : IUSERWITHROLE = {
    name : "karim",
    age : 45,
    role : "user"
}

// interface  => it only works object  type = array, object , function


// Interface: An interface defines what properties and types an object should have.

// Example
// interface User {
//   name: string;
//   age: number;
// }

// const person: User = {
//   name: "Rayhan",
//   age: 22
// };


interface IUser {
    name : string;
    age : number
}

interface IUSERWITHROLE extends IUser {
    role : "admin "| "user"
}

// function 
type ADD = (num1 : number , num2 : number) => number;

  interface IADD {
(num1 : number, num2 :  number ) : number
}

const Add : IADD = (num1, num2) => num1 + num2;

//Array

type Friends = string[];

interface IFriends {

   [index: number] : string;

}




const friends : IFriends = ["A",'B',"C"];

// RECOMENDED : ARRAY + function  => Type Alias ,   object = > interface
// 