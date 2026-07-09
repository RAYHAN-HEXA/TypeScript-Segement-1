// array object 

let bazarlist : string[]  = ['apple','banana','orange','mango','grapes'];

bazarlist.push('kiwi');

let mixedArrn: (string | number|boolean)[] = ['apple', 2, true, 'banana', 3, false, 'orange', 4, true];

mixedArrn.push(true);


// ts - tuple
 let coordinates : [ number , number ] = [10,23];

 let couple : [string, string] = ['husband ','wife'];
 let RayhanNameAndRoll : [string, number] = ['rayhan', 1831]

 let destination : [ string , string , number ] = ["dhaka ", " khulna", 200];

 // reference type in typescript

  const user : {
    // orgranization : "RAYHAN";// decleares as   typ[e]-> literal type
     readonly orgranization : string;
    firstName : string;
    middleName : string;
    lastName : string;
    married ?:  boolean
   
  }  =  {
firstName : 'rayhan',
middleName : 'md',
lastName : 'rayhan',
married : false,
orgranization : "RAYHAN"

  }

 

  //if i do not provide the value of the property, it will throw an error because typescript is a statically typed language and it does not allow to assign a value to a property that is not defined in the type.

   // if i use ? -> question marks , that indicates the option type . 