// ?  : ternary operator  : decision making 
// ?? : nulish coalasing operator  : null / undefined 
// ?.   optional chaining 

// const permissionDone = (age : number) =>{
//     if(age>= 21 ){
//         console.log("you are aligable ")
//     }
//     else{
//         console.log(" you are not aligable ")
//     }
// }

const permissionDone = (age : number ) =>{
const result = age>= 21? " you are  aligable " : " you are not aligablle "
console.log(result)
} 
permissionDone(22);
 //?? : nulish coalasing operator
// const userTheme = '';
const userTheme = 'Green';
// const selectedTheme = userTheme ?? 'light theme'
const selectedTheme = userTheme ?? 'light theme' // ?? = nulish caolasing operator  just work on undefined or null 
console.log(selectedTheme)

// const isAuthenticated = null ;
const isAuthenticated = '' ;

 const resultWithTernary = isAuthenticated ? isAuthenticated : " you are guest ";

 const resultWithNulish = isAuthenticated ?? " YOU ARE A GUEST "
 
 console.log({resultWithNulish},{resultWithTernary});
 
 // optional chianing 

 const User : {
    address : {
        city : string;
        town : string;
        postalcode?: string
    }
 } =  {
address: {
    city : 'Dhaka',
    town : 'banani',

}
 }

 const postalcode = User.address.postalcode;
 console.log(postalcode); 
 // optional chianing 

 const User : {
    address : {
        city : string;
        town : string;
        postalcode?: string
    }
 } =  {
address: {
    city : 'Dhaka',
    town : 'banani',

}
 }
 const postalcode = User.address.postalcode;
 console.log(postalcode);
