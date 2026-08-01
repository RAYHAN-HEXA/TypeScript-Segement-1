
// as const ts

//enum
// An enum is a TypeScript feature that creates a fixed set of named values. You can only use the values defined inside the enum.

// Why use an enum?
// ✅ Makes code easier to read.
// ✅ Prevents typos.
// ✅ Groups related constants together.
// ✅ Improves autocomplete and type safety.

// set of fixed string literal 

// type UsersRole = "Admin" | " editor" |' viewer';

// Why enum gives an error with node
// Node.js runs JavaScript, not full TypeScript.
// In strip-only mode, Node can remove type annotations (: string, : number, keyof, generics).
// But enum is a TypeScript-only feature that must be compiled into JavaScript.
// Node cannot compile enum, so it throws an error.
// Workflow
// TypeScript (.ts)
//       │
//       ▼
// TypeScript Compiler (tsc/tsx)
//       │
//       ▼
// JavaScript (.js)
//       │
//       ▼
// Node.js
//       │
//       ▼
// Output
// Remember 🧠
// ✅ Type annotations → Node can strip (remove) them.
// ❌ enum → Node cannot compile it.
// ✅ Use tsc, tsx, or ts-node to run code that uses enum.
const userRole =  {
    Admin  : "Admin",
    Editor :  "Editor",
    Viewer  : "Viewer"
} as const
// userRole.Admin = "RAYAHN" => Not Possible , cause-> use as const .
// const userRole =  {
//     ReadonlyAdmin  : "Admim",
//     ReadonlyEditor :  "Editor",
//     ReadonlyViewer  : "Viewer"

//  how to use as a type
//  1.type of operator
// 2.keyof operator  //
/*
const user = {

name : 'Rayhan',
id :  1831


}

type of user

type user {

id : number;
name : RAYHAN

}

 
fixed string  value -> called it literal type 

type of userRole {
 Admin  : "Admim", // fixed stirng value, cause it's literal type //
Editor :  "Editor",
Viewer  : "Viewer"

}

when we use keyof , it take the take and  draw union between the  key .

typeof keyof userRole {
}
Admin | Editor |  Viewer


const userRole ={
    Admin  : "ADMIN",
    Editor :  "EDITOR",
    Viewer : "VIEWER"
}
*/

   
// }


const canEdit = (role:( typeof userRole)[ keyof typeof userRole]  ) =>{
    if( role === userRole.Admin  || role === userRole.Editor){
        return true
    }
    else return false;

};
const isEditPermissionable = canEdit(userRole.Admin);
console.log(isEditPermissionable)