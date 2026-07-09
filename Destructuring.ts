//object destructuring
//array destructuring

const user = {
    id : 1,
     name : {
        firstName : 'rayhan',
        lastName : 'sakil'
     },
     age : 22,
     phone : '0193333333',
     favoriteColor : 'blue',
     address : {
        city : 'mirpur',
        country : 'bangladesh'
     }
}
// const myfavoriteColor = user.favoriteColor;
// const myaddress = user.address.city;

const {favoriteColor:myfavoriteColor, name : {firstName : myname}} = user; // name eliasing // we can not declare type of varibale in descrutuing.because typescript can automatically infer the type of variable from the object. 
const {address:{city:myaddress}} = user; // name eliasing
// console.log(myfavoriteColor);
// console.log(myname);

const frinds = ['rayhan', 'shakil', 'sabbir'];
// const mybestfriend = frinds[0];
const [,mybestfriend,] = frinds; // when we destructuring an array , the  mother varible must the  put the right side of the destrucing.
console.log(mybestfriend)

