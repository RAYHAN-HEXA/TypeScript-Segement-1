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
enum Role {
    Admin = "Admim",
    Editor = "Editor",
    Viewer = "Viewer"
}


const canUpdtae = (role: Role  ) =>{
    if(role === Role.Admin ||role === Role.Editor){
        return true
    }
    else return false;

};
const canUpdtaePermissionable = canUpdtae(Role.Admin);
console.log(canUpdtaePermissionable)