 // what is type alias? ans : A type alias is a way to create a new name for an existing type or a custom type structure in TypeScript. custome type used in another object.

 
type Userx = {

   id : number,
    name : {
        firstName : string ,
        lastName : string 
    },
    gender : " male" |" female",
    age : number,
    phone : string,
    address : {
        city : string,
        divsion : string
    }

}


const user1 : Userx
     = {

    id : 1,
    name : {
        firstName : 'rayhan',
        lastName : 'sakil'
    },
    gender : " male",
    age : 22,
    phone : '0193333333',
    address : {
        city : 'mirpur',
        divsion : 'dhaka'
    }           
}
const user2 : {
    id : number,
    name : {
        firstName : string ,
        lastName : string 
    },
    gender : " male" |" female",
    age : number,
    phone : string,
    address : {
        city : string,
        divsion : string
    }
} = {

    id : 1,
    name : {
        firstName : 'rayhan',
        lastName : 'sakil'
    },
    gender : " male",
    age : 22,
    phone : '0193333333',
    address : {
        city : 'mirpur',
        divsion : 'dhaka'
    }           
}
const user3 : {
    id : number,
    name : {
        firstName : string ,
        lastName : string 
    },
    gender : " male" |" female",
    age : number,
    phone : string,
    address : {
        city : string,
        divsion : string
    }
} = {

    id : 1,
    name : {
        firstName : 'rafrfyhan',
        lastName : 'sakil'
    },
    gender : " male",
    age : 22,
    phone : '01933332433333',
    address : {
        city : 'mirwfewfpur',
        divsion : 'dhaewfeka'
    }           
}

type IsAdmin = true;
const isAdmin : IsAdmin = true;

type name = String;

const myName : name = " mr x "

type AddFunc = (add1 : number , add2 : number) => number;

const add : AddFunc  = (add1, add2) => add1+ add2;