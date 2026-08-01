// conditional type  = > which that  depends  on  a condition 
//keyof gets all keys of a type and returns them as a union type.

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// type UserKeys = keyof User;
// // "name" | "age" | "email"

// Here, "name" | "age" | "email" is a union type.

// 🧠 Remember:
// keyof = get keys → create a union of keys.

type A = null;
type B  = undefined ;

type C =  A extends number ? true : B extends  undefined ? true : false; //extends is a TypeScript keyword used to inherit properties and methods from another class or interface, or to set a type restriction. [extends ]= checks whether one type is assignable to another type.

type richPeopleVehicle = {
    bike  : string;
    car : string;
    ship : string

}


type checkVehicle <T> =T extends keyof richPeopleVehicle ? true : false;

type hasbike = checkVehicle<"bike">
